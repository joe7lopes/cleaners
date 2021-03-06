import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {ActionCreators} from '../../../actions';
import {View, Text, FlatList} from 'react-native';
import ClientJobCard from '../../../components/ClientJobCard';
import { PENDING } from '../../../actions/types';

class ApprovedJobs extends React.Component {

  handleOnReject = (uid) => {
    this.props.rejectJob(uid);
  }

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
      date={item.date}
      onReject={() => this.handleOnReject(item.uid)}/>)
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
          keyExtractor={(item) => item.uid.toString()}
          ListEmptyComponent={this.renderEmptyList}/>
      </View>
    );
  }
}

mapStateToProps = ({jobs}) => ({
  jobs: jobs.approved, 
  fetchStatus: jobs.fetchStatus
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApprovedJobs);