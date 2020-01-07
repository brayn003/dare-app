import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import axios from 'axios';

import OutlineButton from './commons/Button';
import {getToken} from '../helpers/auth';
import {SERVER_URL} from '../constants.json';

import {Buffer} from 'buffer';

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
          console.log(Object.keys(res));
          this.imageDetails = res;
          this.setState({
            pickedImage: {uri: res.uri},
          });
        }
      },
    );
  };

  uploadImage = async () => {
    const token = await getToken();
    try {
      const res = await axios.get(
        `${SERVER_URL}/api/v1/app/upload/signed-url`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      );
      const uploadUrl = res.data.signedUrl;
      const readUrl = res.data.url;
      const config = {headers: {'Content-Type': this.imageDetails.type}};
      const bf = new Buffer(this.imageDetails.data, 'base64');
      await axios.put(uploadUrl, bf, config);
      return readUrl;
    } catch (err) {
      console.log(err.response.data);
    }
  };

  completeDare = async () => {
    const token = await getToken();
    const dareId = this.props.match.params.id;
    const completeId = this.props.match.params.completeId;
    const {history} = this.props;
    const url = await this.uploadImage();
    console.log(dareId, completeId);
    const res = await axios.post(
      `${SERVER_URL}/api/v1/app/dare/${dareId}/complete/${completeId}`,
      {
        imageUrl: url,
        completed: true,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      },
    );
    console.log(res);
    history.push(`/completed/${completeId}`);
  };

  resetHandler = () => {
    this.reset();
  };

  render() {
    const {pickedImage} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Pick Image From Camera and Gallery{' '}
        </Text>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <OutlineButton
            onPress={pickedImage ? this.completeDare : this.pickImageHandler}>
            {pickedImage ? 'Upload Image and complete dare' : 'Pick Image'}
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
