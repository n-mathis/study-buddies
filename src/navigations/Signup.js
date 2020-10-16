// IN THE WORKS
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      subject: '',
      bio: '',
    };
  }

  handleSignup = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        database().ref('/Users').set({
          uuid: user.uid,
        });
        console.log('User account created & signed in!');
        this.props.navigation.navigate('App');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  // logOut = () => {
  //   auth()
  //     .signOut()
  //     .then(() => console.log('User signed out!'));
  // };

  // onGoogleButtonPress = async () => {
  //   // Get the users ID token
  //   const {idToken} = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputboxStyle}>
          <Text>Name</Text>
          <TextInput
            style={{borderRadius: 4, borderWidth: 0.5, borderColor: 'black'}}
            keyboardType={'default'}
            onChangeText={(name) => this.setState({name})}
          />
          <Text>Subject</Text>
          <TextInput
            style={{borderRadius: 4, borderWidth: 0.5, borderColor: 'black'}}
            keyboardType={'default'}
            onChangeText={(subject) => this.setState({subject})}
          />
        </View>
        <View style={styles.inputboxStyle}>
          <Text>Bio</Text>
          <TextInput
            style={{borderRadius: 4, borderWidth: 0.5, borderColor: 'black'}}
            keyboardType={'default'}
            onChangeText={(bio) => this.setState({bio})}
          />
        </View>
        <Button
          title="Finish"
          onPress={() =>
            this.handleLogin(this.state.email, this.state.password)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Signup;
