import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import axios from 'axios';
import {getToken} from '../helpers/auth';

class ProfilePage extends React.Component {
  state = {
    profile: {},
  };

  componentDidMount = async () => {
    console.log('hi');
    const token = await getToken();
    const res = await axios.get('http://192.168.0.51:3053/api/v1/app/dare/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    this.setState({profile: res.data});
  };

  render() {
    const {profile} = this.state;

    return (
      <View style={styles.background}>
        <Text style={styles.title}>DARE . INC</Text>

        <Image
          style={styles.profilepic}
          source={require('./images/profilepic.jpg')}
        />
        <Text style={styles.interests}> Outdoor | Sports | Fitness </Text>

        <Text style={styles.interests}> Name : Dhairy </Text>

        <Text style={styles.interests}> Dares Accepted : 100</Text>
        <Text style={styles.interests}> Dares Completed : 75 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: 500,
    height: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    margin: 25,
  },
});

export default ProfilePage;
