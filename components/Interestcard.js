import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 180,
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
});
const Card = props => {
  const {} = () => {
    return (
      <Image style={styles.card} source={require('./images/outdoor.jpg')} />
    );
  };
};
export default Card;
