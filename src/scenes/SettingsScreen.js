import { Image } from 'native-base';
import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Button, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-ionicons';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

class SettingsScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="football" style={{fontSize: 24, color: tintColor}} />
    ),
  };

  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Icon
              name="checkmark"
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
          centerComponent={<Text style={{fontSize: 28}}>Settings</Text>}

        />
        <ScrollView>
          <ImageBackground source={{uri: 'https://images.gawker.com/18k1fu0fjp5cmjpg/c_fit,fl_progressive,q_80,w_636.jpg'}} style={styles.image, styles.userInfoSection}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'column', marginTop: 15, alignItems: 'center'}}>
                <TouchableRipple style={{borderRadius: 100}} onPress={()=>{}}>
                  <View>
                    <Icon name="man" size={25} style={{ position: 'absolute', top: 30, left: 10 }} />
                    <Avatar.Image 
                      source={{
                        uri: 'https://tentulogo.com/wp-content/uploads/Mark-Zuckerberg-FB.jpg',
                      }}
                      size={80}
                    />
                  </View>
                </TouchableRipple>
                <View style={{alignItems: 'center'}}>
                  <Title style={[styles.title, {
                    marginTop:15,
                    marginBottom: 5,
                  }]}>Saul Mdo</Title>
                  <Caption style={styles.caption}>Computer Science</Caption>
                </View>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Iconn name="pencil" color="grey" size={25}/>
                <Text style={styles.menuItemText}>Edit Name</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Iconn name="pencil" color="grey" size={25}/>
                <Text style={styles.menuItemText}>Edit photo</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Iconn name="pencil" color="grey" size={25}/>
                <Text style={styles.menuItemText}>Edit description</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Iconn name="pencil" color="grey" size={25}/>
                <Text style={styles.menuItemText}>Edit Major</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Iconn name="pencil" color="grey" size={25}/>
                <Text style={styles.menuItemText}>Edit email</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple style={{ marginBottom: 40 }} onPress={() => {}}>
              <View style={styles.menuItem}>
                <Iconn name="pencil" color="grey" size={25}/>
                <Text style={styles.menuItemText}>Edit phone number</Text>
              </View>
            </TouchableRipple>

            <Button
              title="Save"
              onPress={()=>{}}
              color="green"
            />
            <TouchableRipple  onPress={() => {}}>
              <View style={styles.logout}>
                <Iconn name="logout" color="red" size={25}/>
                <Text style={styles.menuItemText, {color:"red"}}>Log out</Text>
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
    color: '#EBEBEB'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: '#EBEBEB'
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  logout: {
    flexDirection: 'row',
    paddingVertical: 50,
    alignItems: 'center',
    alignSelf: 'center'
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 200
  },
});


export default SettingsScreen;
