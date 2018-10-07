import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Select , TimePicker , Alert } from "antd";
import DateInput from "../components/DateInput";
import moment from 'moment';


const FormItem = Form.Item;
const Option = Select.Option;
const format = 'HH:mm';

class InformationForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.add(values);
        this.props.history.push("/series");
      }
    });
  };

  componentDidMount() {
    this.props.form.setFieldsValue(this.props.data);
  }

  pushToSummary() {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.add(values);
        this.props.history.push("/summary");
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
        sm: { span: 8 },
        md: { span: 8 },
        lg: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 12 },
        lg: { span: 8 },
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
            <Alert
              style={{
                width: "50%",
                textAlign: "center",
                margin: "0 auto",
                marginBottom: "2%"
              }}
              message="โปรดกรอกข้อมูลเพื่อเพิ่มผู้สมัคร โดยเบอร์โทรศัพท์ต้องไม่ซ้ำกัน"
              type="warning"
            />
          )}
        <FormItem {...formItemLayout} label="Invitation Code">
          {getFieldDecorator("series", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกหมายเลขโทรศัพท์"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="ชื่อ">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกชื่อ"
              }
            ]
          })(<Input placeholder="กรรณิกา" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="นามสกุล">
          {getFieldDecorator("lastname", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกนามสกุล"
              }
            ]
          })(<Input placeholder="ภูนแสงหิรัญ"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="วันเกิด">
          {getFieldDecorator("birthDate", {
            rules: [{ validator: this.checkBirthDate }]
          })(<DateInput />)}
        </FormItem>
        <FormItem {...formItemLayout} label="เพศ" hasFeedback>
          {getFieldDecorator("gender", {
            rules: [{ required: true, message: "กรุณาเลือกเพศ" }]
          })(
            <Select placeholder="เลือกเพศ">
              <Option value="MALE">ชาย</Option>
              <Option value="FEMALE">หญิง</Option>
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
          })(<Input placeholder="0869999999"/>)}
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
          })(<Input placeholder="johnmedapple@google.com"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="Emergency Contact">
          {getFieldDecorator("emergencyContact", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกผู้ติดต่อสำหรับกรณีฉุกเฉิน"
              }
            ]
          })(<Input placeholder="กรรณิการ์"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="Emergency Tel.">
          {getFieldDecorator("emergencyPhone", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกหมายเลขโทรศัพท์ฉุกเฉิน"
              }
            ]
          })(<Input placeholder="0869999999"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="Shirt size" hasFeedback>
          {getFieldDecorator("shirtSize", {
            rules: [{ required: true, message: "กรุณาเลือกขนาดเสื้อ" }]
          })(
            <Select placeholder="เลือกขนาดเสื้อ">
              <Option value="XXS">XXS - 34"</Option>
              <Option value="XS">XS - 36"</Option>
              <Option value="S">XS - 38"</Option>
              <Option value="M">XS - 40"</Option>
              <Option value="L">XS - 42"</Option>
              <Option value="XL">XS - 44"</Option>
              <Option value="XXL">XS - 46"</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Running type" hasFeedback>
          {getFieldDecorator("type", {
            rules: [{ required: true, message: "กรุณาประเภทการวิ่ง" }]
          })(
            <Select placeholder="เลือกประเภทการวิ่ง">
              <Option value="3km">3 km</Option>
              <Option value="10km">10 km</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Alumni">
          {getFieldDecorator("isAlumni", {
            rules: [
              {
                required: true,
                message: "กรุณาระบุการเป็นนิสิตเก่า"
              }
            ]
          })(
            <Select>
              <Option value = "true" >นิสิตเก่า</Option>
              <Option value= "false" >ไม่เป็นนิสิตเก่า</Option>
            </Select>
          )}
        </FormItem>
        {getFieldValue("isAlumni") === "true" && (
          <FormItem {...formItemLayout} label="หมายเลขรุ่น">
            {getFieldDecorator("seriesNo", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอกหมายเลขรุ่น"
                }
              ]
            })(<Input placeholder="94" onBlur={e => this.handleSeriesNoChange(e.target.value)}/>)}
          </FormItem >
        )}
        {getFieldValue("isAlumni") === "true" && (
          <FormItem {...formItemLayout} label="วศ">
            {getFieldDecorator("year", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอก วศ"
                }
              ]
            })(<Input placeholder="53" onBlur={e => this.handleYearChange(e.target.value)} />)}
          </FormItem>
        )}
        {getFieldValue("isAlumni") === "false" && (
          <FormItem {...formItemLayout} label="ชื่อ-สกุล ผู้ลงทะเบียนให้">
            {getFieldDecorator("referalName", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอกชื่อ-สกุล ผู้ลงทะเบียนให้"
                }
              ]
            })(<Input />)}
          </FormItem>
        )}
        {getFieldValue("isAlumni") === "false" && (
          <FormItem {...formItemLayout} label="ความเกี่ยวข้อง">
            {getFieldDecorator("relative", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอกความเกี่ยวข้อง"
                }
              ]
            })(<Input />)}
          </FormItem>
        )}
        <FormItem {...formItemLayout} label="ชื่อบนบิบ">
          {getFieldDecorator("bibName", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกชื่อบนบิบ"
              }
            ]
          })(<Input placeholder="ถุงแป้ง"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="คุณเคยวิ่งระยะ 10 กม มาก่อนหรือไม่">
          {getFieldDecorator("isRunning", {
            rules: [
              {
                required: true,
                message: "คุณเคยวิ่งระยะ 10 กม มาก่อนหรือไม่"
              }
            ]
          })(
            <Select>
              <Option value="true" >เคย</Option>
              <Option value="false">ไม่เคย</Option>
            </Select>
          )}
        </FormItem>
        {getFieldValue("isRunning") === "true" && (
          <FormItem {...formItemLayout} label="เวลาส่วนตัวที่ดีที่สุดคือเท่าไหร่">
            {getFieldDecorator("personalBestTime", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอกเวลาส่วนตัวที่ดีที่สุดคือเท่าไหร่"
                }
              ]
            })(<TimePicker defaultValue={moment('00:00', format)} format={format} />)}
          </FormItem>
        )}
        <FormItem {...formItemLayout} label="ปีนี้ต้องการจะเปลี่ยนแปลงอะไร">
          {getFieldDecorator("changeAnswer", {
            rules: [
              {
                required: true,
                message: "ปีนี้ต้องการจะ เปลี่ยนแปลง อะไร"
              }
            ]
          })(<Input />)}
        </FormItem>
        
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            เพิ่มผู้สมัคร
          </Button>
          <Button style={{marginLeft : "3%" }} type="default" 
          onClick={this.pushToSummary.bind(this)}>
            สรุปและชำระเงิน
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default withRouter(Form.create()(InformationForm));
