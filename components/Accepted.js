import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import Logo from './commons/Logo';
import Button from './commons/Button';
import OutlineButton from './commons/OutlineButton';

class Accepted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Image style={styles.image} source={require('./images/selfie.jpg')} />
        <Text style={styles.pointtxt}>Point: 500</Text>
        <Text style={styles.timertxt}>02d:23h:45m:36s</Text>
        <Text style={styles.cardtitle}> Take a selfie </Text>
        <Text style={styles.descriptiontitle}>Description :</Text>
        <Text style={styles.description}>
          Lorem epsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry.
        </Text>
        <View style={styles.buttonbox}>
          <Button> DARE ACCEPTED</Button>
        </View>

        <View style={styles.footer}>
          <OutlineButton> BACK TO DARE</OutlineButton>
        </View>
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
  image: {
    height: 250,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderRadius: 30,
    opacity: 0.8,
  },
  pointtxt: {
    color: 'white',
    marginTop: -50,
    fontSize: 20,
    opacity: 0.7,
  },
  timertxt: {
    color: 'white',
    marginTop: -5,
    fontSize: 20,
    opacity: 0.7,
  },
  cardtitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  descriptiontitle: {
    width: 300,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    // marginTop: 15,
  },
  description: {
    width: 300,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonbox: {
    borderBottomEndRadius: 100,
    width: 320,
    marginTop: 30,
  },
  footer: {
    color: '#3CDA88',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
});

export default Accepted;
