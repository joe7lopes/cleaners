import React from 'react';
import { View, Modal, Text, StyleSheet, ActivityIndicator } from 'react-native';
import {SUCCESS, FAILURE, PENDING } from '../../../actions/types';

class ActivityStatusIndicator extends React.Component{

  state = {
    modalVisible: false
  }

  componentWillReceiveProps(prevProps, nextProps){
    const { status } = prevProps;
    if(status === SUCCESS || status === FAILURE){
      setTimeout(() => {
        this.setState({modalVisible: false}); 
       }, 4000);
    }else if(status === PENDING){
      this.setState({modalVisible: true})
    }
  }

  getText = () => {
    const { status, successText, failureText, pendingText } = this.props;
    switch (status) {
      case SUCCESS:
        return successText;
      case FAILURE:
        return failureText;
      case PENDING:
        return pendingText;
      default:
        return "no text for status";
    }
  }

  render(){
        const { modalVisible } = this.state;
        const { status } = this.props;
        const isLoading = status === PENDING;
        var text = this.getText();
        const backgroundColor = status === FAILURE? 'red': 'green'
    return (
      <Modal 
        visible={modalVisible}
        transparent={false}>
        <View style={[styles.container, {backgroundColor}]}>
            <Text>{text}</Text>
           {isLoading && <ActivityIndicator size="large" color="#0000ff" /> } 
        </View>
      </Modal>
    );
  }
}

export default ActivityStatusIndicator;

const styles = StyleSheet.create({
  container: {
    top: '50%',
    position: 'absolute',
    alignSelf: 'center'
  }
})