import React from 'react';
import {Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './scenes/HomeScreen';
import ProfileScreen from './scenes/ProfileScreen';
import SettingsScreen from './scenes/SettingsScreen';
import MatchesScreen from './scenes/MatchesScreen';

const {width} = Dimensions.get('window');

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

export default AppStack;
