import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Avatar} from 'react-native-elements';

export default CleanerCard = ({
  style,
  firstName = '',
  lastName = '',
  services = [],
  languages = [],
  price = 0,
  rating = 0
}) => {

  const arrayToString = (array) => array.reduce((acc, curr) => {
      return acc + curr.name + ', ';
    }, '');
  

  const languagesList = arrayToString(languages);
  const servicesList = arrayToString(services);
  const title = `${firstName.toUpperCase()[0]}${lastName.toUpperCase()[0]}`;

  return (
    <View style={[styles.container, style]}>
      <Avatar title={title}
      large rounded activeOpacity={0.7}/>

      <View style={styles.detailsContainer}>
        <Text>{`${firstName} ${lastName}`}</Text>
        <Text>{languagesList}</Text>
        <Text>{servicesList}</Text>
        <Text>{price} zl/h</Text>
      </View>

      <View style={styles.rating}>
        <Text>{`${rating}/10`}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal:8,
    borderRadius: 10
  },
  detailsContainer:{
    flex:2,
    marginRight: 8,
    marginLeft: 8
  },
  rating:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});