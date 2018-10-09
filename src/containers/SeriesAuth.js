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
        
        การรับสมัครช่องทางนี้ เป็นการรับสมัครแบบภายใน เฉพาะศิษย์เก่า ศิษย์ปัจจุบัน และครอบครัวเท่านั้น
        ผู้ที่ต้องการสมัคร กรุณาติดต่อตัวแทนรุ่นของท่าน เพื่อขอรับ Invitation Code 
        <span style={{color:"red"}}>โดย 1 Code สามารถใช้ได้เพียงครั้งเดียว สำหรับการสมัคร 1 ท่านเท่านั้น</span> 
        หากพบผู้ไม่ปฏิบัติตามกติกา ทีมงานขอสงวนสิทธิ์ในการยกเลิกการสมัคร และสงวนสิทธิ์ในการคืนเงินค่าสมัครในทุกกรณี
      </p>
      </div>
    );
  }
}

export default withRouter(SeriesAuth);
