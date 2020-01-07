import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-native';
import {View} from 'react-native';

import Login from './auth/Login';
import Registration from './auth/Registration';
import FullCard from './Fullcard';
import Interests from './Interests';

import {getToken} from '../helpers/auth';
import Darepage from './Darepage';
import Accepted from './Accepted';
import Success from './Success';
import MediaUploads from './MediaUpload';

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
          <Route exact path="/" component={Darepage} />
          <Route exact path="/dare/:id" component={FullCard} />
          <Route exact path="/intrests" component={Interests} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/accepted/:id/:completeId" component={Accepted} />
          <Route
            exact
            path="/upload/:id/:completeId"
            component={MediaUploads}
          />
          <Route exact path="/completed/:completeId" component={Success} />
          <Route exact path="/profile" component={Darepage} />
        </Switch>
      </View>
    );
  }
}

export default withRouter(CoreLayout);
