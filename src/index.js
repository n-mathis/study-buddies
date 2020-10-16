import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Header,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Icon from 'react-native-ionicons';
import HomeScreen from './scenes/HomeScreen';
import ProfileScreen from './scenes/ProfileScreen';
import SettingsScreen from './scenes/SettingsScreen';
import LoginScreen from './scenes/LoginScreen';
import MatchesScreen from './scenes/MatchesScreen';
import FormScreen from './scenes/FormScreen';
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
            <Icon
              name="beer"
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
    // Adding Form on the side for only to be able to access it in dev
    Form: {
      screen: FormScreen,
      navigationOptions: {
        title: 'Form',
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
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

const App = createAppContainer(Drawer);

export default App;
