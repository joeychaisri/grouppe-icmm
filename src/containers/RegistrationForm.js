import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-google";
import { List, InputItem, DatePicker, Button, Card } from "antd-mobile";
import { createForm } from "rc-form";

class RegistrationForm extends Component {
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

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <Card>
        <Card.Body>
          <List>
            <InputItem
              {...getFieldProps("surname")}
              type="text"
              placeholder="Dalton"
            >
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
                ref={el => {
                  this.captchaDemo = el;
                }}
                size="normal"
                render="explicit"
                sitekey="6LfP_m8UAAAAAGnl6CDkJ1i5IQ3HjpOCcahw6KQW"
                onloadCallback={this.onLoadRecaptcha}
                verifyCallback={this.verifyCallback}
              />
            </List.Item>
            <List.Item>
              <Button
                type="primary"
                size="small"
                inline
                onClick={this.onSubmit}
              >
                Go!!
              </Button>
            </List.Item>
          </List>
        </Card.Body>
      </Card>
    );
  }
}

export default createForm()(RegistrationForm);
