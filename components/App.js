import React from 'react';
import {View} from 'react-native';
import Card from './Fullcard';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Card />
      </View>
    );
  }
}

export default App;
