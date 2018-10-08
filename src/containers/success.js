import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import icmmBanner from'./../static/icmm_banner.png';


class success extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }



  componentDidMount() {}


  render() {
    return (
      <div style={{ textAlign : "center" }}>
          <h4> ยินดีด้วย </h4>
          <br/>
          <h5> การชำระเงินของท่านเสร็จสมบูรณ์แล้ว โปรดตรวจสอบรายละเอียดได้ในอีเมลล์ที่ลงทะเบียนไว้ </h5>
          <br/>
          <br/>
        <img  src={icmmBanner} style={{ margin: "0 auto" , maxWidth : "100%" , height : "auto"}}/>
      </div>
    );
  }
}

export default withRouter(success);
