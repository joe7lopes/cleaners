import React from 'react';
import {View, Text, StyleSheet, Dimensions, Modal} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import {TabView, SceneMap} from 'react-native-tab-view';
import CleanerDetailProfile from './CleanerDetailProfile';
import CleanerDetailReviews from './CleanerDetailReviews';
import ContactCleaner from './ContactCleaner';

class CleanerDetail extends React.Component {

  state = {
    index: 0,
    routes: [
      {
        key: 'first',
        title: 'Profile'
      }, {
        key: 'second',
        title: 'Reviews'
      }
    ],
    isModalVisible: false
  };

  componentWillMount() {
    // const cleaner = this.props.navigation.getParam('cleaner', undefined);

  }

  renderProfile = () => {
    return (<CleanerDetailProfile/>)
  };

  renderReviews = () => {
    return (<CleanerDetailReviews/>)
  }

  renderContact = () => {
   
    return (
    <Modal
    transparent={true}>
      <ContactCleaner />
    </Modal>
    )
  }

  handleOnConnect = () => {
    this.setState({isModalVisible: true})
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <View style={styles.container}>
        {isModalVisible && this.renderContact()}
        <View style={styles.header}>
          <View style={styles.headerSubContainer}>
            <Text>122</Text>
            <Text>Jobs</Text>
          </View>
          <View style={styles.headerSubContainer}>
            <Avatar large rounded title="MT" activeOpacity={0.7}/>
          </View>
          <View style={styles.headerSubContainer}>
            <Text>rating 7</Text>
            <Text>out of 99 Reviews</Text>
          </View>

        </View>

        <TabView
          navigationState={this.state}
          renderScene={SceneMap({first: this.renderProfile, second: this.renderReviews})}
          onIndexChange={index => this.setState({index})}
          initialLayout={{
          width: Dimensions
            .get('window')
            .width,
          height: 100
        }}/>
        <Button 
        style={styles.button} 
        title='Contact'
        onPress={this.handleOnConnect}/>
      </View>
    );
  }
}

export default CleanerDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#42A5F5',
    height: '20%'
  },
  headerSubContainer: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    marginVertical: 20
  }
});