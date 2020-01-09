import React from 'react';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';

import Logo from './commons/Logo';
import Button from './commons/Button';
import OutlineButton from './commons/OutlineButton';
import Card from './commons/Card';

import {SERVER_URL} from '../constants.json';
import {getToken} from '../helpers/auth';

class Accepted extends React.Component {
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

  onPressBack = () => {
    const {history} = this.props;
    history.push('/');
  };

  onPressComplete = () => {
    const dareId = this.props.match.params.id;
    const completeId = this.props.match.params.completeId;
    const {history} = this.props;
    history.push(`/upload/${dareId}/${completeId}`);
  };

  render() {
    const {dare} = this.state;
    return (
      <View style={styles.container}>
        <Logo align="center" />
        <View style={styles.card}>
          <Card dare={dare} />
        </View>
        <View style={styles.buttonbox}>
          <Button onPress={this.onPressComplete}> COMPLETE THE DARE</Button>
        </View>

        <View style={styles.footer}>
          <OutlineButton onPress={this.onPressBack}>
            {' '}
            BACK TO DARE
          </OutlineButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },

  buttonbox: {
    marginTop: 50,
  },
  card: {
    marginTop: -95,
    // flex: 1,
    // alignItems: 'center',
  },
});

export default Accepted;
