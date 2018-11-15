import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {color} from '../../../config/styles';
import {Ironing, Waching, Cleaning} from '../../../assets/images';

const getServiceImage = (serviceName, color) => {
  const width = height= '40';
  switch (serviceName) {
    case 'IRONING':
      return (<Ironing width={width} height={height} color={color}/>)
    case 'WACHING':
      return (<Waching width={width} height={height} color={color}/>)
    case 'CLEANING':
      return (<Cleaning width={width} height={height} color={color}/>)
  }
}

export default ({style, text, onPress, backgroundColor, contentColor}) => {
  return (
    <View style={[styles.container ,{backgroundColor}, style]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.center}>
          {getServiceImage(text, contentColor)}
          <Text style={{color: contentColor}}>{text}</Text>
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
  },
  center: {
    alignItems: 'center'
  }
});