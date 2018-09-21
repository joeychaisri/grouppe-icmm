import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-google";
import { Form, Input, DatePicker, Button, Select} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
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

  renderPage = () => {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return [(<Form onSubmit={this.handleSubmit}>
      <FormItem
        {...formItemLayout}
        label="Surname"
      >
        {getFieldDecorator('surname', {
          rules: [ {
            required: true, message: 'Please input your surname!',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Tel"
      >
        {getFieldDecorator('tel', {
          rules: [{
            required: true, message: 'Please input your telephone no.!',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Birth date"
      >
        {getFieldDecorator('birthdate', { rules: [{ type: 'object', required: true, message: 'Please select birth date!' }] })(
          <DatePicker />
        )}
      </FormItem>
      <FormItem
        {...tailFormItemLayout}
      >
      <div style={{ overflow: 'hidden'}}>
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
        <Button type="primary" htmlType="submit">Go!!</Button>
      </FormItem>
    </Form>),(<Form onSubmit={this.handleSubmit}>
      <FormItem
        {...formItemLayout}
        label="Surname"
      >
        {getFieldDecorator('surname', {
          rules: [ {
            required: true, message: 'Please input your surname!',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Tel"
      >
        {getFieldDecorator('tel', {
          rules: [{
            required: true, message: 'Please input your telephone no.!',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Birth date"
      >
        {getFieldDecorator('birthdate', { rules: [{ type: 'object', required: true, message: 'Please select birth date!' }] })(
          <DatePicker />
        )}
      </FormItem>
      <FormItem
        {...tailFormItemLayout}
      >
      <div style={{ overflow: 'hidden'}}>
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
        <Button type="primary" htmlType="submit">Go!!</Button>
      </FormItem>
    </Form>)
    ]
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <div>
      {this.renderPage()[0]}
      <Form onSubmit={this.handleSubmit}>
      <FormItem
        {...formItemLayout}
        label="ชื่อ"
      >
        {getFieldDecorator('firstname', {
          rules: [ {
            required: true, message: 'กรุณากรอกชื่อ',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="นามสกุล"
      >
        {getFieldDecorator('surname', {
          rules: [ {
            required: true, message: 'กรุณากรอกนามสกุล',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="วันเกิด"
      >
        {getFieldDecorator('birthdate', { rules: [{ type: 'object', required: true, message: 'กรุณาเลือกวันเกิด' }] })(
          <DatePicker />
        )}
      </FormItem>
      <FormItem
          {...formItemLayout}
          label="เพศ"
          hasFeedback
        >
          {getFieldDecorator('gender', {
            rules: [
              { required: true, message: 'กรุณาเลือกเพศ' },
            ],
          })(
            <Select placeholder="เลือกเพศ">
              <Option value="male">ชาย</Option>
              <Option value="female">หญิง</Option>
            </Select>
          )}
        </FormItem>
      <FormItem
        {...formItemLayout}
        label="Tel."
      >
        {getFieldDecorator('tel', {
          rules: [{
            required: true, message: 'กรุณากรอกหมายเลขโทรศัพท์',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'อีเมลไม่ถูกต้อง',
            }, {
              required: true, message: 'กรุณากรอกอีเมล',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
        {...formItemLayout}
        label="Emergency Contact"
      >
        {getFieldDecorator('emergency_contact', {
          rules: [{
            required: true, message: 'กรุณากรอกผู้ติดต่อสำหรับกรณีฉุกเฉิน',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Emergency Tel."
      >
        {getFieldDecorator('emergency_tel', {
          rules: [{
            required: true, message: 'กรุณากรอกหมายเลขโทรศัพท์ฉุกเฉิน',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
          {...formItemLayout}
          label="Shirt size"
          hasFeedback
        >
          {getFieldDecorator('shirt_size', {
            rules: [
              { required: true, message: 'กรุณาเลือกเพศ' },
            ],
          })(
            <Select placeholder="เลือกขนาดเสื้อ">
              <Option value="xs">XS - 34"</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Running type"
          hasFeedback
        >
          {getFieldDecorator('running_type', {
            rules: [
              { required: true, message: 'กรุณาประเภทการวิ่ง' },
            ],
          })(
            <Select placeholder="เลือกประเภทการวิ่ง">
              <Option value="3">Fun run - 3 km"</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Alumni"
          hasFeedback
        >
          {getFieldDecorator('alumni', {
            rules: [
              { required: true, message: 'กรุณาเลือก Alumni' },
            ],
          })(
            <Select placeholder="เลือก Alumni">
              <Option value="alumni">ศิษย์เก่า</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
        {...formItemLayout}
        label="ชื่อบนบิล"
      >
        {getFieldDecorator('name_on_bill', {
          rules: [{
            required: true, message: 'กรุณากรอกชื่อบนบิล',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">Go!!</Button>
      </FormItem>
    </Form>
      </div>
    );
  }
}

export default Form.create()(RegistrationForm);
