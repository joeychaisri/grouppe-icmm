import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button ,Divider} from "antd";

class Welcomepage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  componentDidMount() {}



  render() {
    return (
      <div style={{ display: "flex", flexFlow: "column wrap"}}>
                <Button style={{   width :"40%" ,margin:"0 auto",marginTop: "20vh"}} >Go Light</Button>

                <Divider style={{ marginTop: "10vh"}}>With Text</Divider>

                <Button style={{   width :"30%" ,margin:"0 auto" , marginTop: "10vh"}}>Go Dark</Button>
      </div>
    );
  }
}

export default withRouter(Form.create()(Welcomepage));
