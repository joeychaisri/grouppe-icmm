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
    this.props.history.push("/series");
  }

  pushToSearch() {
    this.props.history.push("/search");
  }

  render() {
    return (
      <div style={{ display: "flex", flexFlow: "column wrap" }}>
        <Button
          onClick={this.pushToSeries.bind(this)}
          style={{ width: "40%", margin: "0 auto", marginTop: "20vh" }}
        >
          ลงทะเบียน
        </Button>

        <Divider style={{ marginTop: "10vh" }}>หรือ</Divider>

        <Button
          onClick={this.pushToSearch.bind(this)}
          style={{ width: "30%", margin: "0 auto", marginTop: "10vh" }}
        >
          ค้นหาผ่าน Order ID
        </Button>
      </div>
    );
  }
}

export default withRouter(Form.create()(Welcomepage));
