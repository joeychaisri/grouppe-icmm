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

  clearData = () => {
    this.setState({
      confirmData: []
    })
  }

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
            edit={ obj => this.editData(obj)}
            clear={this.clearData}
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
