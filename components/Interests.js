import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Interests extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Dare. Inc</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  title: {
    marginTop: 10,
    color: 'green',
    width: 320,
    alignItem: 'center',
    justifyContent: 'center',
  },
});

export default Interests;
