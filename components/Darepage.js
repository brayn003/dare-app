import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Darepage extends Component {  
  componentDidMount = async () => {
    
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.main}>
              <View>
                <Text style={styles.heading}>DARE. INC</Text>
              </View>
              <View style={styles.profilepic}>
                <Image
                  source={require('./Images/Cat.jpg')}
                  style={styles.img}
                />
              </View>
            </View>
            <View style={styles.cardcon}>
              <ImageBackground
                source={require('./Images/Burger.jpg')}
                style={styles.images}>
                <View style={styles.overlay}>
                  <TouchableOpacity onPress={this._onPressButton} />
                  <View style={styles.textcontainer}>
                    <Text style={styles.imagetext}>Eat a Burger.</Text>
                    <Text style={styles.imgtext}>Uploaded 1hr ago</Text>
                    <Text style={styles.imgtext}>Points:200</Text>
                  </View>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require('./Images/Scott.jpg')}
                style={styles.images}>
                <View style={styles.overlay}>
                  <TouchableOpacity onPress={this._onPressButton} />
                  <View style={styles.textcontainer}>
                    <Text style={styles.imagetext}>
                      Paticipate in a Downhill race.
                    </Text>
                    <Text style={styles.imgtext}>Uploaded 2hrs ago</Text>
                    <Text style={styles.imgtext}>Points:200</Text>
                  </View>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require('./Images/doggo.jpg')}
                style={styles.images}>
                <View style={styles.overlay}>
                  <TouchableOpacity onPress={this._onPressButton} />
                  <View style={styles.textcontainer}>
                    <Text style={styles.imagetext}>
                      Take a selfie with a street dog.
                    </Text>
                    <Text style={styles.imgtext}>Uploaded 3hrs ago</Text>
                    <Text style={styles.imgtext}>Points:200</Text>
                  </View>
                </View>
              </ImageBackground>
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
