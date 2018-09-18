import { createBottomTabNavigator } from 'react-navigation';
import offersStack from './offersStack';
import profileStack from './profileStack';
import {screen} from '../../navigation';

const cleanerStack = createBottomTabNavigator({
  [screen.offers]: {
    screen: offersStack
  },
  [screen.profile]: {
    screen: profileStack,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  }
});

export default cleanerStack;