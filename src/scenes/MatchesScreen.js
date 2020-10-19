import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

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
      matches: {},
    };
  }
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Iconn name="account-multiple" style={{fontSize: 24, color: tintColor}} />
    ),
  };
  findMatches = () => {
    const user = auth().currentUser;
    database()
      .ref(`/Users/${user.uid}`)
      // gets snapshot of current user data
      .once('value', (userData) => {
        const userClass = userData.val().class;
        database()
          // get snapshot of all users
          .ref('/Users')
          .once('value', (users) => {
            // check each user in snapshot
            users.forEach((potentialMatch) => {
              // check if each potential user has a matching class
              var userMatch = potentialMatch.val();
              // if yes, update matches for both the current user and matched user
              if (userMatch.class === userClass && userMatch.uid !== user.uid) {
                database()
                  .ref(`Users/${user.uid}/matches`)
                  .update({
                    [userMatch.uid]: userMatch.class,
                  });
                // TODO: below code not updated other user matches... not sure why
                database()
                  .ref(`Users/${userMatch.uid}/matches`)
                  .update({
                    [user.uid]: user.class,
                  })
                  .then((error) => {
                    if (error) {
                      console.error(error);
                    } else {
                      console.log('updated');
                    }
                  });
              }
            });
          });
      });
  };
  getMatches = () => {
    const currentUser = auth().currentUser;
    var foundMatches = {};
    database()
      .ref(`/Users/${currentUser.uid}`)
      // gets snapshot of current user data
      .once('value', (userData) => {
        Object.keys(userData.val().matches).forEach((user) => {
          database()
            .ref(`Users/${user}`)
            .once('value', (data) => {
              // console.log(data.val());
              foundMatches[user] = data.val();
            });
        });
        this.setState({matches: foundMatches}, () => {
          // console.log('actual matches' + foundMatches);
          // console.log('here are the matches' + this.state.matches);
        });
      });
  };
  componentDidMount() {
    this.findMatches();
    this.getMatches();
  }
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
          {/* THIS ISN'T DISPLAYING :( */}
          {Object.keys(this.state.matches).map((key, buddy) => {
            // console.log('matches' + this.state.matches);
            // console.log('KEY' + key);
            <Title> {key} </Title>;
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
