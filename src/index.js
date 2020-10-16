import React, {Component, useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Header,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation-stack';
// import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';

import AppStack from './navigations/AppStack';
import AuthStack from './navigations/AuthStack';
import AuthLoading from './navigations/AuthLoading';

// import Icon from 'react-native-ionicons';
// import HomeScreen from './scenes/HomeScreen';
// import ProfileScreen from './scenes/ProfileScreen';
// import SettingsScreen from './scenes/SettingsScreen';
// import LoginScreen from './scenes/LoginScreen';
// import MatchesScreen from './scenes/MatchesScreen';
// import FormScreen from './scenes/FormScreen';
const {width} = Dimensions.get('window');

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log('User email: ', user.email);
//   }
// })
// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
  // Adding Form on the side for only to be able to access it in dev
  //     Form: {
  //       screen: FormScreen,
  //       navigationOptions: {
  //         title: 'Form',
  //       },
  //     },
  //     Login: {
  //       screen: LoginScreen,
  //       navigationOptions: {
  //         title: 'Login',
  //       },
  //     },
  //   },
  //   {
  //     drawerPosition: 'left',
  //     contentComponent: CustomDrawerNavigation,
  //     drawerOpenRoute: 'DrawerOpen',
  //     drawerCloseRoute: 'DrawerClose',
  //     drawerToggleRoute: 'DrawerToggle',
  //     drawerWidth: (width / 3) * 2,
  //   },
);
