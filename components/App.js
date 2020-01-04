import React from 'react';
import {View} from 'react-native';
// import Interests from './Interests';
// import Accepted from './Accepted';
import Interests from './Interests';

class App extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Interests />
      // </View>
    );
  }
}

export default App;
