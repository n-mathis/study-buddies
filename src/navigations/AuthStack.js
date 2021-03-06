import {createStackNavigator} from 'react-navigation-stack';

import Login from '../scenes/LoginScreen';
import FormScreen from '../scenes/FormScreen';

const AuthStack = createStackNavigator(
  {Login: Login, FormScreen: FormScreen},
  {initialRouteName: 'Login', headerMode: 'none'},
);

export default AuthStack;
