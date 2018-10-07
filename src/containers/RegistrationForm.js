import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ReCaptcha } from "react-recaptcha-google";
import { Form, Input, Button } from "antd";
import DateInput from "../components/DateInput";
import API from "../api/index";

const FormItem = Form.Item;

class RegistrationForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let { day, month, year } = values.birthDate;
        let data = {
          ...values,
          dateOfBirth: `${year}-${("0" + month).slice(-2)}-${("0" + day).slice(
            -2
          )}`
        };
        delete data.birthDate;
        API.getApplicant(data)
          .then(res => {
            const date = res.data.dateOfBirth.split("-");
            let birthDate = { day: date[2], month: date[1], year: date[0] };
            this.props.set({ ...res.data, birthDate });
          })
          .catch(err => {
            this.props.set(values);
          });
        this.props.confirmData.length > 0
          ? this.props.history.push("/information")
          : this.props.history.push("/termandcondition");
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
        sm: { span: 8 },
        md: { span: 8 },
        lg: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 12 },
        lg: { span: 12 }
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
      <div>
        <p style={{ textAlign: "center", margin: "10" }}>
          โปรดกรอกข้อมูลด้านล่าง เพื่อทำการค้นหาข้อมูลในระบบ
        </p>
        <Form onSubmit={this.handleSubmit}>
          {/* <FormItem {...tailFormItemLayout} style={{ margin: 0}}>
            <p style={{ margin: 20}}>โปรดกรอกข้อมูลด้านล่าง เพื่อทำการค้นหาข้อมูลในระบบ</p>
          </FormItem> */}

          {/* {this.props.isRegistered && (
          <FormItem {...tailFormItemLayout} style={{ margin: 0}}>
            <p style={{ margin: 0}}>กรอกข้อมูลเพื่อเพิ่มผู้สมัคร</p>
          </FormItem>
        )} */}
          {/* <Alert
            style= {{width : "50%" , textAlign : "center" , margin : "0 auto" , marginBottom : "2%"}}
            message="ในกรณีที่ทำการสมัครให้บุคคลอื่นโปรดใช้เบอร์โทรศัพท์ที่ไม่ซ้ำกัน"
            type="warning"
          /> */}

          
          <FormItem {...formItemLayout} label="ชื่อ / Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอกชื่อไทย หรือ ภาษาอังกฤษ ไม่ต้องใส่นามสกุล"
                }
              ]
            })(<Input placeholder={"ปฐมพงศ์"} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Tel">
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "โปรดใส่เบอร์ติดต่อของคุณ"
                }
              ]
            })(<Input placeholder={"0869999999"} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="วันเกิด">
            {getFieldDecorator("birthDate", {
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
                sitekey="6LdLQXMUAAAAAJmSKLvWmTo0Tzp7h7AxP-Bamhsn"
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
              ยืนยัน
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default withRouter(Form.create()(RegistrationForm));
