import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {color} from '../../config/styles';

export default (props) => {
  const { selected, text } = props; 
  const backgroundColor = selected ? color.primary : 'white';
  const boxColor = selected ? 'white' : 'black';
  return (
    <View style={[styles.container ,{backgroundColor}, props.style]}>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View>
          <Text style={{color: boxColor}}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
)};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderColor: color.gray,
    borderWidth: 1
  }
});