import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {color} from '../../config/styles';

export default (props) => {
    const { selected, text }= props;
    const backgroundColor = selected ? color.primary : color.primary + '26';
    const textColor = selected ? 'white' : color.primary;
  return (
    <View style={[styles.container ,{backgroundColor}, props.style]}>
      <TouchableWithoutFeedback onPress={props.onSelect}>
        <View>
          <Text style={{color: textColor}}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
)};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 7,
        paddingHorizontal: 11,
        borderRadius: 25,
        marginRight: 10
    },
    innerContainer: {
        flexDirection: 'row'
    }
});