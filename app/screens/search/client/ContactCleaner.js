import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon, Button, FormInput, FormLabel} from 'react-native-elements';
import {DatePicker, TimePicker} from '../../../components/UI';

class ContactCleaner extends React.Component {

  state = {
    address: 'Ul aaa',
    date: new Date()
  }

  // note, we need to validade if the cleaner performs the service in that address

  setDate = (date) => {
    this.setState({date})
  }

  render() {
    const {address, date} = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={this.props.onClose}>
          <Icon name='cancel' color='#d3d3d3'/>
        </TouchableOpacity>
        <View style={styles.body}>
          <Text>Please confirm where the service should be realised</Text>
          <FormLabel>Address</FormLabel>
          <FormInput value={address}/>

          <FormLabel>Date</FormLabel>
          <View style={styles.datePickerContainer}>
            <DatePicker/>
          </View>

          <FormLabel>Time</FormLabel>
          <View
            style={[
            styles.datePickerContainer, {
              flexDirection: 'row'
            }
          ]}>
            <View>
              <FormLabel>From</FormLabel>
              <TimePicker/>
            </View>
            <View style={{
              marginLeft: 20
            }}>
              <FormLabel>To</FormLabel>
              <TimePicker/>
            </View>
          </View>
        </View>
          <Button title='Send'/>
      </View>
    )
  }
}

export default ContactCleaner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  body: {
    flex:1,
  },
 
  closeButton: {
    alignItems: 'flex-end'
  },
  datePickerContainer: {
    marginHorizontal: 20
  }
});