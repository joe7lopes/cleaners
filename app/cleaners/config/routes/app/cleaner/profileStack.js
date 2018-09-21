import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Profile from '../../../../screens/account';
import {screen} from '../../../routes/navigation';

const profileStack = createStackNavigator({
  [screen.profile]:{
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile'
    }
  } 
});

export default profileStack;