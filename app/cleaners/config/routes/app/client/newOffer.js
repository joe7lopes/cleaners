import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ClientOffer } from '../../../screens/offer';


const OffersStack = createStackNavigator({
  Offers:{
    screen: ClientOffer,
    navigationOptions: {
      headerTitle: 'Offers'
    }
  } 
});

export default OffersStack;