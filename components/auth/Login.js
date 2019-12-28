import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import Button from './commons/Button';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}> Welcome to Dare.Inc</Text>

          <TextInput style={styles.textinput} placeholder="Your Username" />
          <TextInput style={styles.textinput} placeholder="Your Password" />

          <Button>Log In</Button>
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
    backgroundColor: '#fff',
    textAlign: 'center',
    // shadowOffset:{width: 10, height: 10},
    // shadowColor: 'white',
    // shadowOpacity: 2.0,
  },

  signupbutton: {
    color: 'white',
    backgroundColor: '#3CD',
    padding: 10,
    alignItems: 'center',
    height: 30,
    width: 300,
  },

  btntext: {
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Login;
