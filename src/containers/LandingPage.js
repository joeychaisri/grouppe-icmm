import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {Button } from "antd";
import prposter from'./../static/prposter.png';
import sponsor from'./../static/sponsor.jpg';



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

          <img  src={prposter} width="100%"/>
          <img  src={sponsor} width="100%" style={{marginTop:"10px"}} />

  
          <br/>
          <br/>
          <Button onClick={this.pushToWelcome}> เข้าสู่เว็บไซต์ </Button>
          <br/>
          <br/>
      </div>
    );
  }
}

export default withRouter(LandingPage);
