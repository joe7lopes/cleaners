import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import PedingJobs from './PendingJobs';
import ApprovedJobs from './ApprovedJobs';
import RejectedJobs from './RejectedJobs';

class Jobs extends React.Component {

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

  renderPendingJobs = () => (<PedingJobs/>)

  renderApprovedJobs = () => <ApprovedJobs/>

  renderRejectedJobs = () => <RejectedJobs/>

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>Offers</Text>
        </View>

        <View style={styles.body}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: this.renderPendingJobs, 
              second: this.renderApprovedJobs, 
              third: this.renderRejectedJobs})}
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

export default Jobs;

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