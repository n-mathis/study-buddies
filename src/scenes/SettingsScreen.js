import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';

class SettingsScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Iconn name="cog" style={{fontSize: 24, color: tintColor}} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Iconn
              name="menu"
              size={40}
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
          centerComponent={<Text style={{fontSize: 28}}>Settings</Text>}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Settings</Text>
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

export default SettingsScreen;
