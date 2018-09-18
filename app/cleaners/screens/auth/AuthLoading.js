import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {route} from '../../config/routes/navigation';

class AuthLoading extends React.Component {

  componentWillMount = async() => {
    const token = await AsyncStorage.getItem('auth_token');
    this.props.navigation.navigate(token !== null ? route.app: route.auth);
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text>AuthLoading...</Text>
      </View>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    token: auth.token
  }
};

export default connect(mapStateToProps)(AuthLoading);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});