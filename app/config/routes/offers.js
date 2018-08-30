import { createStackNavigator } from 'react-navigation';
import { ClientOffer, NewClientOffer } from '../../screens/offer';

const offersStack = createStackNavigator({
  offers:{
    screen: ClientOffer,
    navigationOptions: {
      headerTitle: 'Offers'
    }
  },
  newClientOffer: {
    screen: NewClientOffer
  } 
});

export default offersStack;