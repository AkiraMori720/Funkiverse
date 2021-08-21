import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import AppRoute from "~/routes/route";
import Collection from "~/pages/Collection";
import Attribute from "~/pages/Attribute";
import AllMinted from "~/pages/AllMinted";

const Routes: React.FC = () => (
  <Switch>
    <AppRoute path="/collection" component={Collection}/>
    <AppRoute path="/all" component={AllMinted}/>
    <AppRoute path="/attribute" component={Attribute}/>
    <AppRoute path="/" component={Home}/>
  </Switch>
);

export default Routes;
