import { Image } from 'native-base';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-ionicons';

class SettingsScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="football" style={{fontSize: 24, color: tintColor}} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Icon
              name="checkmark"
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
