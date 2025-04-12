import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>
        anime<Text style={styles.dot}>•</Text>planet
      </Text>
      <Text style={styles.tagline}>Discover new anime</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2c3e50',
    paddingVertical: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  dot: {
    color: '#ff5c5c',
  },
  tagline: {
    fontSize: 14,
    color: 'lightgray',
    marginTop: 4,
  },
});
