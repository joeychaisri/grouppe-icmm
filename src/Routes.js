import React from "react";
import { Switch, Route } from "react-router-dom";
import RegistrationForm from "./containers/RegistrationForm";
import InformationForm from "./containers/InformationForm"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={RegistrationForm} />
      <Route exact path="/2" component={InformationForm} />
    </Switch>
  );
};

export default Routes;
