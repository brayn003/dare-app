import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Logo from './commons/Logo';
import Interestcard from './Interestcard';
// import Card from './commons/Card';

class Interest extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logobox}>
            <Logo align="left" color="green" />
            <Text style={styles.subtitle}> INTERESTS </Text>
          </View>
          <View style={styles.profilebox} />
          <Image style={styles.profile} source={require('./images/boy.jpg')} />
        </View>
        {/*
        <Image style={styles.card} source={require('./images/outdoor.jpg')} />
        <Image style={styles.card} source={require('./images/fitness.jpg')} />
        <Image style={styles.card} source={require('./images/football.jpg')} /> */}
        <Interestcard />
        <Interestcard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  header: {
    width: 360,
    height: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'halvetica',
    letterSpacing: 5,
  },
  profile: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    marginTop: 50,
    marginRight: 30,
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 3,
  },
  // card: {
  //   width: 320,
  //   height: 180,
  //   marginLeft: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 10,
  //   marginBottom: 20,
  // },
});

export default Interest;
