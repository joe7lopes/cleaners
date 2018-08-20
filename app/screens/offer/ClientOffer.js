import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class ClientOffer extends React.Component {

  onNewOfferPress = () => {
    this.props.navigation.navigate('NewClientOffer');
  }

  render(){
    return(
      <SafeAreaView>
        <View>
          <Text>Client Offer screen</Text>
          <TouchableHighlight onPress={this.onNewOfferPress}>
            <Text>Create New Offer</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}
