import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Routes from "./Routes";
import { loadReCaptcha } from "react-recaptcha-google";
import momemt from "moment";

class App extends Component {
  state = {
    data: {},
    confirmData: [
      // {
      //   "invitationCode" : "87icmm2019kuh",
      //     "name": "ปฐมพงศ์",
      //     "lastname": "ไชย์ศรี",
      //     "email": "asdada@gmail.com",
      //     "phone": "0881112345",
      //     "gender": "MALE",
      //     "dateOfBirth": "1990-03-30",
      //     "emergencyContact": "ถุงแป้ง",
      //     "emergencyPhone": "0971520608",
      //     "series": "89",
      //     "type": "Fun Run 3KM",
      //     "bibName": "test",
      //     "isAlumni": true,
      //     "relative": "someone",
      //     "isRunning": true,
      //     "bestTime": "10:42",
      //     "changeAnswer": "คำถามต้องการเปลี่ยนอะไร",
      //     "shirtSize": "M"
      // }, {
      //   "invitationCode" : "87icmm2019kuh",
      //     "name": "ปฐมพงศ์",
      //     "lastname": "ไชย์ศรี",
      //     "email": "asdaasdadasdasda@gmail.com",
      //     "phone": "0881112345",
      //     "gender": "MALE",
      //     "dateOfBirth": "1990-03-30",
      //     "emergencyContact": "ถุงแป้ง",
      //     "emergencyPhone": "0971520608",
      //     "series": "89",
      //     "type": "Fun Run 3KM",
      //     "bibName": "test",
      //     "isAlumni": true,
      //     "relative": "someone",
      //     "isRunning": true,
      //     "bestTime": "10:42",
      //     "changeAnswer": "คำถามต้องการเปลี่ยนอะไร",
      //     "shirtSize": "M"
      // }
      // , {
      //   "invitationCode" : "87icmm2019kuh",
      //     "name": "ปฐมพงศ์",
      //     "lastname": "ไชย์ศรี",
      //     "email": "asdaasdadasdasda@gmail.com",
      //     "phone": "0881112345",
      //     "gender": "MALE",
      //     "dateOfBirth": "1990-03-30",
      //     "emergencyContact": "ถุงแป้ง",
      //     "emergencyPhone": "0971520608",
      //     "series": "89",
      //     "type": "Fun Run 3KM",
      //     "bibName": "test",
      //     "isAlumni": true,
      //     "relative": "someone",
      //     "isRunning": true,
      //     "bestTime": "10:42",
      //     "changeAnswer": "คำถามต้องการเปลี่ยนอะไร",
      //     "shirtSize": "M"
      // }
    ]
  };
  componentDidMount() {
    loadReCaptcha();
  }

  setData = (data = {}) => {
    // data.hasOwnProperty("isRunning") &&
    //   (data.isRunning = data.isRunning ? "true" : "false");
    // data.hasOwnProperty("isAlumni") &&
    //   (data.isRunning = data.isAlumni ? "true" : "false");
    console.log('set:', data)
    this.setState({
      data: {
        ...this.state.data,
        ...data
      }
    });
  };
  editData = ({data = {}, index = 0}) => {
    let confirmData = this.state.confirmData;
    const { day, month, year } = data.birthDate;
    const updateData = {
      ...confirmData[index],
      ...data,
      dateOfBirth: `${year}-${("0" + month).slice(-2)}-${("0" + day).slice(
        -2
      )}`,
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
      ...this.state.data,
      ...newData,
      dateOfBirth: `${year}-${("0" + month).slice(-2)}-${("0" + day).slice(
        -2
      )}`,
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

  setOrderData = ({ status, payment, applicants }) => {
    this.setState({
      confirmData: applicants !== null ? applicants : [],
      orderStatus: status,
      payment
      })
  }

  render() {
    const isRegistered = this.state.confirmData.length > 0;
    return (
      <BrowserRouter>
        <MainLayout
          showSider={true}
          confirmData={this.state.confirmData}
          delData={idx => {
            this.delData(idx);
          }}
          set={data => this.setData(data)}
        >
          <Routes
            set={data => this.setData(data)}
            add={newData => this.addData(newData)}
            edit={ obj => this.editData(obj) }
            data={this.state.data}
            confirmData={this.state.confirmData}
            isRegistered={isRegistered}
            setOrderData = {data => this.setOrderData(data)}
            payment={this.state.payment}
            orderStatus={this.state.orderStatus}

          />
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default App;
