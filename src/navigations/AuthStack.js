import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './scenes/Login';
import InfoScreen from './scenes/Signup';

const AuthStack = createStackNavigator(
  {Login: LoginScreen, Info: InfoScreen},
  {initialRouteName: 'Login', headerMode: 'none'},
);

export default AuthStack;
