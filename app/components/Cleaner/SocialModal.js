import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ROUNDED_BORDER_RADIUS } from '../../config/styles';

export default class SocialModal extends React.Component {
  render(){
    const { visible } = this.props;
    const spykePosition = this.props.positionFromRight || 10;

    if(!visible){
      return null;
    }
    
    return(
      <View style={styles.socialModal}>
        <View style={styles.socialWidgets}>
          <Text>FB</Text>
          <Text>Gmail</Text>
          <Text>other</Text>
        </View>
        
        <View style={[styles.spyke, {right: spykePosition}]}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  socialModal: {
    position: 'absolute',
    top: -40,
    height: 40,
    width: '100%',
    backgroundColor: '#ffff'
  },
  socialWidgets: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  spyke: {
    position: 'absolute',
    backgroundColor: '#ffff',
    height: 10,
    width: 10,
    bottom: -5,
    transform: [{rotate: '45deg'}],
  }
});

SocialModal.propTypes = {
  positionFromRight: PropTypes.number.isRequired
};