import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color, font } from '../../config/styles';

export default ProfileRating = () => (
  <View style={styles.container}>

    <View style={styles.jobs}>
      <Text style={styles.ratingNumber}>123</Text>
      <Text style={styles.ratingDescription}>JOBS</Text>
    </View>

    <View style={styles.spacer} />

    <View style={styles.rating}>
      <Text style={styles.ratingNumber}>8.0</Text>
      <Text style={styles.ratingDescription}>1234 reviews</Text>
    </View>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  jobs: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingNumber: {
    fontSize: font.medium,
    color: color.white
  },
  ratingDescription: {
    color: color.white
  },
  spacer: {
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'gray',
    width: 2,
  }
});