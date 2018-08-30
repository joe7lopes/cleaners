import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

export default class CleanerDetailReviews extends React.Component {
  render(){
    return(
      <View style={styles.container}>
      <Text>review 1</Text>
      <Text>need to do review card</Text>
      </View>
    );
  }


}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'orange'
}
});