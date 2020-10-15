import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '950473762475-iu6igcu1bmep192sgjt4kjp0n5q0o52i.apps.googleusercontent.com',
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSignup = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        // this.props.navigation.navigate('Signup');
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

  handleLogin = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('App');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          console.log("There isn't account under that email.");
        }
        if (error.code === 'auth/wrong-password') {
          console.log('Incorrect password, try again.');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid.');
        }

        console.error(error);
      });
  };

  logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Google Sign-In" onPress={this.onGoogleButtonPress} />
        <View style={styles.inputboxStyle}>
          <Text>Email</Text>
          <TextInput
            style={{borderRadius: 4, borderWidth: 0.5, borderColor: 'black'}}
            keyboardType={'email-address'}
            onChangeText={(email) => this.setState({email})}
          />
        </View>
        <View style={styles.inputboxStyle}>
          <Text>Password</Text>
          <TextInput
            style={{borderRadius: 4, borderWidth: 0.5, borderColor: 'black'}}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <Button
          title="Login"
          onPress={() =>
            this.handleLogin(this.state.email, this.state.password)
          }
        />
        <Button
          title="Sign up"
          onPress={() =>
            this.handleSignup(this.state.email, this.state.password)
          }
        />
        <Button title="Log out" onPress={this.logOut} />
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

export default Login;
