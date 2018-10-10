import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Divider } from "antd";

class Welcomepage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {}

  pushToSeries() {
    this.props.history.push("/termandcondition");
  }

  pushToSearch() {
    this.props.history.push("/search");
  }

  render() {
    return (
      <div style={{ display: "flex", flexFlow: "column wrap" }}>
        <Button
          onClick={this.pushToSeries.bind(this)}
          style={{ width: "80%", maxWidth: "300px", margin: "0 auto", marginTop: "20vh" }}
        >
          ลงทะเบียน
        </Button>

        <Divider style={{ marginTop: "10vh" }}>หรือ</Divider>

        <Button
          onClick={this.pushToSearch.bind(this)}
          style={{ width: "80%", maxWidth: "300px", margin: "0 auto", marginTop: "10vh" }}
        >
         ค้นหาข้อมูลด้วย Order ID / ชำระเงิน
        </Button>
      </div>
    );
  }
}

export default withRouter(Form.create()(Welcomepage));
