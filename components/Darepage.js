import React from 'react';
import {View, Stylesheet, Text} from 'react-native';
import {Card, TouchableHighlight} from 'react-native';

class Darepage extends React.Component {
  render() {
    return (
      <View style={Stylesheet.container}>
        <TouchableHighlight>
          <Card>
            title='DARE.INC' image={require('../images/pic2.jpg')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about
            </Text>
          </Card>
        </TouchableHighlight>
        <TouchableHighlight>
          <Card>
            title='HELLO WORLD' image={require('../images/pic2.jpg')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about
            </Text>
          </Card>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Darepage;
