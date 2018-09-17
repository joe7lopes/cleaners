import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import {route} from '../../../config/routes/navigation';
import {ActionCreators} from '../../../actions';
import { SUCCESS} from '../../../actions/types';

class Step1 extends React.Component {

  state = {
    firstName: undefined,
    lastName: undefined,
    address: undefined,
    phone: undefined,
    email: undefined
  }

  handleOnDone = () => {
    const {userType} = this.props;
    const newUser = {
      ...Object.assign({}, this.state),
      type: userType
    };
    console.log("creating user",newUser);
    this.props.createUser(newUser);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.status === SUCCESS){
      this.props.navigation.navigate(route.clientApp);
    }
  }

  render() {
      const {firstName, lastName, phone, address, email} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FormLabel>First Name</FormLabel>
        <FormInput value={firstName} onChangeText={(firstName)=> this.setState({firstName})}/>
        <FormLabel>last Name</FormLabel>
        <FormInput value={lastName} onChangeText={(lastName)=> this.setState({lastName})}/>
        <FormLabel>Phone number</FormLabel>
        <FormInput value={phone} onChangeText={(phone)=> this.setState({phone})}/>
        <Text>By letting us know where you live, we will filter cleaners of your area.</Text>
        <FormLabel>Address</FormLabel>
        <FormInput value={address} onChangeText={(address)=> this.setState({address})}/>
        <FormLabel>Email Address</FormLabel>
        <FormInput value={email} onChangeText={(email)=> this.setState({email})}/>
        <Button style={styles.doneButton} title='Done' onPress={this.handleOnDone}/>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = ({user}) => ({
    status: user.status
});

export default connect(mapStateToProps, mapDispatchToProps)(Step1);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: 'white'
  },
  doneButton: {
    marginTop: 20
  }
});