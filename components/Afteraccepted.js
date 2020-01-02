import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Logo from './commons/Logo';
import Card from './commons/Card';

class Afteraccepted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.card}>
          <Card />
        </View>
        <View style={styles.iconboxes}>
          <View style={styles.iconbox}>
            <Image
              style={styles.icon}
              source={require('./images/gallery.png')}
            />
          </View>
          <View style={styles.iconbox}>
            <Image
              style={styles.icon}
              source={require('./images/photo-camera.png')}
            />
          </View>
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
  card: {
    marginTop: -120,
  },
  icon: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconbox: {
    width: 60,
    height: 50,
    backgroundColor: '#3CDA88',
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 60,
  },
  iconboxes: {
    width: 300,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Afteraccepted;
