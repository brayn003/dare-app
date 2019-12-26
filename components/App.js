import React from 'react';
import {View} from 'react-native';
import Registration from './Registration';
import LogIn from './logIn';

class App extends React.Component {
  render() {
    return (
      <View>
        <Registration />
        {/* <LogIn /> */}
      </View>
    );
  }
}

export default App;
