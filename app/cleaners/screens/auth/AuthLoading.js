import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {route} from '../../config/routes/navigation';
import {ActionCreators} from '../../actions';

class AuthLoading extends React.Component {

  componentWillMount() {
    AsyncStorage.getItem('auth_token', (err, token)=>{
      this.props.navigation.navigate(token ? route.app:route.auth);  
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AuthLoading...</Text>
      </View>
    )
  }
}

const mapStateToProps = ({auth}) => ({
    token: auth.token,
    user: auth.user
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});