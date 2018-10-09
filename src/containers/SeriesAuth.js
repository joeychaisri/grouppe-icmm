import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Input, Button } from "antd";
import API from "../api";

class SeriesAuth extends Component {
  constructor(props, context) {
    super(props, context);
    this.pushToRegister = this.pushToRegister.bind(this);
    this.state = {
      invitationCode: null
    };
  }

  pushToRegister() {
    if (this.state.invitationCode != null) {
      API.validateInvitation(this.state.invitationCode)
        .then(res => {
          const { status } = res.data;
          if (status) {
            this.props.set({ invitationCode: this.state.invitationCode });
            this.props.history.push("/register");
          } else {
            alert("Invitation Code ของคุณไม่ถูกต้อง");
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert("โปรดใส่ Invitation Code ของคุณ");
    }
  }

  componentDidMount() {}

  handleChange(e) {
    this.setState({ invitationCode: e.target.value });
  }

  render() {
    return (
      <div style={{ display: "flex", flexFlow: "column wrap" }}>
     
        <Input
          onChange={this.handleChange.bind(this)}
          placeholder="Please enter invitation code"
          style={{
            width: "80vw",
            maxWidth: "300px",
            margin: "0 auto",
            marginTop: "10vh"
          }}
        />
        <Button
          onClick={this.pushToRegister}
          style={{
            width: "80vw",
            maxWidth: "300px",
            margin: "0 auto",
            marginTop: "10vh",
            marginBottom: "15vh"
          }}
        >
          {" "}
          ยืนยัน{" "}
        </Button>
        <p  style={{    fontSize: "11px", paddingTop: "7vh"}} >
      *  การสมัครของแต่ละรุ่นจะถูกกำหนดโดยโค้วต้าของรุ่น Code ที่ได้รับไปนั้น จะใช้ได้ <span style={{color:"red"}}>1 Code ต่อ 1 ผู้สมัคร</span> จากนั้น Code จะถูก ตัดออกจากจำนวนโค้วต้าของแต่ละรุ่น 
      และหากการสมัครถูกใช้โดยบุคคลภายนอกที่ไม่ได้เป็นส่วนหนึ่งของศิษย์ก่า วิศวฯ จุฬาฯ และครอบครัว จะมีการตัดสิทธิการสมัคร <span style={{color:"red"}}>โดยไม่มีนโยบายการคืนเงินค่าสมัครใดๆ </span>
      </p>
      </div>
    );
  }
}

export default withRouter(SeriesAuth);
