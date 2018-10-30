import React from 'react';
import {View, Text, StyleSheet, Dimensions, Modal} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import {TabView, SceneMap} from 'react-native-tab-view';
import CleanerDetailProfile from './CleanerDetailProfile';
import CleanerDetailReviews from './CleanerDetailReviews';
import ContactCleaner from './ContactCleaner';

class CleanerDetail extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title
  });

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

  renderProfile = () => {
    const cleaner = this.props.navigation.getParam('cleaner', undefined);
    const {firstName, lastName, price, languages, services} = cleaner;
    return <CleanerDetailProfile 
    firstName={firstName} 
    lastName={lastName}
    price={price}
    languages={languages}
    services={services}/>
  };

  renderReviews = () => {
    const cleaner = this.props.navigation.getParam('cleaner', undefined);
    const {reviews} = cleaner;
    return <CleanerDetailReviews reviews={reviews}/>
  }

  renderContact = () => {
    const cleaner = this.props.navigation.getParam('cleaner', undefined);
    return (
    <Modal
    transparent={false}>
      <ContactCleaner onClose={this.handleOnCloseContact} onSend={this.handleOnJobOfferSent} cleaner={cleaner} />
    </Modal>
    )
  }

  //HANDLERS

  handleOnJobOfferSent = () => {
    // show some message status??
    this.setState({isModalVisible: false})
    this.props.navigation.pop();
  }

  handleOnCloseContact = () => {
    this.setState({isModalVisible: false})
  }
  handleOnConnect = () => {
    this.setState({isModalVisible: true})
  }

  render() {
    const { isModalVisible } = this.state;
    const cleaner = this.props.navigation.getParam('cleaner', undefined);
    const {firstName, lastName, rating, reviews = []} = cleaner;
    const title=`${firstName.toUpperCase()[0] || ""}${lastName.toUpperCase()[0] || ""}`
    const reviewsCount = reviews.length;
    return (
      <View style={styles.container}>
        {isModalVisible && this.renderContact()}
        <View style={styles.header}>
          <View style={styles.headerSubContainer}>
            <Text>{reviewsCount}</Text>
            <Text>Jobs</Text>
          </View>
          <View style={styles.headerSubContainer}>
            <Avatar large rounded title={title} activeOpacity={0.7}/>
          </View>
          <View style={styles.headerSubContainer}>
            <Text>{`rating ${rating}`}</Text>
            <Text>{`${reviewsCount} Reviews`}</Text>
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