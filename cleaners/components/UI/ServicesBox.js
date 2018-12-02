import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {color} from '../../config/styles';

export default (props) => {
  const { selected, text }= props; 
  const backgroundColor = selected ? color.primary : color.primary + '26';
  const textColor = selected ? 'white' : color.primary;
  return (
    <View style={[props.style, styles.container, {backgroundColor}]}>
      <TouchableWithoutFeedback onPress={props.onSelect}>
        <View style={styles.innerContainer}>
          {props.image}
          <Text style={[styles.text, {color: textColor}]}>{text.slice(0, 1) + text.slice(1, text.length).toLowerCase()}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
)};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 7,
        paddingHorizontal: 11,
        borderRadius: 25
    },
    innerContainer: {
        flexDirection: 'row'
    },
    text: {
        paddingLeft: 5
    }
});