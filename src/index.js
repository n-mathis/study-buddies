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
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

import HomeScreen from './scenes/HomeScreen';
import ProfileScreen from './scenes/ProfileScreen';
import SettingsScreen from './scenes/SettingsScreen';
import MatchesScreen from './scenes/MatchesScreen';
import Login from './navigations/Login';

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
const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>USERNAME</Text>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
      <View style={{alignItems: 'center', bottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', marginRight: 15}}>
            <Iconn
              name="logout"
              style={{fontSize: 24}}
              onPress={() => console.log('Log out')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    Matches: {
      screen: MatchesScreen,
      navigationOptions: {
        title: 'Matches',
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
      },
    },
  },
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2,
  },
);

const AppStack = createAppContainer(Drawer);

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const AuthStack = createStackNavigator({Login: Login});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
