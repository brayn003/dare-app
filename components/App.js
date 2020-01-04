import React from 'react';
import {View} from 'react-native';

import Darepage from './Darepage';

class App extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, height: '100%', width: '100%',}}>
        <Darepage />
      </View>
    );
  }
}

export default App;
