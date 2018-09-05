import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, FormLabel, Button} from 'react-native-elements';

export default({style, address, firstName, lastName, date, price, onApprove, onReject}) => (
  <View style={[styles.container, style]}>

    <View style={styles.row}>
      <Avatar medium rounded title={firstName}/>
      <Text>email</Text>
    </View>

    <FormLabel>Address</FormLabel>
    <Text>{address}</Text>
    <FormLabel>Date</FormLabel>
    <Text>{address}</Text>
    <FormLabel>Price</FormLabel>

    <View style={[styles.row, styles.buttons]}>
      <Button title='Approve' onPress={onApprove}/>
      <Button title='Reject' onPress={onReject}/>
    </View>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  },
  row: {
    flexDirection: 'row'
  },
  buttons: {
    justifyContent: 'center'
  }
});