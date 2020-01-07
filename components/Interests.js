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

class Interests extends React.Component {
  render() {
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
                    source={require('./images/profile.jpg')}
                    style={styles.img}
                  />
                </View>
              </View>

              <ImageBackground
                source={require('./images/books.jpg')}
                style={styles.images}>
                <View style={styles.overlay}>
                  <TouchableOpacity onPress={this._onPressButton}>
                    <Image
                      style={styles.tick}
                      source={require('./images/tick2.png')}
                    />
                  </TouchableOpacity>
                  <Image style={require('./images/tick.png')} />
                  <Text style={styles.imagetext}> READ </Text>
                  <Text style={styles.imgtext}> 200 interested</Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require('./images/fitness.jpg')}
                style={styles.images}>
                <View style={styles.overlay}>
                  <TouchableOpacity onPress={this._onPressButton}>
                    <Image
                      style={styles.tick}
                      source={require('./images/tick2.png')}
                    />
                  </TouchableOpacity>
                  <Text style={styles.imagetext}> FITNESS </Text>
                  <Text style={styles.imgtext}> 268 interested</Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require('./images/outdoor.jpg')}
                style={styles.images}>
                <View style={styles.overlay}>
                  <TouchableOpacity onPress={this._onPressButton}>
                    <Image
                      style={styles.tick}
                      source={require('./images/tick2.png')}
                    />
                  </TouchableOpacity>
                  <Text style={styles.imagetext}> OUTDOOR </Text>
                  <Text style={styles.imgtext}> 268 interested</Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require('./images/art.jpg')}
                style={styles.images}>
                <View style={styles.overlay}>
                  <TouchableOpacity onPress={this._onPressButton}>
                    <Image
                      style={styles.tick}
                      source={require('./images/tick2.png')}
                    />
                  </TouchableOpacity>
                  <Image style={require('./images/tick.png')} />
                  <Text style={styles.imagetext}> READ </Text>
                  <Text style={styles.imgtext}> 200 interested</Text>
                </View>
              </ImageBackground>
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
    fontSize: 18,
    textAlign: 'left',
  },
  imgtext: {
    color: 'white',
    justifyContent: 'center',
  },
  tick: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
});
export default Interests;
