import React, {Component} from 'react';
import {
  StyleSheet,
  AppRegistry,
  TouchableHighlight,
  View,
  Text,
  Image,
} from 'react-native';

export default class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>DARE . INC</Text>

        <Image
          style={styles.profilepic}
          source={require('./images/profilepic.jpg')}
        />
        <Text style={styles.interests}> Outdoor | Sports | Fitness </Text>

        <Text style={styles.interests}> Name : Dhairya </Text>

        <Text style={styles.interests}> Dares Accepted : 100</Text>
        <Text style={styles.interests}> Dares Completed : 75 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

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
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column',
  },

  profilepic: {
    height: 300,
    width: 300,
  },

  interests: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '25',
  },
});
