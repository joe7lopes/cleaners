import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../../actions';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ClientOfferCard from '../../../components/ClientOfferCard';
import { PENDING, SUCCESS} from '../../../actions/types';

class ApprovedOffers extends React.Component {

  //HANDLERS

  handleOnReject = (id) => {
    this.props.rejectOffer(id);
  }

  renderCard = ({item}) => {
    return (<ClientOfferCard
      style={{
      marginTop: 20,
      paddingHorizontal: 20
    }}
      firstName={item.firstName}
      lastName={item.lastName}
      price={item.price}
      address={item.address}
      date={item.date}
      onReject={() => this.handleOnReject(item.id)}/>)
  }

  renderOffers = () => {
    const {offers, fetchStatus} = this.props;
    if (fetchStatus === PENDING) {
      return this.renderFetching();
    } else if (offers.length <= 0) {
      return this.renderNoPendingOffers()
    } else if (fetchStatus === SUCCESS) {
      return this.renderOffersList();
    }
  }

  renderFetching = () => (
    <View>
      <Text>Loading...</Text>
    </View>
  )

  renderNoPendingOffers = () => (
    <View>
      <Text>No Approved Offers found</Text>
    </View>
  )

  renderOffersList = () => (
    <FlatList
      data={this.props.offers}
      renderItem={this.renderCard}
      keyExtractor={(item) => item.id.toString()}/>
  )

  render() {
    return (
      <View>
        {this.renderOffers()}
      </View>
    );
  }
}

mapStateToProps = ({offers}) => {
  return {offers: offers.offers.approved, fetchStatus: offers.fetchStatus}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApprovedOffers);