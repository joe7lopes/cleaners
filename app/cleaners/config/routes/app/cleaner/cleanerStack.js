import {createBottomTabNavigator} from 'react-navigation';
import offersStack from './offersStack';
import {screen} from '../../navigation';

const cleanerStack = createBottomTabNavigator({
    [screen.offers]: {
        screen: offersStack
    }

});

export default cleanerStack;