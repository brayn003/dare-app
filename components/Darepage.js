import React from 'react';
import {View, Stylesheet, Text} from 'react-native';
import {Card, Button} from 'react-native-elements';

class Darepage extends React.component {
  render() {
    return (
      <View style={Stylesheet.container}>
        <Button>
          <Card>
            title='HELLO WORLD' image={require('../images/pic2.jpg')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about
            </Text>
          </Card>
        </Button>
        <Button>
          <Card>
            title='HELLO WORLD' image={require('../images/pic2.jpg')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about
            </Text>
          </Card>
        </Button>
      </View>
    );
  }
}
export default Darepage;
