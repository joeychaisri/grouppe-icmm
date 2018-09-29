import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button } from "antd";

class SeriesAuth extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  componentDidMount() {}

  onEnter() {
    this.props.history.push("/2");
  }

  render() {
    return (
      <div style={{ display: "flex", flexFlow: "column wrap" }}>
        <Input
          placeholder="Please enter invitation code"
          style={{ width: "50vh", margin: "0 auto", marginTop: "15vh" }}
        />
        <Button
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

export default withRouter(Form.create()(SeriesAuth));
