import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Routes from "./Routes";
import { loadReCaptcha } from "react-recaptcha-google";
import momemt from "moment";
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
      //   {
      //             "name": "ปฐมพงศ์",
      //             "lastname": "ไชย์ศรี",
      //             "email": "test@icmm.com",
      //             "phone": "0881112345",
      //             "gender": "MALE",
      //             "dateOfBirth": "1990-03-30",
      //             "emergencyContact": "ถุงแป้ง",
      //             "emergencyPhone": "0971520608",
      //             "series": "89",
      //             "type": "Fun Run 3KM",
      //             "bibName": "test",
      //             "isAlumni": false,
      //             "relative": "someone",
      //             "isRunning": true,
      //             "bestTime": "10:42",
      //             "changeAnswer": "คำถามต้องการเปลี่ยนอะไร",
      //             "shirtSize": "M"
      // }
    ]
  };
  componentDidMount() {
    loadReCaptcha();
  }

  setData = (data = {}) => {
    data.hasOwnProperty("isRunning") &&
      (data.isRunning = data.isRunning ? "true" : "false");
    data.hasOwnProperty("isAlumni") &&
      (data.isRunning = data.isAlumni ? "true" : "false");
    this.setState({
      data: {
        ...this.state.data,
        ...data
      }
    });
  };
  editData = (data = {}, index = 0) => {
    let confirmData = this.state.confirmData;
    const { day, month, year } = data.birthDate;
    const updateData = {
      ...data,
      dateOfBirth: `${year}-${("0" + month).slice(-2)}-${("0" + day).slice(
        -2
      )}`,
      isAlumni: data.isAlumni === "true",
      isRunning: data.isRunning === "true"
    };
    confirmData[index] = updateData;
    this.setState({ confirmData });
  };
  addData = (newData = {}) => {
    let confirmData = this.state.confirmData;
    const { day, month, year } = newData.birthDate;
    newData.hasOwnProperty("bestTime") &&
      (newData.bestTime = momemt(newData.bestTime).format("HH:mm"));
    confirmData.push({
      ...newData,
      dateOfBirth: `${year}-${("0" + month).slice(-2)}-${("0" + day).slice(
        -2
      )}`,
      isAlumni: newData.isAlumni === "true",
      isRunning: newData.isRunning === "true"
    });
    this.setState({ confirmData });
  };

  delData = index => {
    this.setState({
      confirmData: this.state.confirmData.filter((item, idx) => {
        return idx !== index;
      })
    });
  };

  setOrderData = (data = {}) => {
    this.setState({
      confirmData: data
      })
  }

  // editData = index => {
  //   this.setState({
  //     data: this.state.confirmData[index]
  //   });
  //   window.location.href = "http://www.localhost:3000/2";
  // };

  render() {
    const isRegistered = this.state.confirmData.length > 0;
    console.log(this.state.confirmData);
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
            setOrderData = {data => this.setOrderData(data)}
          />
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default App;
