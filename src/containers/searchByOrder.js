import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button } from "antd";
import API from "../api";

class searchByOrder extends Component {
  constructor(props, context) {
    super(props, context);
    this.pushToSummary = this.pushToSummary.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      orderID: null
    };
  }

  componentDidMount() {}

  handleChange(e) {
    this.setState({ orderID: e.target.value });
  }

  pushToSummary() {
    if (this.state.orderID !== null) {
      API.getOrderById(this.state.orderID)
        .then(res => {
          const { orderID } = res.data;
          this.props.setOrderData(res.data);
          this.props.history.push(`/order/${orderID}`);
        })
        .catch(err => {
          alert("Order ID ของคุณไม่ถูกต้อง โปรดตรวจสอบได้ในอีเมลล์ที่ทำการสมัคร");
          console.log(err);
        });
    } else {
      alert("Please enter your order ID");
    }
  }

  render() {
    return (
      <div style={{ display: "flex", flexFlow: "column wrap" }}>
        <Input
          onChange={this.handleChange}
          placeholder="Please enter your orderID"
          style={{
            width: "80vw",
            maxWidth: "300px",
            margin: "0 auto",
            marginTop: "15vh"
          }}
        />
        <Button
          onClick={this.pushToSummary}
          style={{
            width: "80vw",
            maxWidth: "300px",
            margin: "0 auto",
            marginTop: "10vh",
            marginBottom: "15vh"
          }}
        >
          {" "}
          ยืนยัน{" "}
        </Button>
      </div>
    );
  }
}

export default withRouter(Form.create()(searchByOrder));
