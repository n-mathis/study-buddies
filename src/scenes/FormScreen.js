import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  // Alert,
} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
const image = { uri: "https://www.oxfordlearning.com/wp-content/uploads/2018/11/group-photo.jpeg" };


class FormScreen extends Component {
  constructor(props) {
    super(props);
    // this state should be the one submited to the backend, WITH id obtained by signin in with firebase?
    this.state = {
      name: '',
      email: '',
      password: '',
      // photo: '',
      description: '',
      major: '',
      number: '',
      class: '',
      college: '',
    };
  }
  getMatches = (user) => {
    database()
      .ref(`/Users/${user.uid}`)
      // gets the data from the current user
      .once('value', (snapshot) => {
        const userClass = snapshot.val().class;
        database()
          // get all users
          .ref('/Users')
          .once('value', (snapshot) => {
            // go through each user
            snapshot.forEach((childSnapshot) => {
              // check each user if they have a matching class
              var userMatch = childSnapshot.val();
              // if yes, update matches for both the current user and matched user
              if (userMatch.class === userClass && userMatch.uid !== user.uid) {
                console.log(userMatch.uid);
                database()
                  .ref(`Users/${user.uid}`)
                  .update({
                    matches: {[userMatch.uid]: userMatch.class},
                  });
                database()
                  .ref(`Users/${userMatch.uid}`)
                  .update({
                    matches: {[user.uid]: user.class},
                  });
              }
            });
          });
      });
  };

  createUser = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCreds) => {
        var user = userCreds.user;
        database().ref(`/Users/${user.uid}`).set({
          uid: user.uid,
          full_name: this.state.name,
          description: this.state.description,
          major: this.state.major,
          class: this.state.class,
          phone_number: this.state.number,
          school: this.state.college,
          matches: '',
        });
        console.log('User account created & signed in!');
        this.getMatches(user);
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

  // handleSubmit(data) {
  //   //Alert so we can se what data is sent
  //   //TODO:
  //   // There should be a method here to submit this.state to DB
  //   Alert.alert(
  //     'Data to submit',
  //     JSON.stringify(data),
  //     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
  //     {cancelable: false},
  //   );
  // }

  handleChange(keyName, input) {
    this.setState({
      [keyName]: input,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <SafeAreaView>
            <ScrollView>
              <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <View style={styles.formContainer}>
                  <Card style={{paddingHorizontal: 30, paddingTop:40, paddingBottom: 40}}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.welcomeTitle}>
                        Welcome to Studdy Buddies
                      </Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>Full Name</Text>
                      <TextInput
                        autoCapitalize="words"
                        placeholder="Name"
                        style={styles.textInput}
                        onChangeText={(input) => this.handleChange('name', input)}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>Email</Text>
                      <TextInput
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="Email"
                        style={styles.textInput}
                        onChangeText={(input) => this.handleChange('email', input)}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>Password</Text>
                      <TextInput
                        keyboardType="default"
                        autoCapitalize="none"
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(input) => this.handleChange('password', input)}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>Class</Text>
                      <TextInput
                        autoCapitalize="words"
                        placeholder="Class"
                        style={styles.textInput}
                        onChangeText={(input) => this.handleChange('class', input)}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>Major</Text>
                      <TextInput
                        autoCapitalize="words"
                        placeholder="Major"
                        style={styles.textInput}
                        onChangeText={(input) => this.handleChange('major', input)}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>College</Text>
                      <TextInput
                        autoCapitalize="words"
                        placeholder="College"
                        style={styles.textInput}
                        onChangeText={(input) => this.handleChange('college', input)}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>Phone number</Text>
                      <TextInput
                        keyboardType="phone-pad"
                        placeholder="Phone Number"
                        style={styles.textInput}
                        onChangeText={(input) => this.handleChange('number', input)}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>Description</Text>
                      <TextInput
                        multiline
                        placeholder="Description"
                        style={styles.textInputDescription}
                        onChangeText={(input) =>
                          this.handleChange('description', input)
                        }
                      />
                    </View>
                    <Button
                      mode="contained"
                      style={{backgroundColor: 'green', marginTop: 15}}
                      onPress={() =>
                        this.createUser(this.state.email, this.state.password)
                      }>
                        Done
                    </Button>
                    <Button
                      mode="contained"
                      style={{backgroundColor: '#0D1321', marginTop: 15}}
                      onPress={() =>
                        this.props.navigation.navigate('AuthLoading')
                      }>
                        Back
                    </Button>
                  </Card>
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputDescription: {
    backgroundColor: '#EEF7FB',
    borderRadius: 10,
    padding: 20,
    paddingTop: 15,
    borderColor: 'grey',
    marginTop: 5,
    color: '#404040',
  },
  formContainer: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
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
  textInput: {
    backgroundColor: '#EEF7FB',
    borderRadius: 10,
    padding: 15,
    borderColor: 'grey',
    marginTop: 5,
    color: '#404040',
  },
  titleContainer: {
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 38,
    fontFamily: 'Farah',
  },
});

export default FormScreen;
