import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from './commons/Logo';
import Button from './commons/Button';
import OutlineButton from './commons/OutlineButton';
import Card from './commons/Card';

class Accepted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo align="center" />
        <View style={styles.card}>
          <Card />
        </View>
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

  buttonbox: {
    marginTop: 50,
    borderBottomEndRadius: 100,
    width: 320,
  },
  card: {
    marginTop: 5,
  },
});

export default Accepted;
