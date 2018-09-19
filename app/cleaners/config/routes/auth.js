import { createStackNavigator } from 'react-navigation';
import {Login, Register} from '../../screens/auth';
import {screen} from './navigation';

 const authStack = createStackNavigator({
  [screen.register]: {
    screen: Register
  },
  [screen.login]: {
    screen: Login
  }
},
{
  mode: 'modal',
  headerMode: 'none'
});


export default authStack;