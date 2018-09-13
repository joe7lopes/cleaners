import React from 'react';
import {View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { auth } from '../../config/firebase'; 

class AuthLoading extends React.Component {

  componentDidMount(){
    // auth.onAuthStateChanged(user =>{
    //   console.log('firebase user', user);
    //   if(user){
    //     this.props.navigation.navigate('Search');
    //   }else{
    //     this.props.navigation.navigate('SignIn');
    //   }
    // });
    this.props.navigation.navigate('SignIn');
  }

  render(){
    return(
      <View>
        <Text>Auth Loading...</Text>
        <Text>Auth Loading...</Text>
        <Text>Auth Loading...</Text>
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(AuthLoading);