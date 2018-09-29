import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Routes from "./Routes";
import { loadReCaptcha } from "react-recaptcha-google";
class App extends Component {
  state = {
    data: {},
      // {
      //   firstname: "John",
      //   surname: "Doe",
      //   email: "test@mail.com",
      //   tel: "0000000000",
      //   shirt_size: "F",
      //   type: "10km"
      // }
    confirmData: []
  };
  componentDidMount() {
    loadReCaptcha();
  }

  setData = (data = {}) => {
    this.setState({ data });
  };
  addData = (newData = {}) => {
    const confirmData = this.state.confirmData
    confirmData.push(newData)
    this.setState({ confirmData })
  }
  render() {
    const isRegistered =  (this.state.confirmData.length > 0)
    return (
      <BrowserRouter>
        <MainLayout confirmData={this.state.confirmData}>
          <Routes set={data => this.setData(data)} add={newData => this.addData(newData)} data={this.state.data} isRegistered={isRegistered}/>
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default connect()(App);
