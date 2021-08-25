import React from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from '../pages/Home';
import AppRoute from "~/routes/route";
import Welcome from "~/pages/Welcome";
import Provenance from "~/pages/Provenance";
import Gallery from "~/pages/Gallery";

const Routes: React.FC = () => {
  const location = useLocation();

  return (<TransitionGroup>
    <CSSTransition
      timeout={1000}
      classNames='fade'
      key={location.key}
    >
      <Switch>
        <AppRoute path="/welcome" component={Welcome}/>
        <AppRoute path="/provenance" component={Provenance}/>
        <AppRoute path="/gallery" component={Gallery}/>
        <AppRoute path="/" component={Home}/>
      </Switch>
    </CSSTransition>
  </TransitionGroup>)
};

export default Routes;
