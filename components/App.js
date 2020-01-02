import React from 'react';
import {View} from 'react-native';
import Profile from './Profile';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Profile />
        {/* <Text> bj;wv; h;iuefah ;i</Text> */}
        {/* <Success /> */}
      </View>
    );
  }
}

export default App;
