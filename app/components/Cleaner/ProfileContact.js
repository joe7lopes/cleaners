import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { SemiRoundedButton } from '../UI';
import SocialModal from './SocialModal';

class ProfileContact extends React.Component {

  state = {
    socialModalVisible: false
  }

  onSocialMediaPress = () => {
    let visible = !this.state.socialModalVisible;
    this.setState({socialModalVisible: visible});
  }

  render(){
    return(
      <View style={styles.container}>
      <SocialModal
        visible={this.state.socialModalVisible}
        positionFromRight={30} />
        <View style={styles.buttons}>
          <SemiRounded text={'Call'} />
          <SemiRounded text={'Chat'} />
          <SemiRounded text={'Social media'} onPress={this.onSocialMediaPress}/>
        </View>
      </View>
    );
  }
}

export default ProfileContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  }
});