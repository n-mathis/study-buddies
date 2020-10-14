import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [
        {
          id: '3',
          name: 'Nana Mathis',
          class: 'CS50',
          imgUrl:
            'https://images.idgesg.net/images/article/2019/02/women_gender_program_code_monitor-100787121-large.jpg',
        },
        {
          id: '4',
          name: 'Remi ChibiRemy',
          class: 'CS50',
          imgUrl:
            'https://news.mit.edu/sites/default/files/images/201704/Layla-brighten.jpg',
        },
        {
          id: '5',
          name: 'Nathan Moeliono',
          class: 'CS50',
          imgUrl:
            'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
        },
      ],
    };
  }
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Iconn name="account-multiple" style={{fontSize: 24, color: tintColor}} />
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
          centerComponent={<Text style={{fontSize: 28}}>Matches</Text>}
        />
        <ScrollView>
          {this.state.matches.map((buddy) => {
            return (
              <TouchableRipple onPress={() => {}}>
                <View key={buddy.id} style={styles.infoBoxWrapper}>
                  <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Avatar.Image
                        source={{
                          uri: buddy.imgUrl,
                        }}
                        size={80}
                      />
                      <View style={{marginLeft: 20}}>
                        <Title
                          style={[
                            styles.title,
                            {
                              marginTop: 15,
                              marginBottom: 5,
                            },
                          ]}>
                          {buddy.name}
                        </Title>
                        <Caption style={styles.caption}>{buddy.class}</Caption>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableRipple>
            );
          })}
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
    paddingBottom: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
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
