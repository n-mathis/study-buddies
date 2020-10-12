// NOT IN USE, DOESN'T WORK

import React, {Component} from 'react';
import {Text} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-ionicons';

class Navigations extends Component {
  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="menu"
            onPress={() => this.props.navigation.openDrawer()}
          />
        }
        centerComponent={<Text style={{fontSize: 36}}>Study Buddies</Text>}
      />
    );
  }
}

export default Navigations;
