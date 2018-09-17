import { createSwitchNavigator } from 'react-navigation';
import onboardingStack from './onboarding';
import {clientStack} from './client';
import {route} from '../navigation';
import store from '../../store';

const getInitialRoute = () =>{
  return store.getState().user.profile ? route.clientApp : route.onboarding
}

export default createSwitchNavigator({
    [route.clientApp]: clientStack,
    [route.onboarding]: onboardingStack,
  },
  {
    initialRouteName: getInitialRoute()
  }
);

