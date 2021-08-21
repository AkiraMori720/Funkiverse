import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import AppRoute from "~/routes/route";

const Routes: React.FC = () => (
  <Switch>
    <AppRoute path="/" component={Home}/>
  </Switch>
);

export default Routes;
