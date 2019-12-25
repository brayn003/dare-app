import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    backgroundColor: '#3CDA88',
    padding: 10,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#3CDA88',
    // marginTop: 10,
    width: 320,
  },
  buttonText: {
    color: 'white',
    padding: 4,
  },
});

const Button = ({children, style, ...rest}) => {
  return (
    <TouchableHighlight style={[styles.touchable, style]} {...rest}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};

export default Button;
