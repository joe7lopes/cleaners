import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

export default ReviewCard = ({title, date, comment, rating}) => (
  <View style={styles.container}>
    <View style={styles.leftContainer}>
      <Text>{title}</Text>
      <Text>{moment(date).format('DD-MM-YYYY')}</Text>
      <Text>{comment}</Text>
    </View>
    <View style={styles.rightContainer}>
      <Text>{rating}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 20
  },
  leftContainer: {
    flex: 3
  },
  rightContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  }
});