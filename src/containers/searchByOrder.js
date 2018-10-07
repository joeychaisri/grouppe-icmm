import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button } from "antd";

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
    this.setState({ invitationCode: e.target.value });
  }

  pushToSummary() {
    if (this.state.invitationCode != null) {
      this.props.history.push("/summary");
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
          style={{ width: "50vh", margin: "0 auto", marginTop: "15vh" }}
        />
        <Button
          onClick={this.pushToSummary}
          style={{
            width: "35vh",
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
