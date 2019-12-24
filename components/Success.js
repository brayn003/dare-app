import React from 'react';
import {Text} from 'react-native';
import {View, Image, TouchableHighlight, StyleSheet} from 'react-native';

class Success extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DARE . INC</Text>
        <Image style={styles.image} source={require('./images/football.jpg')} />
        <Text style={styles.textStyle}>Video successfully uploaded</Text>
        <Text style={styles.textStyle}>
          Points will be added to your profile after approval
        </Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.btnStyle}>Take other dares</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    // flex: 1,
    marginBottom: 50,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column',
  },
  image: {
    height: 280,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  container: {
    width: 500,
    height: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  button: {
    //flex: 1,
    //alignSelf: 'stretch',
    // flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 60,
    borderWidth: 0.5,
    marginTop: 40,
    width: 300,
  },

  textStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: 200,
  },

  btnStyle: {
    color: 'white',
    padding: 4,
  },
});

export default Success;
