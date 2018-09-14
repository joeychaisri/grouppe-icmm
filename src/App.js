import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Routes from "./Routes";
import { LocaleProvider } from "antd-mobile";
import { loadReCaptcha } from "react-recaptcha-google";
import enUS from "antd-mobile/lib/locale-provider/en_US";
class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <LocaleProvider locale={enUS}>
            <Routes />
          </LocaleProvider>
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default connect()(App);
