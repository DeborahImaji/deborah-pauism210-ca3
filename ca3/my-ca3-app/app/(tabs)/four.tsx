import { StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

interface User {
  id: number;
  name: string;
  company: string;
  usernmae: string;
  email: string;
  address: string;
  zip: string;
  state: string;
  country: string;
  phone: string;
  photo: string;
};

export default function TabFourScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Explicitly type error as string or null

  const API_URL = 'https://fake-json-api.mock.beeceptor.com/users';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: User[] = await response.json(); // Cast the fetched data to User[]
        setUsers(data);
      } catch (err) {
        // Ensure err is treated as an Error object to access message
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading user data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Text style={styles.errorText}>Could not fetch users.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Retrieved User Data</Text>
      {users.length === 0 ? (
        <Text style={styles.noDataText}>No user data found.</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()} // 'item.id' is now correctly typed
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text style={styles.itemText}>Name: {item.name}</Text>
              <Text style={styles.itemText}>Email: {item.email}</Text>
              <Text style={styles.itemText}>Company: {item.company}</Text>
              <Text style={styles.itemText}>Phone: {item.phone}</Text>
            </View>
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  userItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#444',
  },
  noDataText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    color: '#888',
  },
});