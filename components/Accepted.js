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
        <Text style={styles.cardtitle}> Dare Card #1 </Text>
        <Text style={styles.description}>
          Description: Lorem epsum is simply dummy text of the printing and
          typesetting industry. Lorem ipsum has been the industry.
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
    height: 200,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: -160,
    marginBottom: 160,
    borderRadius: 30,
  },
  cardtitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -160,
    marginBottom: 160,
  },
  description: {
    width: 300,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -160,
    marginBottom: 160,
    padding: 10,
  },
  buttonbox: {
    marginTop: -160,
    marginBottom: -20,
    borderBottomEndRadius: 100,
    width: 320,
  },
  footer: {
    color: '#3CDA88',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default Accepted;
