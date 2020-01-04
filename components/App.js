import React from 'react';
import {View} from 'react-native';
import Success from './Success';
// import Bottom from './bottomTab';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Success />
      </View>
    );
  }
}

export default App;
