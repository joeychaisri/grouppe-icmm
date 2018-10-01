import React from "react";
import { Switch, Route } from "react-router-dom";
import RegistrationForm from "./containers/RegistrationForm";
import InformationForm from "./containers/InformationForm"
import Termandcondition from "./containers/TermandCondition"
import SeriesAuth from "./containers/SeriesAuth"
import WelcomePage from "./containers/WelcomPage"
import searchByOrder from "./containers/searchByOrder"

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" render={() => <RegistrationForm {...props} />} />
      <Route exact path="/2" render={() => <InformationForm {...props} />} />
      <Route exact path="/3" component={Termandcondition} />
      <Route exact path="/4" component={SeriesAuth} />
      <Route exact path="/welcome" component={WelcomePage} />
      <Route exact path="/search" component={searchByOrder} />
    </Switch>
  );
};

export default Routes;
