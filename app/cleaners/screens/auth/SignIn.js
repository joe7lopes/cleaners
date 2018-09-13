import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, View, SafeAreaView, Modal, Text, Alert } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { ActivityStatusIndicator } from '../../components/UI';
import { ActionCreators } from '../../actions';
import { SUCCESS } from '../../actions/types';

class SignIn extends React.Component {
  
  state = {
    isSignUpVisible: false,
    phone: '',
    code: '',
    status: undefined
  }

  componentWillReceiveProps(prevProps, nextProps){
    const { status } = prevProps
    if(status === SUCCESS){
      this.setState({isSignUpVisible: false})
    }
  }

  handleSignIn = () => {
    const { phone, code } = this.state;
    this.props.signIn(phone, code);
  }

  handleRegistration = () => {
    const { phone } = this.state;
    this.props.registerPhone(phone);
  }

  renderRegistrationStatusPopup = () => {
    const { status, error } = this.props;
    return (
      <ActivityStatusIndicator 
        successText="Phone registered"
        failureText="Unable to register phone"
        errorMessage={"error message " + error}
        pendingText= "Registering phone..."
        status={status}/>
    );
  }

  renderRegistrationPopup = () => {
    const { phone, isSignUpVisible } = this.state;
    return (
    <Modal
      visible={isSignUpVisible}
      transparent={false}>
      <View style={styles.modalContainer}>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput
          value={phone}
          onChangeText={phone=> this.setState({phone})}/>
          <Button
            large 
            title="Register"
            onPress={this.handleRegistration}/>
          <Button
            large 
            title="Close"
            onPress={()=> this.setState({isSignUpVisible: false})}/>
          {this.renderRegistrationStatusPopup()}
      </View>
    </Modal>
    
  );}

  render() {
    const { phone, code, isSignUpVisible } = this.state;

    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.logo}>
            <Text>Logo</Text>
          </View>
          
          <View style={styles.signinContainer}>
            <FormLabel>Enter Phone Number</FormLabel>
            <FormInput
              value={phone}
              onChangeText={phone => this.setState({phone})}/>
            <FormLabel>Enter Received Code</FormLabel>
            <FormInput 
              value={code}
              onChangeText={code => this.setState({code})}
              keyboardType='numeric'/>
            <Button
              large
              title='SIGN IN'
              onPress={this.handleSignIn}/>
          </View>

          <View style={styles.bottom}>
            <View>
              <Button
                large 
                title="Don't have an account? Register"
                onPress={()=> this.setState({isSignUpVisible: true})}/>
            </View>
          </View>
          { isSignUpVisible && this.renderRegistrationPopup()}
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = ({auth}) => {
    return {
      status: auth.status,
      error: auth.error
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  logo: {
    flex: 1,
    backgroundColor: 'orange'
  },
  signinContainer: {
    flex: 2,
  },
  inputView:{
    marginBottom: 40,
    width: '80%',
  },
  bottom: {
    height: '10%'
  },
  registerButton: {
    height: '100%'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});