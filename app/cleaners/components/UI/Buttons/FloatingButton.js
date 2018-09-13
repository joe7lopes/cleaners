import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default FloatingButton = ({style, title, children, onPress}) => (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text>{title}</Text>
      {children}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    marginLeft: 20,
    marginRight: 20,
    height: 60,
    borderRadius: 60,
    position: 'absolute',
  }

});
