import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {ActionCreators} from '../../../actions';
import {View, Text, FlatList} from 'react-native';
import ClientJobCard from '../../../components/ClientJobCard';
import { PENDING, SUCCESS} from '../../../actions/types';

class PendingJobs extends React.Component {

  componentDidMount(){
    this.props.fetchJobs();
  }

  handleOnApprove = (id) => {
    this.props.approveJob(id);
  }

  handleOnReject = (id) => {
    this.props.rejectJob(id);
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
      onApprove={() => this.handleOnApprove(item.uid)}
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
      <Text>No pending orders found</Text>
    </View>
  )

  renderJobsList = () => {
   const data = _.values(this.props.jobs);
    return (
    <FlatList
      data={data}
      renderItem={this.renderCard}
      keyExtractor={(item) => item.uid.toString()}/>
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
  jobs: jobs.pending,
  fetchStatus: jobs.fetchStatus
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingJobs);