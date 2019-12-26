import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

class Card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> DARE . INC </Text>
        <ImageBackground
          source={require('./images/dare1.jpg')}
          style={styles.images}>
          <View style={styles.overlay}>
            <Text style={styles.imagetext}> Points:500 </Text>
            <Text style={styles.imagetime}> 02d:23h:45m:36s </Text>
          </View>
        </ImageBackground>
        <Text style={styles.title}> Dare Card #1</Text>
        <Text style={styles.imagetext}> Instructions: </Text>
        <View style={styles.textcont}>
          <Text style={styles.imagetime}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </Text>
        </View>
        <View style={styles.swipe} />
        <Text style={styles.similar}> Similar Dares: </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  heading: {
    color: '#3CDA88',
    fontWeight: 'bold',
    fontFamily: 'DK Appelstroop',
    fontSize: 30,
  },
  images: {
    height: 200,
    width: 350,
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
  },
  textcont: {
    width: 350,
    height: 100,
  },
  swipe: {
    height: 50,
    width: 350,
    backgroundColor: '#3CDA88',
  },
  similar: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
  },
});
export default Card;
