import React from "react";
import { Switch, Route } from "react-router-dom";
import RegistrationForm from "./containers/RegistrationForm";
import InformationForm from "./containers/InformationForm";

const Routes = props => {
  console.log(props);
  return (
    <Switch>
      <Route exact path="/" render={() => <RegistrationForm {...props} />} />
      <Route exact path="/2" render={() => <InformationForm {...props} />} />
    </Switch>
  );
};

export default Routes;
