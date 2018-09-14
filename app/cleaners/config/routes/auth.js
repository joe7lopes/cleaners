import { createStackNavigator } from 'react-navigation';
import {SignIn} from '../../screens/auth';
import {screen} from './navigation';
 const authStack = createStackNavigator({
  [screen.auth]: {
    screen: SignIn
  }
},
{
  mode: 'modal',
  headerMode: 'none'
});


export default authStack;