import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '../../config/styles';

export default LabeledText = ({label, text}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
  },
  label: {
    color: color.gray_dark
  },
  text: {
    color: color.black
  }
});