import { createStackNavigator } from 'react-navigation';
import {
  AuthLoading,
  SignIn
 } from '../../screens/auth';

 const SignInStack = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  }
},
{
  mode: 'modal',
  headerMode: null
});


export {
  SignInStack,
  AuthLoading
};