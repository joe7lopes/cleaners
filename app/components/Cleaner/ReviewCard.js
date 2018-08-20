import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewCard = ({name, date, text, rating}) =>{
  const ratingViewColor = getRatingViewColor(rating);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{name}</Text>
        <Text>{date}</Text>
      </View>
      <View style={styles.body}>
        <Text>{text}</Text>
        <View style={{backgroundColor: ratingViewColor}}>
          <Text>{rating}</Text>
        </View>
      </View>
    </View>
  );
}

const getRatingViewColor = (rating) => {
  if(rating >= 5 && rating < 8){
    return 'orange';
  }else if(rating >= 8){
    return 'green';
  }else{
    return 'red';
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1
  },
  header: {
    flexDirection: 'row'
  },
  body: {
    flexDirection: 'row'
  }
});

export default ReviewCard;