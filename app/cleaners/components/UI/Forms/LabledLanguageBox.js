import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, font} from '../../../config/styles';
import {LanguageBox} from '../../UI'

const renderLanguages = (languages) => {
  console.log("languages", languages);
  return languages.map(lang => (
    <LanguageBox key={lang.code} text={lang.name}/>
  ));
}
export default ({label='Languages', containerStyle, languages}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.languageContainer}>
      {renderLanguages(languages)}
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
  languageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  
});