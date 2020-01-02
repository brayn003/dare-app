import React from 'react';
import Logo from './commons/Logo';
import {View, StyleSheet, Text} from 'react-native';
// import Button from './commons/Button';

class Registration extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Logo />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  welcome: {
    marginTop: 50,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Registration;
