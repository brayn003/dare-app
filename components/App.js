import React from 'react';
// import {NativeRouter} from 'react-router-native';
import {View} from 'react-native';
import MediaUpload from './MediaUpload';
import CoreLayout from './CoreLayout';

class App extends React.Component {
  render() {
    return (
      <View>
        <MediaUpload />
      </View>
    );
  }
}
export default App;
