import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import {FormLabel, FormInput, Button, Divider} from 'react-native-elements'
import {ActionCreators} from '../../actions';

class SignIn extends React.Component {

  state = {
    phone: '+48792702968',
    code: '123',
    status: undefined
  }

  componentWillReceiveProps(props){
    this.props.navigation.navigate(props.token ? 'app': 'auth');
  }

  handleSignIn = () => {
    const {phone, code} = this.state;
    this
      .props
      .signIn(phone, code);
  }

  handleSignUp = () => {
    const {phone} = this.state;
    this.props.registerPhone(phone);
  }

  render() {
    const {phone, code} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logoText}>Cleaners</Text>
        </View>

        <View style={styles.body}>

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
            style={styles.signInButton}
            onPress={this.handleSignIn}/>
          <Divider/>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput 
            value={phone} 
            onChangeText={phone => this.setState({phone})}/>
            <Button
            large
            title='Register'
            style={styles.signInButton}
            onPress={this.handleSignUp}/>

        </View>

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
    error: auth.error,
    token: auth.token
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 2
  },
  logoText: {
    fontSize: 60
  },
  signInButton: {
    marginVertical: 20
  }
});