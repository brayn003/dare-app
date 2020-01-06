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

const Card = ({children, dare, style, ...rest}) => {
  return (
    <View style={[styles.cardbox, style]} {...rest}>
      <Image style={styles.image} source={{uri: dare.image}} />
      <Text style={styles.pointtxt}>Point: {dare.points}</Text>
      <Text style={styles.timertxt}>{dare.time} days left</Text>
      <Text style={styles.cardtitle}>{dare.title} </Text>
      <Text style={styles.descriptiontitle}>Description : </Text>
      <Text style={styles.description}>{dare.description}</Text>
    </View>
  );
};

export default Card;
