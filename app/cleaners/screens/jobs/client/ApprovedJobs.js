import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {ActionCreators} from '../../../actions';
import {View, Text, FlatList} from 'react-native';
import ClientJobCard from '../../../components/ClientJobCard';
import { PENDING, SUCCESS} from '../../../actions/types';

class ApprovedJobs extends React.Component {

  //HANDLERS

  handleOnReject = (id) => {
    this.props.rejectOffer(id);
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

  renderJobs = () => {
    const {jobs, fetchStatus} = this.props;
    if (fetchStatus === PENDING) {
      return this.renderFetching();
    }else if(fetchStatus === SUCCESS){
      if(_.isEmpty(jobs)){
        return this.renderNoPendingJobs();
      }
      return this.renderJobsList();
    }
  }

  renderFetching = () => (
    <View>
      <Text>Loading...</Text>
    </View>
  )

  renderNoPendingJobs = () => (
    <View>
      <Text>No Approved Offers found</Text>
    </View>
  )

  renderJobsList = () => {
    const data = _.values(this.props.jobs);
    return (
    <FlatList
      data={data}
      renderItem={this.renderCard}
      keyExtractor={(item) => item.id.toString()}/>
  )}

  render() {
    return (
      <View>
        {this.renderJobs()}
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