import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Registration extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}> Welcome to Dare.Inc</Text>

          <TextInput style={styles.textinput} placeholder="Your Username" />
          <TextInput style={styles.textinput} placeholder="Your Phone Number" />
          <TextInput style={styles.textinput} placeholder="Your Email Id" />
          <TextInput style={styles.textinput} placeholder="Your Password" />

          <TouchableOpacity style={styles.signupbutton}>
            <Text style={styles.btntext}>Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 700,
    width: 400,
    padding: 40,
    backgroundColor: 'black',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 30,
  },

  textinput: {
    color: 'black',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    textAlign: 'center',
  },

  signupbutton: {
    color: 'white',
    backgroundColor: '#3CDA88',
    padding: 10,
    alignItems: 'center',
  },

  btntext: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Registration;
