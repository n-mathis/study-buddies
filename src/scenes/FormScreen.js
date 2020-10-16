import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import {Header} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';

class FormScreen extends Component {
    constructor(props){
        super(props);
        // this state should be the one submited to the backend, WITH id obtained by signin in with firebase?
        this.state = {
            name: '',
            email: '',
            photo: '',
            description: '',
            major: '',
            number: '',
            class: '',
            college: ''
        }
    }
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="login" style={{fontSize: 24, color: tintColor}} />
    ),
  };
  handleSubmit(data){
      //Alert so we can se what data is sent
      //TODO:
      // There should be a method here to submit this.state to DB
    Alert.alert(
        "Data to submit",
        JSON.stringify(data),
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
  }
  handleChange(keyName, input){
    this.setState({ 
        [keyName]: input
    })
  }
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
          centerComponent={<Text style={{fontSize: 36}}>Study Buddies</Text>}
        />

        <ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.welcomeTitle}>Welcome to Studdy Buddies, Nana</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Full Name</Text>
                <TextInput
                    autoCapitalize= "words"
                    placeholder="Name"
                    style={styles.textInput}
                    onChangeText={(input) => this.handleChange('name', input)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Class</Text>
                <TextInput
                    autoCapitalize= "words"
                    placeholder="Class"
                    style={styles.textInput}
                    onChangeText={(input) => this.handleChange('class', input)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Major</Text>
                <TextInput
                    autoCapitalize= "words"
                    placeholder="Major"
                    style={styles.textInput}
                    onChangeText={(input) => this.handleChange('major', input)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>College</Text>
                <TextInput
                    autoCapitalize= "words"
                    placeholder="College"
                    style={styles.textInput}
                    onChangeText={(input) => this.handleChange('college', input)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                    keyboardType="email-address"
                    autoCapitalize= "none"
                    placeholder="Email"
                    style={styles.textInput}
                    onChangeText={(input) => this.handleChange('email', input)}
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
                    onChangeText={(input) => this.handleChange('description', input)}
                />
            </View>
            <Button
                title="Done"
                onPress={() => this.handleSubmit(this.state)}
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
    color:"#404040"
  },
  formContainer: {
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 40
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputTitle: {
    fontSize: 18,
    paddingLeft: 10,
    color:"#404040",
  },
  textInput: {
      backgroundColor: '#EEF7FB',
      borderRadius: 10,
      padding: 15,
      borderColor: 'grey',
      marginTop: 5,
      color:"#404040"
  },
  titleContainer: {
    marginBottom: 20,
  },
  welcomeTitle:{
      fontSize: 38,
      fontFamily: 'Farah',
  }
});

export default FormScreen;