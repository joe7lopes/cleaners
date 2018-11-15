import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, font} from '../../../config/styles';
import {TextItemBox} from '..'

const renderItems = (items, onPress) => {
  return items.map((item, index) => {
      const {code, name, selected} = item;
      return(
        <TextItemBox style={{marginTop: 8}} key={index} text={name} selected={selected} onPress={()=>onPress(code)}/>
      )
  });
}

export default ({label='Items', containerStyle, items, onItemPress}) => {
  if(!onItemPress) {
    onItemPress = () => {};
  }
  return (
    <View style={containerStyle}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.itemsContainer}>
        {renderItems(items, onItemPress)}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  labelText:{
    color: color.formLabel,
    fontWeight: 'bold',
    fontSize: font.m_1,
  },
  itemsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  }
  
});