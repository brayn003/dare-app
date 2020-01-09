import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import {SERVER_URL} from '../../constants.json';
import {setToken} from '../../helpers/auth.js';

class Registration extends React.Component {
  state = {
    username: '',
    mobile: '',
    email: '',
    password: '',
  };

  onSubmit = async () => {
    console.log('Indiass');
    try {
      const {username, password, mobile, email} = this.state;
      const {history} = this.props;
      if (username && password && mobile && email) {
        await axios.post(`${SERVER_URL}/api/v1/auth/register/`, this.state);

        const res2 = await axios.post(`${SERVER_URL}/api/v1/auth/login/`, {
          username,
          password,
        });
        await setToken(res2.data.token);
        history.push('/intrests');
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  render() {
    const {username, mobile, email, password} = this.state;

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
              this.setState({mobile: text});
            }}
            value={mobile}
            style={styles.textinput}
            placeholder="Your Mobile"
          />

          <TextInput
            onChangeText={text => {
              this.setState({email: text});
            }}
            value={email}
            style={styles.textinput}
            placeholder="Your Email"
          />

          <TextInput
            onChangeText={text => {
              this.setState({password: text});
            }}
            value={password}
            style={styles.textinput}
            placeholder="Your Password"
          />

          <TouchableOpacity onPress={this.onSubmit} style={styles.signupbutton}>
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
