import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabFiveScreen() {
  const initialRegion = {
    latitude: 6.465422, // Example: Lagos, Nigeria coordinates
    longitude: 3.406448,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map View</Text>
      {Platform.OS === 'web' ? (
        <Text style={styles.webMessage}>
          Maps are not fully supported or require different setup on web.
          Please run this on an actual device or simulator.
        </Text>
      ) : (
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          showsUserLocation={true}
          followsUserLocation={true}
        // You might need an API key for Google Maps depending on your setup and usage
        // For Expo Go and basic usage, it often works without one.
        >
          {/* Example Marker */}
          <Marker
            coordinate={{ latitude: 6.465422, longitude: 3.406448 }}
            title={"Awoyaya, Lagos"}
            description={"Your current location (example)"}
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  map: {
    width: '100%',
    height: '70%', // Adjust height as needed
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  webMessage: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  }
});