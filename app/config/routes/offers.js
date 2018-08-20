import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ClientOffer, NewClientOffer } from '../../screens/offer';

const OffersStack = createStackNavigator({
  Offers:{
    screen: ClientOffer,
    navigationOptions: {
      headerTitle: 'Offers'
    }
  },
  NewClientOffer: {
    screen: NewClientOffer
  } 
});

export default OffersStack;