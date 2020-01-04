import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-native';
import {View, Text} from 'react-native';

import Login from './auth/Login';
import Registration from './auth/Registration';
import FullCard from './Fullcard';
import Interests from './Interests';

import {getToken} from '../helpers/auth';

class CoreLayout extends Component {
  state = {
    loggedIn: false,
  };

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = async () => {
    const token = await getToken();
    const {history} = this.props;
    if (!token) {
      history.push('/login');
    } else {
      history.push('/');
    }
  };

  render() {
    const {isLoggedIn} = this.state;
    console.log(this.props);
    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <Switch>
          <Route exact path="/" component={Interests} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
        </Switch>
      </View>
    );
  }
}

export default withRouter(CoreLayout);
