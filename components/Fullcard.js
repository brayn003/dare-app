import React from 'react';
import {Text, View, Image, ImageBackground, StyleSheet} from 'react-native';

const dareId = '5e0dab7bb3aa574bf0f46438';

class Card extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> DARE . INC </Text>
        <ImageBackground
          source={require('./Images/dare1.jpg')}
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
        <View style={styles.swipe}>
          <View>
            <Image
              source={require('./Images/cancel-mark.png')}
              style={styles.decline}
            />
          </View>
          <View>
            <Image
              source={require('./Images/check.png')}
              style={styles.accept}
            />
          </View>
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
