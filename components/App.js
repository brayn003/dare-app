import React from 'react';
import {View} from 'react-native';
import Success from './Success';
import ProfilePage from './profile';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ProfilePage />
      </View>
    );
  }
}

export default App;
