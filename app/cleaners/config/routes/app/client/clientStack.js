import {createBottomTabNavigator} from 'react-navigation';
import searchStack from './searchStack';
import jobsStack from './jobsStack';
import accountStack from './accountStack';
import {route} from '../../navigation';

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
});

export default clientStack;