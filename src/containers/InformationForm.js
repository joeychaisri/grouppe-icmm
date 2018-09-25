import React, { Component } from "react";
import { Form, Input, Button, Select } from "antd";
import DateInput from "../components/DateInput";

const FormItem = Form.Item;
const Option = Select.Option;

class InformationForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log(values);
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  checkBirthDate = (rule, value, callback) => {
    const { day = null, month = null, year = null } = value || {};
    if (!value || !day || !month || !year) {
      callback("กรุณาเลือกวันเกิด");
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
        <FormItem {...formItemLayout} label="ชื่อ">
          {getFieldDecorator("firstname", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกชื่อ"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="นามสกุล">
          {getFieldDecorator("surname", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกนามสกุล"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="วันเกิด">
          {getFieldDecorator("birthdate", {
            rules: [{ validator: this.checkBirthDate }]
          })(<DateInput />)}
        </FormItem>
        <FormItem {...formItemLayout} label="เพศ" hasFeedback>
          {getFieldDecorator("gender", {
            rules: [{ required: true, message: "กรุณาเลือกเพศ" }]
          })(
            <Select placeholder="เลือกเพศ">
              <Option value="male">ชาย</Option>
              <Option value="female">หญิง</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Tel.">
          {getFieldDecorator("tel", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกหมายเลขโทรศัพท์"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "อีเมลไม่ถูกต้อง"
              },
              {
                required: true,
                message: "กรุณากรอกอีเมล"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Emergency Contact">
          {getFieldDecorator("emergency_contact", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกผู้ติดต่อสำหรับกรณีฉุกเฉิน"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Emergency Tel.">
          {getFieldDecorator("emergency_tel", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกหมายเลขโทรศัพท์ฉุกเฉิน"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Shirt size" hasFeedback>
          {getFieldDecorator("shirt_size", {
            rules: [{ required: true, message: "กรุณาเลือกเพศ" }]
          })(
            <Select placeholder="เลือกขนาดเสื้อ">
              <Option value="xs">XS - 34"</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Running type" hasFeedback>
          {getFieldDecorator("running_type", {
            rules: [{ required: true, message: "กรุณาประเภทการวิ่ง" }]
          })(
            <Select placeholder="เลือกประเภทการวิ่ง">
              <Option value="3">Fun run - 3 km"</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Alumni" hasFeedback>
          {getFieldDecorator("alumni", {
            rules: [{ required: true, message: "กรุณาเลือก Alumni" }]
          })(
            <Select placeholder="เลือก Alumni">
              <Option value="alumni">ศิษย์เก่า</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="ชื่อบนบิบ">
          {getFieldDecorator("name_on_bill", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกชื่อบนบิบ"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Go!!
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(InformationForm);
