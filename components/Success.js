import React from 'react';
import {Text, View, Image, TouchableHighlight, StyleSheet} from 'react-native';
// import {Link} from 'react-router-native';

import styles from '../styles';
import Bottom from './bottomTab';

const internalStyle = StyleSheet.create({
  successMessage: {
    fontSize: 18,
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  successDescription: {
    fontSize: 18,
    color: '#FFFFFF',
    letterSpacing: 1,
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  successApproval: {
    fontSize: 9.5,
    color: 'white',
    marginTop: 10,
    letterSpacing: 2,
  },

  profile: {
    fontSize: 18,
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});

class Success extends React.Component {
  componentDidMount() {
    console.log('hit up', this.props.match.params.completedId);
  }

  onPressToDares = () => {
    const {history} = this.props;
    history.push('/');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DARE . INC</Text>
        <Image style={styles.image} source={require('./images/football.jpg')} />
        <Text style={internalStyle.successMessage}>
          Video successfully uploaded
        </Text>
        <Text style={internalStyle.successDescription}>
          {'Points will be added to your'}
        </Text>

        <Text style={internalStyle.profile}>profile after approval</Text>

        <Text style={internalStyle.successApproval}>
          {' '}
          * it takes upto 24 hours for approval
        </Text>
        <TouchableHighlight onPress={this.onPressToDares} style={styles.button}>
          <Text style={styles.btnStyle}>Take other dares</Text>
        </TouchableHighlight>
        <View>
          <Bottom />
        </View>
      </View>
    );
  }
}

export default Success;
