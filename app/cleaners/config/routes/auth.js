import { createStackNavigator } from 'react-navigation';
import {SignIn, SignUp} from '../../screens/auth';
import {screen} from './navigation';

 const authStack = createStackNavigator({
  [screen.signUp]: {
    screen: SignUp
  },
  [screen.signIn]: {
    screen: SignIn
  }
},
{
  mode: 'modal',
  headerMode: 'none'
});


export default authStack;