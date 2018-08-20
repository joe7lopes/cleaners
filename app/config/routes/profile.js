import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Profile from '../../screens/profile';


const ProfileStack = createStackNavigator({
  Profile:{
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile'
    }
  } 
});

export default ProfileStack;