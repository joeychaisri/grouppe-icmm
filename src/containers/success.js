import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import icmmBanner from'./../static/icmm_banner.png';
import prposter from'./../static/prposter.png';


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
          {/* <h4> ยินดีด้วย </h4> */}
          <br/>
          <h5> โปรดตรวจสอบรายละเอียดการชำระเงินอีกครั้ง จากการนำ order id ที่ได้รับในอีเมล มาตรวจสอบที่หน้าเว็บ</h5>
          <br/>
          <br/>
          <img  src={prposter} alt="iyaposter" style={{ margin: "0 auto" , maxWidth : "100%" , height : "auto"}}/>
          <br/>
          <br/>
          <br/>
          <p> งานครั้งนี้เป็นส่วนนึงของการเชื่อมโยงศิษย์เก่าทุกคนเข้าด้วยกัน และภายในยังมีกิจกรรมดีดีอีกมากมาย จะมีการประชาสัมพันธ์กิจกรรมอื่นๆให้พี่ๆต่อไปในอนาคตต่อไปแน่นอนค่ะ :)</p>
      </div>
    );
  }
}

export default withRouter(success);
