import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import OutlineButton from './commons/Button';

export default class MediaUploads extends Component {
  state = {
    pickedImage: null,
  };

  reset = () => {
    this.setState({
      pickedImage: null,
    });
  };

  /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info below in README)
   */

  pickImageHandler = () => {
    ImagePicker.showImagePicker(
      {title: 'Pick an Image', maxWidth: 800, maxHeight: 600},
      res => {
        if (res.didCancel) {
          console.log('User cancelled!');
        } else if (res.error) {
          console.log('Error', res.error);
        } else {
          this.setState({
            pickedImage: {uri: res.uri},
          });
        }
      },
    );
  };

  resetHandler = () => {
    this.reset();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Pick Image From Camera and Gallery{' '}
        </Text>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <OutlineButton onPress={this.pickImageHandler}>
            Pick Image
          </OutlineButton>

          <OutlineButton onPress={this.resetHandler}>Reset</OutlineButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: '100%',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'grey',
    width: '70%',
    height: '60%',
    marginTop: 50,
  },
  button: {
    marginTop: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});
