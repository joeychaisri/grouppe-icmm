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
            <p>Introduction</p>
            <p>Grouppe (&ldquo;Organizer&rdquo;) and www.iyaforum.com (&ldquo;Website&rdquo;) understands any information that identifies the customer to whom such information pertains is of utmost importance. Organizer, therefore, has established the following privacy policy for its handling and protection of personal information.</p>
            <p>Personal Information Collection and Usage</p>
            <p>When you use, services provided on www.iyaforum.com you will be asked to provide personal information such as name, e-mail, telephone number, Bank account number or credit card details, etc. and including, but not limited to, users' behavior. Organizer generally collect this information for the following purposes:</p>
            <ul>
            <li>To facilitate your use of the Services (as defined in the Terms of Use) and/or access to the website;</li>
            <li>To facilitate your use of the Services by communicating via phone call, email or text message on the usage of the Service of the Website or any activities from another third-parties&rsquo; website to acknowledge or answer the questions.</li>
            <li>To deliver the sales promotion to the target market from Personal Information Collection and Non-Personal Information Collection through the platform, from the time to use the platform and product categories or any of benefits from the Website.</li>
            <li>To deliver the Sales Offer to the target market from Personal Information Collection.</li>
            </ul>
            <p>Disclosure of Personal Information</p>
            <ul>
            <li>The Organizer will not disclose your personal identification information to any third parties without your prior consent.</li>
            <li>The Organizer may share only the personal information that is relevant to the job or the event for the Manager of the event.</li>
            <li>The Organizer may share our third-party service providers, including but not limited to those who provide the credit card processor, payment, or the e-mail service provider etc.</li>
            <li>The Organizer will not reveal your personal information to any third party unless required under law or by any government enforcement agency or to protect the rights of property and the safety of employees, agents, and other web site users etc.</li>
            <li>In case of transfer of business mergers and acquisitions, asset sales or loans. The Organizer may be required to disclose some information to those involved in such transactions accordingly.</li>
            </ul>
            <p>Modification to Privacy and Disclaimer</p>
            <p>Organizer reserves the right to change this Privacy Policy and disclaimer at any time. The content presented on this page is considered the latest version. Should any modification to our Privacy Policy occur, we will post the updated version on the page so that you are always aware of how we safeguard your personal data.</p>
            <p>Security</p>
            <p>Organizer has implemented the appropriate technical, physical security management and loss prevention using disproportionate access the data without permission to disclosure or adjustment change personal information.</p>
            <p>However, The Organizer reserves the liability protection of such security as there is not a single system or public network that can guarantee to be completely and thoroughly secured.</p>
            <p>&nbsp;</p>
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
