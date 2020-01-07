import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    // flex: 1,
    marginTop: 25,
    marginBottom: 10,
    color: '#3CDA88',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column',
  },
  image: {
    height: 255,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  container: {
    width: 500,
    height: 500,
    flex: 1,
    marginLeft: -70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  button: {
    //flex: 1,
    //alignSelf: 'stretch',
    // flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#3CDA88',
    padding: 15,
    borderRadius: 60,
    borderWidth: 0.5,
    marginTop: 10,
    marginBottom: 10,
    width: 330,
  },

  textStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 32,
  },

  btnStyle: {
    color: 'white',
    padding: 4,
    fontWeight: 'bold',
  },
});

export default styles;
