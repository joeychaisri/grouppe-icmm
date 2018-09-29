import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ReCaptcha } from "react-recaptcha-google";
import { Form, Input, Button, Checkbox , Divider } from "antd";
import DateInput from "../components/DateInput";

const FormItem = Form.Item;

class SeriesAuth extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    }
  }

  componentDidMount() {
    
  }

  onEnter(){
    this.props.history.push("/2");
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    return (
      // <Form >
        <div style= {{display : "flex", flexFlow: "column wrap" }} >
          <Input placeholder="Please enter invitation code" style= {{ width : "50vh" , margin: "0 auto" , marginTop : "15vh"}} />
          <Button style= {{ width : "35vh" , margin: "0 auto" , marginTop : "10vh" , marginBottom : "15vh"}} > ยืนยัน </Button>
          

        </div>


        


 
    );
  }
}

export default withRouter(Form.create()(SeriesAuth));
