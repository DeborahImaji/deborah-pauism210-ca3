import { StyleSheet, Image } from 'react-native';
import React from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Mobile App!</Text>
      <Image
        source={require('../../assets/images/deborah.png')}
        style={styles.image}
      />
      <Text style={styles.description}>
        I created this app for the PAU-ISM 210 Continuous Assessment 3.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Makes it a circle
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#add8e6',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
  },
});
