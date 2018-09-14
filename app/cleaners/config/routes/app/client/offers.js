import { createStackNavigator } from 'react-navigation';
import Offer from '../../../../screens/offer';

const offersStack = createStackNavigator({
  offers:{
    screen: Offer,
    navigationOptions: {
      headerTitle: 'Offers'
    }
  }
});

export default offersStack;