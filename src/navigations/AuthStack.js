import {createStackNavigator} from 'react-navigation-stack';

import Login from './Login';
import Signup from './Signup';

const AuthStack = createStackNavigator(
  {Login: Login, Signup: Signup},
  {initialRouteName: 'Login', headerMode: 'none'},
);

export default AuthStack;
