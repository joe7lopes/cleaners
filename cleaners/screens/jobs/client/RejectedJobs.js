import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {View, Text, FlatList} from 'react-native';
import ClientJobCard from '../../../components/ClientJobCard';
import { PENDING} from '../../../actions/types';

class RejectedJobs extends React.Component {

  handleOnRefresh = () => {
    this.props.fetchJobs();
  }

  renderCard = ({item}) => {
    return (<ClientJobCard
      style={{
      marginTop: 20,
      paddingHorizontal: 20
    }}
      firstName={item.firstName}
      lastName={item.lastName}
      price={item.price}
      address={item.address}
      date={item.date}/>)
  }

  renderEmptyList = () => (
    <View style={{height: 60}}>
      <Text>No Jobs found</Text>
    </View>
  )

  render() {
    const data = _.values(this.props.jobs);
    return (
      <View>
       <FlatList
          refreshing={this.props.fetchStatus === PENDING}
          onRefresh={this.handleOnRefresh}
          data={data}
          renderItem={this.renderCard}
          ListEmptyComponent={this.renderEmptyList}
          keyExtractor={(item) => item.uid.toString()}/>
      </View>
    );
  }
}

mapStateToProps = ({jobs}) => ({
  jobs: jobs.rejected, 
  fetchStatus: jobs.fetchStatus
})

export default connect(mapStateToProps, undefined)(RejectedJobs);