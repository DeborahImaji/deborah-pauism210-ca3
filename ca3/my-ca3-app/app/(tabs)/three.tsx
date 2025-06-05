// app/(tabs)/three.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Import Link for navigation

// Define an interface for the User data structure
interface User {
  id: number; // Assuming 'id' is a number
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  // Add other properties if they exist in your API response
}

export default function TabThreeScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dataFetched, setDataFetched] = useState(false); // New state to track if data was successfully fetched

  const API_URL = 'https://fake-json-api.mock.beeceptor.com/users';

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); // Ensure loading is true when fetching starts
      setError(null); // Clear any previous errors
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: User[] = await response.json(); // Data is fetched here
        console.log("Data fetched successfully in Tab 3:", data.length, "users"); // Log for debugging
        setDataFetched(true); // Set to true on success
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred during data fetch');
        }
        setDataFetched(false); // Set to false on error
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Runs once on component mount

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API Data Fetch Status</Text>

      {loading && (
        <View style={styles.statusContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.statusText}>Fetching user data from API...</Text>
        </View>
      )}

      {error && (
        <View style={styles.statusContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
          <Text style={styles.statusText}>Failed to fetch data.</Text>
        </View>
      )}

      {!loading && !error && dataFetched && (
        <View style={styles.statusContainer}>
          <Text style={styles.successText}>Data fetched successfully!</Text>
          <Text style={styles.instructionText}>
            Please navigate to the "List Data" tab (Tab 4) to view the details.
          </Text>
          {/* Optional: A button/link to navigate directly to tab 4 */}
          <Link href="/four" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Go to List Data Tab</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}

      {!loading && !error && !dataFetched && (
        <View style={styles.statusContainer}>
          <Text style={styles.noDataText}>Data fetch did not complete. Please check console for errors.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  statusContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
  },
  statusText: {
    marginTop: 15,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#007bff',
    marginTop: 15,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 22,
  },
  noDataText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});