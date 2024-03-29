import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ReCaptcha } from "react-recaptcha-google";
import { Form, Input, Button } from "antd";
import DateInput from "../components/DateInput";

const FormItem = Form.Item;

class RegistrationForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.set(values);
        this.props.history.push("/2");
      }
    });
  };
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {};
  }

  componentDidMount() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback(recaptchaToken) {
    this.setState({ recaptchaToken });
  }
  checkBirthDate = (rule, value, callback) => {
    const { day = null, month = null, year = null } = value || {};
    if (!value || !day || !month || !year) {
      callback("Please select your birth date");
    }
    callback();
    return;
  };
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
      <Form onSubmit={this.handleSubmit}>
        {this.props.isRegistered && (
          <FormItem {...tailFormItemLayout} style={{ margin: 0}}>
            <p style={{ margin: 0}}>สำหรับกรอกเพื่อเพิ่มเพื่อน</p>
          </FormItem>
        )}
        <FormItem {...formItemLayout} label="ชื่อ">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your surname!"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Tel">
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
                message: "Please input your telephone no.!"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Birth date">
          {getFieldDecorator("dateOfBirth", {
            rules: [{ validator: this.checkBirthDate }]
          })(<DateInput />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <div style={{ overflow: "hidden" }}>
            <ReCaptcha
              ref={el => {
                this.captchaDemo = el;
              }}
              size="normal"
              render="explicit"
              sitekey="6LfP_m8UAAAAAGnl6CDkJ1i5IQ3HjpOCcahw6KQW"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
            />
          </div>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={this.state.recaptchaToken ? false : true}
          >
            Go!!
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default withRouter(Form.create()(RegistrationForm));
