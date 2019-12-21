import React from 'react';
import {View} from 'react-native';
import Accepted from './Accepted';
class App extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Accepted />
      </View>
    );
  }
}
export default App;
