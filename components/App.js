import React from 'react';
import {View} from 'react-native';
import Success from './Success';
import MediaUpload from './MediaUpload';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Success />
        <MediaUpload />
      </View>
    );
  }
}
export default App;
