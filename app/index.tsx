import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CREST ONLINE</Text>
      <View style={styles.statusCard}>
        <Text style={styles.statusText}>• System: Verified</Text>
        <Text style={styles.statusText}>• Connection: Elite Tunnel</Text>
        <Text style={styles.statusText}>• Dev: Gibson Kobia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#00FF00',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 20,
  },
  statusCard: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
  },
  statusText: {
    color: '#00FF00',
    fontSize: 16,
    fontFamily: 'monospace',
    marginVertical: 4,
  },
});
