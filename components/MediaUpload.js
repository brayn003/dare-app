import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class MediaUpload extends React.Component {
  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImaghePicker(options, response => {
      console.log('response', response);
    });
  };
  render() {
    return (
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   title: {
//     color: 'green',
//     fontWeight: 'bold',
//     fontSize: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // flexDirection: 'column',
//   },
//   container: {
//     width: 350,
//     height: 10,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   image: {
//     height: 300,
//     width: 300,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardtitle: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   description: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   footer: {
//     color: 'green',
//     fontSize: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {},
// });
// export default MediaUpload;
