import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, ImageBackground} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Button, Card} from 'react-native-paper';

const image = { uri: "https://www.oxfordlearning.com/wp-content/uploads/2018/11/group-photo.jpeg" };


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

  handleSignup = () => {
    this.props.navigation.navigate('FormScreen');
  };

  handleLogin = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Successful login');
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

  // logOut = () => {
  //   auth()
  //     .signOut()
  //     .then(() => console.log('User signed out!'));
  // };

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
        {/* <Button title="Google Sign-In" onPress={this.onGoogleButtonPress} /> */}
        <ImageBackground source={image} style={styles.image}>
        <View style={styles.formContainer}>
          <Card style={{paddingHorizontal: 30, paddingTop:40, paddingBottom: 40}}>
          <Card.Title 
            title="Study Buddies" 
            subtitle="Welcome!" 
            style={{top: -10}}
          />
            <View style={{paddingBottom: 30}}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="Email"
                  onChangeText={(email) => this.setState({email})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={(password) => this.setState({password})}
                />
              </View>
            </View>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() =>
                this.handleLogin(this.state.email, this.state.password)
              }>
                Log in
            </Button>
            <Text style={styles.or}>or</Text>
            <Button
              mode="contained"
              onPress={() => this.handleSignup()}>
                Sign in
            </Button>
          </Card>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#404040',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  formContainer: {
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputTitle: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#404040',
  },
  or: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: '200',
    alignSelf: 'center'
  },
  textInput: {
    backgroundColor: '#EEF7FB',
    borderRadius: 10,
    padding: 15,
    borderColor: 'grey',
    marginTop: 5,
    color: '#404040',
  },
});

export default Login;
