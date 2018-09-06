import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import PedingOffers from './PendingOffers';
import ApprovedOffers from './ApprovedOffers';
import RejectedOffers from './RejectedOffers';

class Offer extends React.Component {

  state = {
    index: 0,
    routes: [
      {
        key: 'first',
        title: 'Pending'
      }, {
        key: 'second',
        title: 'Approved'
      },
      {
        key: 'third',
        title: 'Rejected'
      }
    ]
    
  };

  renderPendingOffers = () => (<PedingOffers/>)

  renderApprovedOffers = () => <ApprovedOffers/>

  renderRejectedOffers = () => <RejectedOffers/>

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>Offers</Text>
        </View>

        <View style={styles.body}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({first: this.renderPendingOffers, second: this.renderApprovedOffers, third: this.renderRejectedOffers})}
            onIndexChange={index => this.setState({index})}
            initialLayout={{
            width: Dimensions
              .get('window')
              .width,
            height: 100
          }}/>
        </View>
      </SafeAreaView>
    )
  }
}

export default Offer;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 4,
    
  }
})