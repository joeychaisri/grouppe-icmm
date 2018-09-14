import React, { Component } from "react";
// import { Form, Input, Button, DatePicker } from "antd";
import { ReCaptcha } from "react-recaptcha-google";
import { List, InputItem, DatePicker, Button } from "antd-mobile";
import { createForm } from "rc-form";

// const FormItem = Form.Item;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false
  };

  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback(recaptchaToken) {
    this.setState("recaptchaResponse", recaptchaToken);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <List>
        <InputItem {...getFieldProps("surname")} type="text" placeholder="Dalton">
          Surname
        </InputItem>
        <InputItem
          {...getFieldProps("tel")}
          type="phone"
          placeholder="123 456 7890"
        >
          Tel
        </InputItem>
        <DatePicker
          {...getFieldProps("birthdate", {
            rules: [
              { required: true, message: "Must select a date" },
              { validator: this.validateDatePicker }
            ]
          })}
          title="Select Birth Date"
          mode="date"
        >
          <List.Item arrow="horizontal">Birth Date</List.Item>
        </DatePicker>
        <List.Item>
        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="normal"
            render="explicit"
            sitekey="6LfP_m8UAAAAAGnl6CDkJ1i5IQ3HjpOCcahw6KQW"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
        </List.Item>
        <List.Item>
          <Button type="primary" size="small" inline onClick={this.onSubmit}>Go!!</Button>
        </List.Item>
      </List>
    );
  }
}

export default createForm()(RegistrationForm);
