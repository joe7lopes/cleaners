import React from 'react';
import {View, Text, StyleSheet, Dimensions, Modal} from 'react-native';
import { Avatar,TabView, SceneMap, TabBar, PrimaryTextButton as Button } from '../../../components/UI'
import CleanerDetailProfile from './CleanerDetailProfile';
import CleanerDetailReviews from './CleanerDetailReviews';
import ContactCleaner from './ContactCleaner';
import { color, font } from '../../../config/styles';

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
    services={services}
    onContactPress={this.handleOnContactPress}/>
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
  handleOnContactPress = () => {
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
            <Text>{rating}</Text>
            <Text>Rating</Text>
          </View>

        </View>

        <TabView
          navigationState={this.state}
          renderScene={SceneMap({first: this.renderProfile, second: this.renderReviews})}
          onIndexChange={index => this.setState({index})}
          renderTabBar={props => 
            <TabBar 
              {...props} 
              indicatorStyle={{ backgroundColor: color.primary }} 
              style={{backgroundColor: 'white'}}
              labelStyle={styles.tabBarText}
            />}
          initialLayout={{
          width: Dimensions
            .get('window')
            .width,
          height: 100
        }}/>
        
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
    height: '20%',
  },
  headerSubContainer: {
    flex: 1,
    alignItems: 'center'
  },
  tabBarText: {
    color: color.gray_dark,
    fontWeight: 'bold',
    fontSize: font.m1
  }
});