import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Routes from "./Routes";
import { loadReCaptcha } from "react-recaptcha-google";
class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
            <Routes />
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default connect()(App);
