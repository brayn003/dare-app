import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#3CDA88',
    marginTop: 20,
    marginBottom: 15,
    width: 320,
  },
  buttonText: {
    color: '#3CDA88',
    padding: 4,
  },
});

const OutlineButton = ({children, style, ...rest}) => {
  return (
    <TouchableHighlight style={[styles.touchable, style]} {...rest}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};

export default OutlineButton;
