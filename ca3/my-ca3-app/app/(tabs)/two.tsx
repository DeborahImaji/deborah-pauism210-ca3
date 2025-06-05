import { StyleSheet, ScrollView, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const [name, setName] = useState('e.g. John Doe');
  const [email, setEmail] = useState('e.g. johndoe@domain.com');

  const handleUpdateProfile = () => {
    Alert.alert('Profile Updated', `Name: ${name}\nEmail: ${email}\n`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Your Profile</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your full name"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      <Button title="Update Profile" onPress={handleUpdateProfile} color="#007bff" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
});