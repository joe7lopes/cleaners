import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Icon, Button, FormInput, FormLabel} from 'react-native-elements';
import {DatePicker, TimePicker, ServicesBox} from '../../../components/UI';
import {services as servicesData} from '../../../config/data';

class ContactCleaner extends React.Component {

  state = {
    address: 'Ul aaa',
    date: new Date(),
    services: [],
    message: 'message /n sss'
  }


  componentWillMount() {
    let services = servicesData.map(lang => {
      return {
        ...lang,
        selected: false
      };
    });
    this.setState({services})
  }

  renderServices = () => {
    return this.state.services.map(service => {
      const {id, name, selected} = service;
      return <ServicesBox
        key={id}
        text={name}
        selected={selected}
        onSelect={() => this.handleServiceSelection(id)}/>
    });
  };

  // handlers

  handleServiceSelection = (id) => {
    let services = this
      .state
      .services
      .slice();
    const index = services.findIndex(el => {
      return id === el.id;
    });

    services[index].selected = !services[index].selected;
    this.setState({services});
  };

   // note, we need to validade if the cleaner performs the service in that address

   setDate = (date) => {
    this.setState({date})
  }

  render() {
    const {address, message} = this.state;
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

          <FormLabel>Services that you'll request</FormLabel>
          <View style={{
            flexDirection: 'row'
          }}>
            {this.renderServices()}
          </View>

          
          <FormLabel>Aditional message</FormLabel>
          <TextInput style={styles.textArea} multiline={true} value={message}/>

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
    marginVertical: 20
  },
  body: {
    flex: 1
  },

  closeButton: {
    alignItems: 'flex-end'
  },
  datePickerContainer: {
    marginHorizontal: 20
  },
  textArea: {
    marginHorizontal: 20,
    height: '20%',
    paddingHorizontal: 20,
    backgroundColor: '#d3d3d3'
  }
});