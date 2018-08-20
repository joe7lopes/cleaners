import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class CleanerRequestConfirmation extends React.Component {

  onSend = () =>{
    this.props.navigation.popToTop();
    this.props.navigation.navigate('Offers');
  }

  render(){
    return (
      <View>
        <Text>Cleaner request confirmation</Text>
        <TouchableHighlight onPress={this.onSend}>
          <Text>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default CleanerRequestConfirmation;