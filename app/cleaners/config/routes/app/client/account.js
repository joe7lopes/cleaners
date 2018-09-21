import React from 'react';
import {createStackNavigator} from 'react-navigation';

import {screen} from '../../navigation';
import {Account, ClientProfile} from '../../../../screens/account';

const accountStack = createStackNavigator({

    [screen.account]: {
        screen: Account,
        navigationOptions: {
            headerTitle: 'Account'
        }
    },
    [screen.profile]: {
        screen: ClientProfile,
        navigationOptions: {
            headerTitle: 'Profile'
        }
    }
});

export default accountStack;