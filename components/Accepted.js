import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';

class Accepted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DARE . INC</Text>
        <Image style={styles.image} source={require('./Images/street.jpg')} />
        <Text style={styles.cardtitle}> Dare Card #1 </Text>
        <Text style={styles.description}>
          Description: This is a description.
        </Text>
        <Button style={styles.button} title="DARES ACCEPTED" color="green" />
        <Text style={styles.footer}>BACK TO DARE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    // flex: 1,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column',
  },
  container: {
    width: 350,
    height: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardtitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    color: 'green',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {},
});

export default Accepted;
