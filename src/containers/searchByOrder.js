
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button ,Divider} from "antd";

class searchByOrder extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  componentDidMount() {}



  render() {
    return (
        <div style={{ display: "flex", flexFlow: "column wrap" }}>
        <Input
          placeholder="Please enter your orderID"
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

export default withRouter(Form.create()(searchByOrder));
