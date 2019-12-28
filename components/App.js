import React from 'react';
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
    );
  }
}
export default App;
