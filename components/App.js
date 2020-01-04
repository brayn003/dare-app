import React from 'react';
<<<<<<< HEAD
import {View} from 'react-native';
import Accepted from './Accepted';
import Success from './Success';
import MediaUpload from './MediaUpload';
class App extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Accepted />
        <Success />
        <MediaUpload />
      </View>
=======
import {NativeRouter} from 'react-router-native';

import CoreLayout from './CoreLayout';

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <CoreLayout />
      </NativeRouter>
>>>>>>> 90d8f1853caacd839b09749cda52b485aa6bdb0d
    );
  }
}
export default App;
