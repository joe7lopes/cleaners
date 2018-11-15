import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, font} from '../../../config/styles';
import ServiceBox from './ServiceBox';

const renderItems = (items, onPress) => {
  return items.map((item, index) => {
      const {code, name, selected} = item;
      const backgroundColor = selected ? color.primary : color.gray;
      const contentColor = selected ? 'white' : color.gray_dark;
      return(
        <ServiceBox 
          style={{marginTop: 8}}
          key={name} text={name}
          backgroundColor={backgroundColor}
          contentColor={contentColor}
          onPress={()=>onPress(code)}/>
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