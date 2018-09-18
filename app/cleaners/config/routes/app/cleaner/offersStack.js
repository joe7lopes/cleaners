import { createStackNavigator } from 'react-navigation';
import Offer from '../../../../screens/offer';
import {screen} from '../../../routes/navigation';

const offersStack = createStackNavigator({
  [screen.offers]:{
    screen: Offer,
    navigationOptions: {
      headerTitle: 'Offers'
    }
  }
});

export default offersStack;