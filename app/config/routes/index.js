import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import SearchStack from './search';
import ProfileStack from './profile';
import OffersStack from './offers';
import { SignInStack, AuthLoading } from './auth'

const ClientStack = createBottomTabNavigator({
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search'
    }
  },
  Offers: {
    screen: OffersStack
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  }
});

export default createSwitchNavigator(
  {
    App: ClientStack,
    Auth: SignInStack,
    AuthLoading: AuthLoading
  },
  {
    // initialRouteName: 'AuthLoading'
    initialRouteName: 'App'
  }
);