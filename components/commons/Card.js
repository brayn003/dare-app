import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  cardbox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 30,
    opacity: 0.7,
  },
  pointtxt: {
    color: 'white',
    fontWeight: '200',
    fontSize: 20,
    marginTop: -70,
    opacity: 0.7,
    paddingBottom: 10,
  },
  timertxt: {
    color: 'white',
    fontWeight: '200',
    fontSize: 20,
    marginTop: -5,
    opacity: 0.7,
  },
  cardtitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  descriptiontitle: {
    width: 300,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    // marginTop: 2,
  },
  description: {
    width: 300,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});

const Card = ({children, style, ...rest}) => {
  return (
    <View style={[styles.cardbox, style]} {...rest}>
      <Image style={styles.image} source={require('../images/selfie.jpg')} />
      <Text style={styles.pointtxt}>{children}Point: 500</Text>
      <Text style={styles.timertxt}>{children} 02d:20h:45m:36s</Text>
      <Text style={styles.cardtitle}>{children} Take a selfie </Text>
      <Text style={styles.descriptiontitle}>{children} Description : </Text>
      <Text style={styles.description}>
        {children}
        Lorem epsum is simply dummy text of the printing and typesetting
        industry. Lorem ipsum has been the industry..
      </Text>
    </View>
  );
};

export default Card;
