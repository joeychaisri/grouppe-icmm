import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {Button } from "antd";



class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.pushToWelcome = this.pushToWelcome.bind(this);
    this.state = {

    };
  }
  pushToWelcome(){
    this.props.history.push("/home")
  }

  render() {
    return (
      <div style={{ textAlign : "center" }}>
         <br/>   
          <br/>
          <br/>
          <br/>
          <br/>
          <h1> IYA PR poster </h1>
          <br/>   
          <br/>
          <br/>
          <br/>
          <br/>
          <Button onClick={this.pushToWelcome}> เข้าสู่เว็บไซต์ </Button>
      </div>
    );
  }
}

export default withRouter(LandingPage);
