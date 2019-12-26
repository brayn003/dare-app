import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Interests extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text styles={styles.title}>DARE. INC</Text>
        <Text styles={styles.text}>INTERESTS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  title: {
    fontFamily: 'DK Appelstroop',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3CDA88',
  },

  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Interests;
