import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default (props) => {
  const { selected, text }= props; 
  const backgroundColor = selected ? 'blue' : 'white';
  const color = selected ? 'white' : 'black';
  return (
    <View style={[props.style, styles.container ,{backgroundColor}]}>
      <TouchableWithoutFeedback onPress={props.onSelect}>
        <View>
          <Text>Image</Text>
          <Text style={{color}}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
)};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius:5,
    borderColor: '#d3d3d3',
    borderWidth: 1
  }
});