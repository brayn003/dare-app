import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

import {SERVER_URL} from '../constants.json';
import axios from 'axios';
import {getToken} from '../helpers/auth';

class ProfilePage extends React.Component {
  state = {
    profile: {},
  };

  componentDidMount = async () => {
    console.log('hi');
    const token = await getToken();
    const res = await axios.get(`${SERVER_URL}/api/v1/app/user/profile`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    this.setState({profile: res.data});
  };

  onClickReject = () => {
    const {history} = this.props;
    history.push('/');
  };

  render() {
    const {profile} = this.state;
    return (
      <View style={styles.background}>
        <TouchableHighlight onPress={this.onClickReject}>
          <Text style={styles.title}>DARE . INC</Text>
        </TouchableHighlight>
        <Image
          style={styles.profilepic}
          source={require('./images/profile.jpg')}
        />
        <Text style={styles.interests}>
          {(profile.interests || []).map(i => i.title).join(' | ')}
        </Text>

        <Text style={styles.interests}>
          Name : {(profile.user || {}).username}{' '}
        </Text>

        <Text style={styles.interests}>
          Dares Accepted : {(profile.stats || {}).daresAccepted}
        </Text>
        <Text style={styles.interests}>
          Dares Completed : {(profile.stats || {}).daresCompleted}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: 500,
    height: 500,
    flex: 1,

    backgroundColor: 'black',
  },
  title: {
    marginBottom: 50,
    color: '#3CDA88',
    fontWeight: 'bold',
    fontSize: 30,
  },
  profilepic: {
    height: 300,
    width: 300,
  },
  interests: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default ProfilePage;
