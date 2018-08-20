import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../components/UI';
import { color } from '../../config/styles';

export default CleanerCard = ({firstName, lastName, services=[], price, languages = [], rating }) => {


  const arrayToString = (array) => {
    return array.reduce((acc, curr)=>{
      return acc + curr+ ', ';
    }, '');
  }
  let languagesStr = arrayToString(languages);
  let servicesStr = arrayToString(services);

  return (
    <View style={styles.container}>
    
      <View style={styles.left}>
        <View style={styles.header}>
          <Text style={styles.nameText}>{firstName} </Text>
          <Text style={styles.nameText}>{lastName}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.labelText}>Services: {servicesStr}</Text>
          <Text style={styles.labelText}>Languages: {languagesStr}</Text>
          <Text style={styles.priceText}>Price:{price}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.ratingText}>{rating}</Text>
        <Text style={styles.reviewText}>1234</Text>
        <Text style={styles.reviewText}>Reviews</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color.white
  },
  left: {
    flex: 4,
    backgroundColor: color.white,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 8
  },
  detail: {
    padding: 8,
  },
  ratingText: {
    fontSize: 24
  },
  reviewText: {
    fontSize: 8
  },
  nameText: {
    fontSize: 24,
  },
  labelText: {
    fontSize: 16
  },
  priceText: {
    fontSize: 20
  }
});