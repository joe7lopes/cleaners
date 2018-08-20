import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class PriceSlider extends React.Component {

  state = {
    value: {min:2, max: 20}
  }

  render(){
    return(
      <View>

        <View style={styles.labelContainer}>
          <View style={styles.row}>
            <Text>10</Text>
            <Text> PLN</Text>
          </View>
          <View style={styles.row}>
            <Text>35</Text>
            <Text> PLN</Text>
          </View>
        </View>
      
      </View>
    );
  }
}

export default PriceSlider;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius:5,
    borderColor: '#d3d3d3',
    borderWidth: 1
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  }
});