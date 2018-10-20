import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Checkbox , Divider } from "antd";


class Termandcondition extends Component {

  constructor(props, context) {
    super(props, context);
    this.pushToInformation = this.pushToInformation.bind(this);
    this.onTickCheckbox = this.onTickCheckbox.bind(this);
    this.state = {
      acceptCondition : false

    }
  }

  onTickCheckbox(){
    this.setState({ acceptCondition : !this.state.acceptCondition });
  }

  pushToInformation() {
    this.props.history.push("/information");
};

  render() {

    return (
      // <Form >
        <div >
        <div style={{ maxHeight : "60vh" , overflow : "scroll" , marginLeft: "2vh" , marginRight: "2vh" }}>
        <p style={{textAlign: "center"}}><strong>Privacy Policy&nbsp;</strong></p>
            <p>ด้วยสมาคมนิสิตเก่าวิศวกรรมศาสตร์แห่งจุฬาลงกรณ์มหาวิทยาลัย เห็นว่าปัจจุบันการดำเนินงานกิจกรรมต่างๆของสมาคมฯ มีนิสิตเก่ารุ่นเยาว์เข้าไปมีบทบาทและเข้าร่วมกิจกรรมค่อนข้างน้อย อย่างไรก็ดี ในช่วงหลัง นิสิตเก่ารุ่นเยาว์เริ่มมีบทบาทมากขึ้น ผ่านกิจกรรมใหม่ๆ ซึ่งเข้ากับการดำเนินชีวิตของนิสิตเก่ารุ่นเหล่านั้น อาทิ งาน Intania Chula Mini Marathon <span>หรือ </span>Intania Open Innovation Club (IOIC) <span>คณะกรรมการสมาคมนิสิตเก่าวิศวกรรมศาสตร์แห่งจุฬาลงกรณ์มหาวิทยาลัย และคณะกรรมการฝ่ายสมาชิกสัมพันธ์จึงมีความเห็นร่วมกันให้มีการรวมกลุ่มนิสิตเก่าคณะวิศวกรรมศาสตร์แห่งจุฬาลงกรณ์มหาวิทยาลัยรุ่นเยาว์ หรือ </span>Intania Young Alumni <span>ขึ้นในปี </span>2560<span> เพื่อเป็นการขยายกิจกรรมต่างๆของสมาคมให้มีความหลากหลาย เข้าถึงนิสิตเก่าในทุกกลุ่มอายุ เปิดโอกาสให้นิสิตเก่ารุ่นเยาว์ได้มีโอกาสคิดและเสนอกิจกรรมใหม่ๆเพื่อตอบโจทย์สังคมในยุคปัจจุบัน เข้าถึงยุคสมัย มากยิ่งขึ้น</span></p>
            <p>โดยในปี 2561 <span>นี้ </span>Intania Young Alumni <span>ได้มีกำหนดจัดกิจกรรม </span>Intania Young Alumni Forum 2561 <span>ขึ้นในวันเสาร์ที่ </span>24 <span>พฤศจิกายน </span>2561 <span>เวลา </span>13:30 <span>น. &ndash; </span>21:00 <span>น. หรือ กิจกรรมการสร้างเครือข่าย (</span>Networking) <span>สไตล์ </span>IYA <span>มีวัตถุประสงค์ เพื่อตอบโจทย์ด้าน &ldquo;</span>Gather&rdquo; <span>และ &ldquo;</span>Branding&rdquo; <span>ซึ่งเป็นหนึ่งในวัตถุประสงค์ของกลุ่ม โดยในปีนี้ มีวัตถุประสงค์ของการจัดงานเน้นไปเรื่อง การเปลี่ยนแปลงเพื่ออนาคต (</span>Change)</p>
            <p>Personal Information Collection and Usage</p>
            <p>When you use, services provided on www.iyaforum.com you will be asked to provide personal information such as name, e-mail, telephone number, Bank account number or credit card details, etc. and including, but not limited to, users' behavior. Organizer generally collect this information for the following purposes:</p>
            <ul>
            <li>To facilitate your use of the Services (as defined in the Terms of Use) and/or access to the website;</li>
            <li>To facilitate your use of the Services by communicating via phone call, email or text message on the usage of the Service of the Website or any activities from another third-parties&rsquo; website to acknowledge or answer the questions.</li>
            <li>To deliver the sales promotion to the target market from Personal Information Collection and Non-Personal Information Collection through the platform, from the time to use the platform and product categories or any of benefits from the Website.</li>
            <li>To deliver the Sales Offer to the target market from Personal Information Collection</li>
            </ul>
        </div>

        <Divider style= {{ marginTop : "5vh" }} />
        <div style= {{display : "flex", flexFlow: "column wrap" }} >
        <Checkbox style={{ margin : "15px auto"  }} onClick={this.onTickCheckbox} > คุณได้ยอมรับเงื่อนไขด้านบนทั้งหมดแล้ว</Checkbox>
        <Button  
        style= {{ width : "50vh" , margin: "0 auto" , marginTop : "2vh"}} 
        disabled={this.state.acceptCondition ? false : true} 
        type="primary"
        onClick={this.pushToInformation}> ตกลง </Button>
        </div>


        </div>
        


 
    );
  }
}

export default withRouter(Form.create()(Termandcondition));
