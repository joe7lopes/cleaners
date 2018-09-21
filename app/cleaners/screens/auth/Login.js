import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, View, SafeAreaView, Text, AsyncStorage} from 'react-native';
import {FormLabel, FormInput, Button, Divider} from 'react-native-elements'
import {ActionCreators} from '../../actions';
import {route} from '../../config/routes/navigation';
import {SUCCESS} from "../../actions/types";

class Login extends React.Component {

  state = {
    phone: undefined,
    code: undefined
  }

  componentWillMount(){
    const phone = this.props.navigation.getParam('phone', undefined);
    this.setState({phone});
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.status === SUCCESS){
        this.props.navigation.navigate(route.app);
    }
    
  }

  handleLogin = () => {
    const {phone, code} = this.state;
    this.props.login(phone, code);
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
            style={styles.loginButton}
            onPress={this.handleLogin}/>
          <Divider/>

        </View>

      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = ({auth}) => ({
    status: auth.status,
    error: auth.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
  loginButton: {
    marginVertical: 20
  }
});