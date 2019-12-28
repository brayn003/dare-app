import React from 'react';
import {NativeRouter} from 'react-router-native';

import CoreLayout from './CoreLayout';

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <CoreLayout />
      </NativeRouter>
    );
  }
}

export default App;
