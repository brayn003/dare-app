import React from 'react';

import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  logoText: {
    color: '#3CDA88',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'halvetica',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
  },
});

const Logo = () => {
  return <Text style={styles.logoText}>DARE.INC</Text>;
};

export default Logo;
