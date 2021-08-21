import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "./layout";

interface Props {
  path: string,
  component: React.FC,
}

const AppRoute : React.FC<Props> = ({path, component}) => {
  return (
    <Route
      path={path}
      exact
      render={props => {
        return (
          <AppLayout
            component={component}
            props={props}
          />
        );
      }}
    />);
};

export default AppRoute;
