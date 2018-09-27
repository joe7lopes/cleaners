import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import {Icon, Button, FormInput, FormLabel} from 'react-native-elements';
import {DatePicker, TimePicker, ServicesBox} from '../../../components/UI';
import {services as servicesData} from '../../../config/data';
import {ActionCreators} from '../../../actions';

class ContactCleaner extends React.Component {

  state = {
    address: undefined,
    date: new Date(),
    services: [],
    message: undefined
  }

  componentWillMount() {
  
  }

  renderServices = () => {
    return this
      .state
      .services
      .map(service => {
        const {id, name, selected} = service;
        return <ServicesBox
          key={id}
          style={{
          marginLeft: 8
        }}
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

  handleOnSend = () => {
    
    const data = {...this.state};
    this.props.createJob(data);
  }

  render() {
    const {address, message} = this.state;
    return (
      <ScrollView bounces={false}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeButton} onPress={this.props.onClose}>
            <Icon name='cancel' color='#d3d3d3'/>
          </TouchableOpacity>
          <View style={styles.body}>
            <Text>Service should be realised in:</Text>
            <FormLabel>Address</FormLabel>
            <FormInput value={address}/>

            <FormLabel>Date</FormLabel>
            <View style={styles.datePickerContainer}>
              <DatePicker/>
            </View>

            <View style={{
              flexDirection: 'row'
            }}>
              <View>
                <FormLabel>From</FormLabel>
                <TimePicker style={styles.datePickerContainer}/>
              </View>
              <View>
                <FormLabel>To</FormLabel>
                <TimePicker style={styles.datePickerContainer}/>
              </View>
            </View>

            <FormLabel>Services that you'll request</FormLabel>
            <View style={styles.servicesContainer}>
              {this.renderServices()}
            </View>

            <FormLabel>Aditional message</FormLabel>
            <TextInput style={styles.textArea} multiline={true} value={message}/>

          </View>

        </View>
        <Button 
        onPress={this.handleOnSend} 
        style={styles.sendButton} title='Send'/>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect (undefined, mapDispatchToProps)(ContactCleaner);

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    paddingHorizontal: 8,
    marginTop: 8,
    height: 100,
    backgroundColor: '#d3d3d3'
  },
  servicesContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 8
  },
  sendButton: {
    marginHorizontal: 8,
    paddingTop: 20,
    bottom: 0
  }
});