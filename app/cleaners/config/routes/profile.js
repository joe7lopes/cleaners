import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Profile from '../../screens/profile';


const profileStack = createStackNavigator({
  profile:{
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile'
    }
  } 
});

export default profileStack;