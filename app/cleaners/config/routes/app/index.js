import { createSwitchNavigator } from 'react-navigation';
import onboardingStack from './onboarding';
import {clientStack} from './client';
// import {cleanerStack} from './cleaner';
import AppLoading from '../../../screens/AppLoading';
import {route, screen} from '../navigation';


export default createSwitchNavigator({
    [route.clientApp]: clientStack,
    // [route.cleanerApp]: cleanerStack,
    [route.onboarding]: onboardingStack,
    [screen.appLoading]: AppLoading
  },
  {
    initialRouteName: screen.appLoading
  }
);

