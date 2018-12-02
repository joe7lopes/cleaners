import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {screen} from '../../navigation';
import {Account, ClientProfile} from '../../../../screens/account';
import {color} from '../../../styles';

const navigationBarTheme = {
    headerStyle: {
        backgroundColor: color.primary,
    },
    headerTintColor: '#fff'
};

const accountStack = createStackNavigator({

    [screen.account]: {
        screen: Account,
        navigationOptions: {
            headerTitle: 'Account',
            ...navigationBarTheme
        }
    },
    [screen.profile]: {
        screen: ClientProfile,
        navigationOptions: {
            headerTitle: 'Profile',
            ...navigationBarTheme
        }
    }
});

export default accountStack;