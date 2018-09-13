import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, FormLabel, Button} from 'react-native-elements';
import moment from 'moment';

export default({style, address, firstName, lastName, date, price, onApprove, onReject}) => (
  <View style={[styles.container, style]}>

    <View style={styles.row}>
      <Avatar medium rounded title={firstName}/>
      <Text>mail</Text>
    </View>

    <FormLabel>Address</FormLabel>
    <Text>{address}</Text>
    <FormLabel>When</FormLabel>
    <Text>{moment(date).format('DD-MM-YYYY @ hh:mm')}</Text>
    <FormLabel>Price</FormLabel>
    <Text>{`${price} zl`}</Text>

    <View style={[styles.row, styles.buttons]}>
      {onApprove && <Button title='Approve' onPress={onApprove}/>}
      {onReject && <Button title='Reject' onPress={onReject}/>}
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