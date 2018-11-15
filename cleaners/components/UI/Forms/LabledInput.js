import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {color, font} from '../../../config/styles';
export default ({label='Text', value, onChangeText, placeholder, containerStyle, readOnly=false}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}>
        </TextInput>
      {!readOnly && <View style={styles.rowView} /> }
    </View>
  )
};

const styles = StyleSheet.create({
  labelText:{
    color: color.formLabel,
    fontWeight: 'bold',
    fontSize: font.m_1,
  },
  textInput: {
    marginVertical: 4,
    fontSize: font.m_2,
  },
  rowView: {
    height: 1,
    backgroundColor: color.formLabelLine
  }
});