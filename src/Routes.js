import React from "react";
import { Switch, Route } from "react-router-dom";
import RegistrationForm from "./containers/RegistrationForm";
import InformationForm from "./containers/InformationForm"
import Termandcondition from "./containers/TermandCondition"
import SeriesAuth from "./containers/SeriesAuth"
import WelcomePage from "./containers/WelcomPage"
import SearchByOrder from "./containers/searchByOrder"
import Summary from "./containers/Summary"

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/series" render={() => <SeriesAuth {...props} />} />
      <Route exact path="/register" render={() => <RegistrationForm {...props} />} />
      <Route exact path="/termandcondition" component={Termandcondition} />
      <Route exact path="/information" render={() => <InformationForm {...props} />} />
      <Route exact path="/search" render={() => <SearchByOrder {...props} />} />
      <Route exact path="/summary" render={() => <Summary {...props} />} />
      <Route exact path="/order/:id" render={() => <Summary {...props} />} />
    </Switch>
  );
};

export default Routes;
