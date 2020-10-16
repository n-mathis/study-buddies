import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  // Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

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

  createUser = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCreds) => {
        var user = userCreds.user;
        database().ref('/Users').set({
          uid: user.uid,
        });
        database().ref(`/Users${user.uid}`).set({
          full_name: this.state.name,
          description: this.state.description,
          major: this.state.major,
          phone_number: this.state.number,
          school: this.state.college,
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
        if (error.code === 'auth/weak-password') {
          console.log(error.code.getReason());
        }
        console.log('hello')
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
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <View style={styles.formContainer}>
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
                title="Done"
                onPress={() =>
                  this.createUser(this.state.email, this.state.password)
                }
                color="green"
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
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
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 40,
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
