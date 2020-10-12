import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-ionicons';
import Navigations from '_navigations/Navigations';

class ProfileScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="person" style={{fontSize: 24, color: tintColor}} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
          centerComponent={<Text style={{fontSize: 36}}>Study Buddies</Text>}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Profile</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
