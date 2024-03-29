import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import Button from '../commons/Button';
import axios from 'axios';
import {setToken} from '../../helpers/auth';
import {withRouter} from 'react-router-native';
import {Link} from 'react-router-native';

import {SERVER_URL} from '../../constants.json';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  onSubmit = async () => {
    console.log(SERVER_URL);
    try {
      const {username, password} = this.state;
      const {history} = this.props;
      if (username && password) {
        const res = await axios.post(
          `${SERVER_URL}/api/v1/auth/login/`,
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
        <View>
          <Link to="/register">
            <Text style={styles.bottomTitle}>Don't have an Account?</Text>
          </Link>
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

  bottomTitle: {
    color: 'white',
    fontSize: 20,
    padding: 20,
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
