import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import {SERVER_URL} from '../constants.json';
import {getToken} from '../helpers/auth.js';

class Darepage extends Component {
  state = {
    dares: [],
  };

  componentDidMount = async () => {
    const token = await getToken();
    try {
      const res = await axios.get(`${SERVER_URL}/api/v1/app/dares`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      this.setState({dares: res.data});
    } catch (err) {
      console.log(err.response);
    }
  };

  onPressCard = dareId => {
    const {history} = this.props;
    history.push(`/dare/${dareId}`);
  };

  onPressProfile = () => {
    console.log('hi there');
    const {history} = this.props;
    history.push('/profile');
  };

  render() {
    const {dares} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.main}>
              <View>
                <Text style={styles.heading}>DARE. INC</Text>
              </View>
              <View style={styles.profilepic}>
                <TouchableOpacity onPress={this.onPressProfile}>
                  <Text style={{color: '#FFF'}}>Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardcon}>
              {dares.map(dare => {
                return (
                  <TouchableOpacity
                    key={dare.id}
                    onPress={() => {
                      this.onPressCard(dare.id);
                    }}>
                    <ImageBackground
                      source={{uri: dare.image}}
                      style={styles.images}>
                      <View style={styles.overlay}>
                        <View style={styles.textcontainer}>
                          <Text style={styles.imagetext}>
                            {dare.title || 'Dare Title'}
                          </Text>
                          <Text style={styles.imgtext}>
                            Expires in {dare.time} day{dare.time > 1 && 's'}
                          </Text>
                          <Text style={styles.imgtext}>
                            Points: {dare.points}
                          </Text>
                        </View>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: -1,
  },
  profilepic: {
    marginTop: 10,
    marginRight: -50,
  },
  cardcon: {
    marginBottom: 20,
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 50,
    marginTop: 15,
    marginRight: -250,
  },
  ScrollView: {
    marginHorizontal: 20,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: -50,
    marginTop: 1,
  },

  heading: {
    color: '#3CDA88',
    fontWeight: 'bold',
    fontFamily: 'DK Appelstroop',
    fontSize: 30,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: -50,
  },
  images: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 200,
    width: 425,
    marginBottom: 55,
    borderRadius: 20,
    overflow: 'hidden',
  },
  overlay: {
    height: 240,
    width: 425,
    backgroundColor: 'black',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    borderRadius: 20,
  },
  imagetext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
  },
  imgtext: {
    color: 'white',
    justifyContent: 'center',
  },
  textcontainer: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Darepage;
