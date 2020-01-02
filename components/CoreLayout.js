import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-native';
import {View} from 'react-native';

import Login from './auth/Login';
import Registration from './auth/Registration';
import FullCard from './Fullcard';

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
      <View>
        <Switch>
          <Route exact path="/" component={FullCard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
        </Switch>
      </View>
    );
  }
}

export default withRouter(CoreLayout);
