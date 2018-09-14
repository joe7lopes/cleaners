import { createSwitchNavigator } from 'react-navigation';
import onboardingStack from './onboarding';
import {clientStack} from './client';
import {route} from '../navigation';

export default createSwitchNavigator({
    [route.clientApp]: clientStack,
    [route.onboarding]: onboardingStack,
  },
  {
    initialRouteName: route.onboarding
  }
);

//TODO check a way to verify if user already did the onboarding.