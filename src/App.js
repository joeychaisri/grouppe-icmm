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
      // {
      //   name: "Samza",
      //   lastname: "Montreewong",
      //   email: "test4@icmm.com",
      //   phone: "0881112345",
      //   gender: "MALE",
      //   dateOfBirth: "1990-03-22",
      //   emergencyContact: "Naeun",
      //   emergencyPhone: "0971520608",
      //   series: "89",
      //   type: "Fun Run 3KM",
      //   shirtSize: "M"
      // }
      // {
      //   name: "John",
      //   lastname: "Doe",
      //   email: "test@mail.com",
      //   phone: "0000000000",
      //   shirtSize: "F",
      //   type: "10km"
      // },
      // {
      //   name: "John2",
      //   lastname: "Doe2",
      //   email: "test@mail.com",
      //   phone: "0000000000",
      //   shirtSize: "F",
      //   type: "10km"
      // },
      // {
      //   name: "John2",
      //   lastname: "Doe2",
      //   email: "test@mail.com",
      //   phone: "0000000000",
      //   shirtSize: "F",
      //   type: "10km"
      // }
    ]
  };
  componentDidMount() {
    loadReCaptcha();
  }

  setData = (data = {}) => {
    this.setState({ data });
  };
  editData = (data = {}, index = 0) => {
    let confirmData = this.state.confirmData;
    const { day, month, year } = data.birthDate
    const updateData = {...data, dateOfBirth: `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`}
    confirmData[index] = updateData
    this.setState({ confirmData });
  };
  addData = (newData = {}) => {
    let confirmData = this.state.confirmData;
    const { day, month, year } = newData.birthDate
    confirmData.push({...newData, dateOfBirth: `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`});
    this.setState({ confirmData });
  };

  delData = index => {
    alert("trigger");
    this.setState({
      confirmData: this.state.confirmData.filter((item, idx) => {
        return idx !== index;
      })
    });
  };

  editData = index => {
    alert("trigger");
    this.setState({
      data: this.state.confirmData[index]
    });
    window.location.href = "http://www.localhost:3000/2";
  };

  render() {
    const isRegistered = this.state.confirmData.length > 0;
    return (
      <BrowserRouter>
        <MainLayout
          showSider={false}
          confirmData={this.state.confirmData}
          delData={idx => {
            this.delData(idx);
          }}
          editData={idx => {
            this.editData(idx);
          }}
        >
          <Routes
            set={data => this.setData(data)}
            add={newData => this.addData(newData)}
            data={this.state.data}
            confirmData={this.state.confirmData}
            isRegistered={isRegistered}
          />
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default App;
