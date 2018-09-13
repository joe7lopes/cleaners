import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import searchStack from './search';
import profileStack from './profile';
import offersStack from './offers';

const clientStack = createBottomTabNavigator({
  search: {
    screen: searchStack,
    navigationOptions: {
      tabBarLabel: 'Search'
    }
  },
  offers: {
    screen: offersStack
  },
  profile: {
    screen: profileStack,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  }
});

export default createSwitchNavigator(
  {
    app: clientStack,
  },
  {
    initialRouteName: 'app'
  }
);