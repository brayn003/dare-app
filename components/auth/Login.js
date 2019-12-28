import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import Button from '../commons/Button';
import axios from 'axios';
import {setToken} from '../../helpers/auth';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  onSubmit = async () => {
    try {
      const {username, password} = this.state;
      const {history} = this.props;
      if (username && password) {
        const res = await axios.post(
          'http://10.0.2.2:3053/api/v1/auth/login/',
          this.state,
        );
        await setToken(res.data.token);
        history.push('/');
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  render() {
    const {username, password} = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}> Welcome to Dare.Inc</Text>

          <TextInput
            onChangeText={text => {
              this.setState({username: text});
            }}
            value={username}
            style={styles.textinput}
            placeholder="Your Username"
          />
          <TextInput
            onChangeText={text => {
              this.setState({password: text});
            }}
            value={password}
            style={styles.textinput}
            placeholder="Your Password"
            secureTextEntry
          />

          <Button onPress={this.onSubmit}>Log In</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 700,
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
