import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Header';

const animeList = [
  {
    title: 'Solo Leveling Season 2: Arise from the Shadow',
    image: require('../assets/solo_leveling.jpg'),
    description: 'Solo Leveling continues with epic new battles...',
  },
  {
    title: 'Blue Lock: Additional Time!',
    image: require('../assets/blue_lock.jpg'),
    description: 'Blue Lock returns with more intense soccer action...',
  },
  {
    title: 'Devil May Cry (2025)',
    image: require('../assets/devil_may_cry.jpg'),
    description: 'The demon hunter returns in this stylish reboot...',
  },
  {
    title: 'Wind Breaker Season 2',
    image: require('../assets/wind_breaker.jpg'),
    description: 'Season 2 of Wind Breaker brings street races to new heights.',
  },
  {
    title: 'The Too-Perfect Saint',
    image: require('../assets/too_perfect_saint.jpg'),
    description: 'A dramatic tale of betrayal and destiny...',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerText}>Popular this week</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {animeList.map((anime, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => {
              console.log('Navigating to:', anime.title); // DEBUG LOG
              navigation.navigate('Details', { anime });
            }}
          >
            <Image source={anime.image} style={styles.image} />
            <Text style={styles.title}>{anime.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 16,
  },
  scrollContainer: {
    paddingLeft: 16,
  },
  card: {
    width: 180,
    marginRight: 16,
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 220,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});
