import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class AuthLoading extends React.Component {

  componentWillMount() {
    const {token} = this.props;
    this.props.navigation.navigate(token ? 'app': 'auth');
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