import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios';
import {getToken} from '../helpers/auth';

import {SERVER_URL} from '../constants.json';

class Card extends React.Component {
  state = {
    dare: {},
  };
  componentDidMount = async () => {
    const dareId = this.props.match.params.id;
    const token = await getToken();
    const res = await axios.get(`${SERVER_URL}/api/v1/app/dare/` + dareId, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    this.setState({dare: res.data});
  };

  onClickAccept = async () => {
    const dareId = this.props.match.params.id;
    const {history} = this.props;
    const token = await getToken();
    console.log(token);
    try {
      const res = await axios.post(
        `${SERVER_URL}/api/v1/app/dare/${dareId}/accept`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      );
      if (res.data) {
        history.push(`/accepted/${dareId}/${res.data.id}`);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  onClickReject = () => {
    const {history} = this.props;
    history.push('/');
  };

  render() {
    const {dare} = this.state;
    console.log(dare);
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> DARE . INC </Text>
        <ImageBackground source={{uri: dare.image}} style={styles.images}>
          <View style={styles.overlay}>
            <Text style={styles.imagetext}> {dare.points} </Text>
            <Text style={styles.imagetime}> {dare.time} </Text>
          </View>
        </ImageBackground>
        <Text style={styles.title}> {dare.title || 'Dare Title0'}</Text>
        <Text style={styles.imagetext}> Instructions: </Text>
        <View style={styles.textcont}>
          <Text style={styles.imagetime}>{dare.description}</Text>
        </View>
        <View style={styles.swipe}>
          <TouchableHighlight onPress={this.onClickReject}>
            <View>
              <Image
                source={require('./images/reject.png')}
                style={styles.decline}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.onClickAccept}>
            <View>
              <Image
                source={require('./images/accept.png')}
                style={styles.accept}
              />
            </View>
          </TouchableHighlight>
        </View>
        <Text style={styles.similar}> Similar Dares: </Text>
        <View style={styles.similardares}>
          <View style={styles.similardaresimage} />
          <View style={styles.similardaresimage} />
          <View style={styles.similardaresimage} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  heading: {
    color: '#3CDA88',
    fontWeight: 'bold',
    fontFamily: 'DK Appelstroop',
    fontSize: 30,
    marginBottom: 10,
  },
  images: {
    height: 200,
    width: 350,
    borderRadius: 50,
    marginBottom: 15,
  },
  overlay: {
    height: 200,
    width: 350,
    backgroundColor: 'black',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imagetext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  imagetime: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
  },
  textcont: {
    width: 350,
    height: 70,
  },
  swipe: {
    height: 50,
    width: 350,
    backgroundColor: '#3CDA88',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  decline: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  accept: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  similar: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
  },
  similardares: {
    height: 100,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  similardaresimage: {
    height: 150,
    width: 110,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
export default Card;
