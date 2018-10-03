import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";
import DateInput from "../components/DateInput";
import axios from 'axios';

const FormItem = Form.Item;
const Option = Select.Option;

class InformationForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.add(values);
        this.props.history.push("/");
      }
    });
  };

  componentDidMount() {
    this.props.form.setFieldsValue(this.props.data);
  }

  checkBirthDate = (rule, value, callback) => {
    const { day = null, month = null, year = null } = value || {};
    if (!value || !day || !month || !year) {
      callback("กรุณาเลือกวันเกิด");
    }
    callback();
    return;
  };

  handleSeriesNoChange = (value) => {
    this.props.form.setFieldsValue({ year: Number(value) - 41 > 0 ? Number(value) - 41 : 0 })
  }
  handleYearChange = (value) => {
    this.props.form.setFieldsValue({ year: Number(value) + 41 })
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

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
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกชื่อ"
              }
            ]
          })(<Input style={{ width: "50%"}}/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="นามสกุล">
          {getFieldDecorator("lastname", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกนามสกุล"
              }
            ]
          })(<Input style={{ width: "50%"}}/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="วันเกิด">
          {getFieldDecorator("dateOfBirth", {
            rules: [{ validator: this.checkBirthDate }]
          })(<DateInput />)}
        </FormItem>
        <FormItem {...formItemLayout} label="เพศ" hasFeedback>
          {getFieldDecorator("gender", {
            rules: [{ required: true, message: "กรุณาเลือกเพศ" }]
          })(
            <Select style={{ width: "50%"}} placeholder="เลือกเพศ">
              <Option value="male">ชาย</Option>
              <Option value="female">หญิง</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Tel.">
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกหมายเลขโทรศัพท์"
              }
            ]
          })(<Input style={{ width: "50%"}} />)}
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
          })(<Input style={{ width: "50%"}}/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="Emergency Contact">
          {getFieldDecorator("emergencyContact", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกผู้ติดต่อสำหรับกรณีฉุกเฉิน"
              }
            ]
          })(<Input style={{ width: "50%"}}/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="Emergency Tel.">
          {getFieldDecorator("emergencyPhone", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกหมายเลขโทรศัพท์ฉุกเฉิน"
              }
            ]
          })(<Input style={{ width: "50%"}}/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="Shirt size" hasFeedback>
          {getFieldDecorator("shirtSize", {
            rules: [{ required: true, message: "กรุณาเลือกเพศ" }]
          })(
            <Select style={{ width: "50%"}} placeholder="เลือกขนาดเสื้อ">
              <Option value="xs">XS - 34"</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Running type" hasFeedback>
          {getFieldDecorator("type", {
            rules: [{ required: true, message: "กรุณาประเภทการวิ่ง" }]
          })(
            <Select style={{ width: "50%"}} placeholder="เลือกประเภทการวิ่ง">
              <Option value="3">Fun run - 3 km"</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Alumni">
          {getFieldDecorator("alunmi", {
            rules: [
              {
                required: true,
                message: "กรุณาระบุการเป็นนิสิตเก่า"
              }
            ]
          })(
            <Select style={{ width: "50%"}}>
              <Option value="true">นิสิตเก่า</Option>
              <Option value="false">ไม่เป็นนิสิตเก่า</Option>
            </Select>
          )}
        </FormItem>
        {getFieldValue("alunmi") === "true" && (
          <FormItem {...formItemLayout} label="หมายเลขรุ่น">
            {getFieldDecorator("seriesNo", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอกหมายเลขรุ่น"
                }
              ]
            })(<Input style={{ width: "50%"}} onBlur={e => this.handleSeriesNoChange(e.target.value)}/>)}
          </FormItem>
        )}
        {getFieldValue("alunmi") === "true" && (
          <FormItem {...formItemLayout} label="วศ">
            {getFieldDecorator("year", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอก วศ"
                }
              ]
            })(<Input style={{ width: "50%"}} onBlur={e => this.handleYearChange(e.target.value)} />)}
          </FormItem>
        )}
        {getFieldValue("alunmi") === "false" && (
          <FormItem {...formItemLayout} label="ความเกี่ยวข้อง">
            {getFieldDecorator("relationship", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอกความเกี่ยวข้อง"
                }
              ]
            })(<Input style={{ width: "50%"}} />)}
          </FormItem>
        )}
        {getFieldValue("alunmi") === "false" && (
          <FormItem {...formItemLayout} label="ชื่อ-สกุล ผู้ลงทะเบียนให้">
            {getFieldDecorator("referalName", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอกชื่อ-สกุล ผู้ลงทะเบียนให้"
                }
              ]
            })(<Input style={{ width: "50%"}} />)}
          </FormItem>
        )}
        <FormItem {...formItemLayout} label="ชื่อบนบิบ">
          {getFieldDecorator("nameOnBib", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกชื่อบนบิบ"
              }
            ]
          })(<Input style={{ width: "50%"}} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="คุณเคยวิ่งระยะ 10 กม มาก่อนหรือไม่">
          {getFieldDecorator("didYouEverRun10KMBefore", {
            rules: [
              {
                required: true,
                message: "คุณเคยวิ่งระยะ 10 กม มาก่อนหรือไม่"
              }
            ]
          })(
            <Select style={{ width: "50%"}}>
              <Option value="true">เคย</Option>
              <Option value="false">ไม่เคย</Option>
            </Select>
          )}
        </FormItem>
        {getFieldValue("didYouEverRun10KMBefore") === "true" && (
          <FormItem {...formItemLayout} label="เวลาส่วนตัวที่ดีที่สุดคือเท่าไหร่">
            {getFieldDecorator("personalBestTime", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอกเวลาส่วนตัวที่ดีที่สุดคือเท่าไหร่"
                }
              ]
            })(<Input style={{ width: "50%"}}/>)}
          </FormItem>
        )}
        <FormItem {...formItemLayout} label="ชื่อบนบิบ">
          {getFieldDecorator("changeOnThisYear", {
            rules: [
              {
                required: true,
                message: "ปีนี้ต้องการจะ เปลี่ยนแปลง อะไร"
              }
            ]
          })(<Input style={{ width: "50%"}}/>)}
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

export default withRouter(Form.create()(InformationForm));
