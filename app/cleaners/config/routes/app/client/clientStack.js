import {createBottomTabNavigator} from 'react-navigation';
import searchStack from './searchStack';
import offersStack from './offersStack';
import accountStack from './accountStack';
import {route} from '../../navigation';

const clientStack = createBottomTabNavigator({
    [route.search]: {
        screen: searchStack,
        navigationOptions: {
            tabBarLabel: 'Search'
        }
    },
    [route.offers]: {
        screen: offersStack,
        navigationOptions: {
            tabBarLabel: 'Offers'
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