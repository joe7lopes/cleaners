import { createStackNavigator } from 'react-navigation';
import {UserTypeSelection, Step1} from '../../../screens/onboarding';
import {screen} from '../navigation';

const onboarding = createStackNavigator({
  [screen.onboardingUserTypeSelection]: {
    screen: UserTypeSelection
  },
  [screen.onboardingStep1]: {
    screen: Step1,
  }
},
{
  headerMode: 'none'
});

export default onboarding;