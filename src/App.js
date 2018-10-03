import React, { Component } from "react";
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
    confirmData: [
      {
        name: "John",
        lastname: "Doe",
        email: "test@mail.com",
        phone: "0000000000",
        shirtSize: "F",
        type: "10km"
      },
      {
        name: "John2",
        lastname: "Doe2",
        email: "test@mail.com",
        phone: "0000000000",
        shirtSize: "F",
        type: "10km"
      },
      {
        name: "John2",
        lastname: "Doe2",
        email: "test@mail.com",
        phone: "0000000000",
        shirtSize: "F",
        type: "10km"
      }
    ]
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

  delData = (index) => {
    alert("trigger")
    this.setState({
      confirmData: this.state.confirmData.filter((item, idx) => {
        return idx !== index
      })
    })
  };

  editData = (index) => {
    alert("trigger")
    this.setState({
      data: this.state.confirmData[index]
    })
    window.location.href = 'http://www.localhost:3000/2';
  };

  render() {
    const isRegistered = (this.state.confirmData.length > 0)
    return (
      <BrowserRouter>
        <MainLayout showSider={false} confirmData={this.state.confirmData} delData={ (idx) => {this.delData(idx)} } editData={ (idx) => {this.editData(idx)} }>
          <Routes set={data => this.setData(data)} add={newData => this.addData(newData)} data={this.state.data} confirmData={this.state.confirmData} isRegistered={isRegistered} />
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default App;
