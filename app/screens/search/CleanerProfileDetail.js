import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Reviews, ProfileRating, ProfileContact } from '../../components/Cleaner';
import { color } from '../../config/styles';

class CleanerProfileDetail extends React.Component {

  onConnect = () => {
    this.props.navigation.navigate('CleanerRequestConfirmation');
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <View style={styles.statusBar}>
          <TouchableHighlight onPress={this.onConnect}>
            <Text>Connect</Text>
          </TouchableHighlight>
          </View>
          <View style={styles.profileImage}>
          </View>
          <View style={styles.contactProfile}>
            <ProfileContact />
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.rating}>
            <ProfileRating />
          </View>

          <View style={styles.info}>
            <Text>profile details</Text>
          </View>

          <View style={styles.reviews}>
            <Reviews />
          </View>
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundColor
  },
  header: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: color.primary
  },
  statusBar: {
    flex: 1,
    backgroundColor: 'pink'
  },
  profileImage: {
    flex: 4,
  },
  contactProfile: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 2,
  },
  rating: {
    flex: 1,
    backgroundColor: color.primaryDark
  },
  info: {
    flex: 2,
    backgroundColor: color.gray
  },
  reviews: {
    flex: 2,
  }
});


export default CleanerProfileDetail;