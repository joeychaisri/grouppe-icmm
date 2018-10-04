import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button } from "antd";

class SeriesAuth extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      invitationCode : null
    };
  }

  pushToRegister() {
    if(this.state.invitationCode != null){
      this.props.history.push("/register");
    }else{
      alert("Please enter your invitation code")
    }
    
};

  componentDidMount() {}

  handleChange(e) {
    this.setState({ invitationCode : e.target.value })
  }

  render() {
    return (
      <div style={{ display: "flex", flexFlow: "column wrap" }}>
        <Input onChange={this.handleChange.bind(this)}
          placeholder="Please enter invitation code"
          style={{ width: "50vh", margin: "0 auto", marginTop: "15vh" }}
        />
        <Button onClick={this.pushToRegister.bind(this)}
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
