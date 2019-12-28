import React from 'react';
import {Route, Switch} from 'react-router-native';

import Login from './auth/Login';
import Registration from './auth/Registration';

const CoreLayout = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Registration} />
    </Switch>
  );
};

export default CoreLayout;
