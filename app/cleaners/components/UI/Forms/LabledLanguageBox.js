import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, font} from '../../../config/styles';
import {LanguageBox} from '../../UI'

const renderLanguages = (languages, onSelect) => {
  return languages.map(lang => (
    <LanguageBox style={{marginTop: 8}} key={lang.code} text={lang.name} selected={lang.selected} onSelect={()=>onSelect(lang.code)}/>
  ));
}
export default ({label='Languages', containerStyle, languages, onLanguageSelect}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.languageContainer}>
        {renderLanguages(languages, onLanguageSelect)}
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
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  }
  
});