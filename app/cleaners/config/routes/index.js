import { createSwitchNavigator } from 'react-navigation';
import authStack from './auth';
import appStack from './app';
import {AuthLoading} from '../../screens/auth';
import {screen, route} from './navigation';

export default createSwitchNavigator(
  {
    [screen.authLoading]: AuthLoading,
    [route.auth]: authStack,
    [route.app]: appStack
  },
  {
    initialRouteName: screen.authLoading
  }
);