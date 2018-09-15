import React from "react";
import { Switch, Route } from "react-router-dom";
import RegistrationForm from "./containers/RegistrationForm";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={RegistrationForm} />
    </Switch>
  );
};

export default Routes;
