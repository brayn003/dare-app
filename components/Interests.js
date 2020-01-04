import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {SERVER_URL} from '../constants.json';
import {getToken} from '../helpers/auth.js';

class Interests extends React.Component {
  state = {
    interests: [],
    selected: [],
  };

  componentDidMount = async () => {
    const token = await getToken();
    try {
      const res = await axios.get(`${SERVER_URL}/api/v1/app/interests`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      this.setState({interests: res.data});
    } catch (err) {
      console.log('err', err.response);
    }
  };

  onPressCard = interestId => {
    console.log('hey there', interestId);
    const {selected} = this.state;
    let selected2 = [...selected];
    const index = selected.indexOf(interestId);
    if (index === -1) {
      selected2.push(interestId);
    } else {
      selected2.splice(index, 1);
    }
    this.setState({selected: selected2});
  };

  render() {
    const {interests, selected} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View>
              <View style={styles.mains}>
                <View>
                  <Text style={styles.heading}> DARE. INC</Text>
                  <Text style={styles.title}> INTEREST</Text>
                </View>
                <View>
                  <Image
                    source={require('./Images/profile.jpg')}
                    style={styles.img}
                  />
                </View>
              </View>
              {interests.map(interest => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.onPressCard(interest.id);
                    }}>
                    <ImageBackground
                      key={interest.id}
                      source={{uri: interest.imageURL}}
                      style={styles.images}>
                      <View style={styles.overlay}>
                        {selected.indexOf(interest.id) !== -1 && (
                          <Image
                            style={styles.tick}
                            source={require('./Images/tick2.png')}
                          />
                        )}
                        <Text style={styles.imagetext}> {interest.title} </Text>
                        {/* <Text style={styles.imgtext}> 200 interested</Text> */}
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  mains: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 50,
    marginTop: 15,
  },

  heading: {
    color: '#3CDA88',
    fontWeight: 'bold',
    fontFamily: 'DK Appelstroop',
    fontSize: 20,
    marginLeft: -60,
    marginTop: 10,
  },
  title: {
    color: 'white',
    marginLeft: -50,
    marginTop: 1,
  },

  images: {
    height: 150,
    width: 300,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  overlay: {
    height: 150,
    width: 300,
    backgroundColor: 'black',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
    borderRadius: 10,
  },
  imagetext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'left',
    marginBottom: 16,
  },
  imgtext: {
    color: 'white',
    justifyContent: 'center',
    paddingBottom: 16,
  },
  tick: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    marginBottom: 20,
  },
});
export default Interests;
