import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import searchStack from './searchStack';
import jobsStack from './jobsStack';
import accountStack from './accountStack';
import {route} from '../../navigation';
import {Search, User, Jobs} from '../../../../assets/images';

const clientStack = createBottomTabNavigator({
    [route.search]: {
        screen: searchStack,
        navigationOptions: {
            tabBarLabel: 'Search'
        }
    },
    [route.jobs]: {
        screen: jobsStack,
        navigationOptions: {
            tabBarLabel: 'jobs'
        }
    },
    [route.account]: {
        screen: accountStack,
        navigationOptions: {
            tabBarLabel: 'Account'
        }
    }
}, {
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused})=> {
            const {routeName} = navigation.state;
            switch (routeName){
                case route.search:
                    return <Search selected={focused} width={30} height={20}/>
                case route.jobs:
                    return <Jobs selected={focused} width={30} height={20}/>
                case route.account:
                    return <User selected={focused} width={30} height={20}/>
            }
        }
    })
});

export default clientStack;