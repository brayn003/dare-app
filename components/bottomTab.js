import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View, StyleSheet} from 'react-native';
// import styles from '../styles';

const style = StyleSheet.create({
  bottomTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 60,
    marginTop: 10,
    marginBottom: 10,
    height: 75,
    justifyContent: 'space-evenly',
    width: 370,
  },
  bottomName: {
    color: '#00B352',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 15,
    letterSpacing: 0.2,
  },
  bottomDare: {
    color: '#00B352',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 8,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 30,
    backgroundColor: '#EEEEEE',
    marginTop: 38,
    marginBottom: 25,
    letterSpacing: 0.2,
    width: 68,
    height: 60,
    left: 4,
    top: -14,
    position: 'relative',
  },
});

class Bottom extends React.Component {
  render() {
    return (
      <View style={style.bottomTitle}>
        <TouchableOpacity>
          <Text style={style.bottomName}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.bottomDare}>DARE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.bottomName}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Bottom;
