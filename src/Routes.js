import React from "react";
import { Switch, Route } from "react-router-dom";
import RegistrationForm from "./containers/RegistrationForm";
import InformationForm from "./containers/InformationForm"
import Termandcondition from "./containers/TermandCondition"
import SeriesAuth from "./containers/SeriesAuth"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={RegistrationForm} />
      <Route exact path="/2" component={InformationForm} />
      <Route exact path="/3" component={Termandcondition} />
      <Route exact path="/4" component={SeriesAuth} />
    </Switch>
  );
};

export default Routes;
