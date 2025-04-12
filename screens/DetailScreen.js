import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { anime } = route.params;

  if (!anime) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No anime data found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={anime.image} style={styles.image} />
      <Text style={styles.title}>{anime.title}</Text>
      <Text style={styles.description}>{anime.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
