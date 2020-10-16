import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-ionicons';
import Navigations from '_navigations/Navigations';

import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';


import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

class ProfileScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="woman" style={{fontSize: 24, color: tintColor}} />
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
          centerComponent={<Text style={{fontSize: 28}}>Profile</Text>}
        />
      <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image 
              source={{
                uri: 'https://tentulogo.com/wp-content/uploads/Mark-Zuckerberg-FB.jpg',
              }}
              size={80}
            />
            <View style={{marginLeft: 20}}>
              <Title style={[styles.title, {
                marginTop:15,
                marginBottom: 5,
              }]}>Saul Mdo</Title>
              <Caption style={styles.caption}>Computer Science</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Iconn name="map-marker-radius" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>MIT</Text>
          </View>
          <View style={styles.row}>
            <Iconn name="phone" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>+52 344324422</Text>
          </View>
          <View style={styles.row}>
            <Iconn name="email" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>saul@montesdeoca.info</Text>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Title>2</Title>
              <Caption>Courses</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>3</Title>
              <Caption>Matches</Caption>
            </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Iconn name="book-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Your Matches</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Iconn name="share-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Iconn name="account-check-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Iconn name="cog" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default ProfileScreen;
