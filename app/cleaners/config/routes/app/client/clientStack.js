import {createBottomTabNavigator} from 'react-navigation';
import searchStack from './search';
import offersStack from './offers';
import accountStack from './account';
import {route} from '../../navigation'

const clientStack = createBottomTabNavigator({
    [route.search]: {
        screen: searchStack,
        navigationOptions: {
            tabBarLabel: 'Search'
        }
    },
    [route.offers]: {
        screen: offersStack
    },
    [route.account]: {
        screen: accountStack,
        navigationOptions: {
            tabBarLabel: 'Account'
        }
    }
});

export default clientStack;