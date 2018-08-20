import React from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';
import { color } from '../../../config/styles';

export default (props) => (
  <View style={[styles.container, props.style]}>
    <Text style={styles.label}>{props.label || "label"}</Text>

    <TextInput 
      {...props}
      style={[styles.custom]}>
    </TextInput>
  </View>
  
);

const styles = StyleSheet.create({
  custom: {
    height: 50,
    backgroundColor: color.gray
  },
  label: {
    color: 'black'
  }
});