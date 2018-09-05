import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ClientOfferCard from '../../../components/ClientOfferCard';

class PendingOffers extends React.Component {

  state = {
    offers: []
  }

  componentDidMount(){

    //fetch pending offers
    let offers = [
      {id: 1, firstName: 'alice', lastName: 'macee', date: new Date(), price: 20},
      {id: 2, firstName: 'alice', lastName: 'macee', date: new Date(), price: 20},
      {id: 3, firstName: 'alice', lastName: 'macee', date: new Date(), price: 20}
    ]

    this.setState({offers})

  }

  //HANDLERS

  handleOnApprove = (id) => {
    console.log('Approve offer id:', id);
  }

  handleOnReject = (id) => {
    console.log('Reject offer id:', id);
  }

  renderCard = ({item}) => {
    return (
      <ClientOfferCard
      style={{marginTop: 20, paddingHorizontal: 20}} 
      firstName={item.firstName} 
      lastName={item.lastName} 
      price={item.price} 
      date={item.date}
      onApprove={()=>this.handleOnApprove(item.id)}
      onReject={()=>this.handleOnReject(item.id)}/> 
    )
  }

  render(){
    const {offers} = this.state;
    return (
      <View>
         <FlatList
        data={offers}
        renderItem={this.renderCard}
        keyExtractor={(item, index) => item.id.toString()}
    />
      </View>
    )
  }
}

export default PendingOffers;