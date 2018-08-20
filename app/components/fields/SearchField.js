import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { color } from '../../config/styles';

export default SearchField = ({ filters=[], onFilterPress, onFilterReset}) => {
  
  let selectedFilters = filters.map(filter =>{
    return (
      <View key={filter.name} style={styles.filter}>
        <Text>{filter.name}</Text>
      </View>
    )
  });
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <Text style={styles.buttonText}>Filters</Text>
      </TouchableOpacity>
      <View style={styles.filtersContainer}>
        {selectedFilters}
      </View>
      <TouchableOpacity onPress={onFilterReset}>
        <Text>Reset</Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: color.white,
    flexDirection: 'row',
  },
  filterButton: {
    backgroundColor: color.secondary,
    justifyContent: 'center',
  },
  filtersContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  filter: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    marginLeft: 8
  }
  
});



