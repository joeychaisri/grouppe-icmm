import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Select,
  Alert,
  Modal
} from "antd";
import DateInput from "../components/DateInput";
import API from "../api";

const FormItem = Form.Item;
const Option = Select.Option;

class InformationForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: null,
      visible2: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.add(values);
        this.props.history.push("/series");
      }
    });
  };

  componentDidMount() {
    this.props.form.setFieldsValue(this.props.data);
    // if(!this.props.data || !this.props.data.invitationCode) {
    //   this.props.history.push('/')
    // }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.props.form.setFieldsValue(nextProps.data);
    }
  }

  pushToSummary() {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.add(values);
        this.props.history.push("/summary");
      }
    });
  }

  pushToSummaryFromEdit() {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.edit({
          index: Number(this.props.history.location.pathname.split("/")[2]),
          data: values
        });
        this.props.history.push("/summary");
      }
    });
  }

  saveEdit() {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.edit({
          index: Number(this.props.history.location.pathname.split("/")[2]),
          data: values
        });
        this.props.history.push("/series");
      }
    });
  }

  checkBirthDate = (rule, value, callback) => {
    const { day = null, month = null, year = null } = value || {};
    if (!value || !day || !month || !year) {
      callback("กรุณาเลือกวันเกิด");
    }
    callback();
    return;
  };

  checkPhone = async (rule, value, callback) => {
    if (this.props.confirmData.length > 0) {
      let result = this.props.confirmData.find((item, idx) => {
        return (
          item.phone === value &&
          idx !== Number(this.props.history.location.pathname.split("/")[2])
        );
      });
      result &&
        callback(
          `ขออภัย หมายเลขโทรศัพท์ของคุณซ้ำกับ ${result.name} โปรดใช้หมายเลขอื่น`
        );
    }
    const res = await API.checkPhoneAvailable(value);
    console.log(res);
    !res.data.status &&
      callback(`ขออภัย หมายเลขโทรศัพท์ของคุณซ้ำกับในระบบ โปรดใช้หมายเลขอื่น`);
    callback();
    return;
  };

  handleSeriesNoChange = value => {
    this.props.form.setFieldsValue({
      year: Number(value) - 41 > 0 ? Number(value) - 41 : 0
    });
  };
  handleYearChange = value => {
    this.props.form.setFieldsValue({ year: Number(value) + 41 });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
    this.pushToSummary();
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  showModal2 = () => {
    this.setState({
      visible2: true
    });
  };

  handleOk2 = e => {
    console.log(e);
    this.setState({
      visible2: false
    });
    this.pushToSummaryFromEdit();
  };

  handleCancel2 = e => {
    console.log(e);
    this.setState({
      visible2: false
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 24 },
        lg: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 24 },
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
        {/* <FormItem {...formItemLayout} label="Invitation Code">
          {getFieldDecorator("invitationCode", {
            rules: [
              {
                required: true,
                message: "กรุณากรอก invitation code"
              }
            ]
          })(<Input disabled />)}
        </FormItem> */}
        <FormItem {...formItemLayout} label="ชื่อ (ภาษาอังกฤษ)">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกชื่อ"
              }
            ]
          })(<Input placeholder="(ภาษาอังกฤษ)" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="สกุล (ภาษาอังกฤษ)">
          {getFieldDecorator("lastname", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกนามสกุล"
              }
            ]
          })(<Input placeholder="(ภาษาอังกฤษ)" />)}
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
        <FormItem {...formItemLayout} label="โทร">
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกหมายเลขโทรศัพท์"
              },
              {
                pattern: new RegExp("^[0-9]{10}$"),
                message: "หมายเลขโทรศัพท์ไม่ถูกต้อง"
              }
            ]
          })(<Input placeholder="0869999999" />)}
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
          })(<Input placeholder="johnmedapple@google.com" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Intania/วศ." hasFeedback>
          {getFieldDecorator("series", {
            rules: [{ required: true, message: "กรุณาเลือก วศ." }]
          })(
            <Select placeholder="เลือก วศ.">
              <Option value="grads">ป.โท/ป.เอก</Option>
              <Option value="85">85/44</Option>
              <Option value="86">86/45</Option>
              <Option value="87">87/46</Option>
              <Option value="88">88/47</Option>
              <Option value="89">89/48</Option>
              <Option value="90">90/49</Option>
              <Option value="91">91/50</Option>
              <Option value="92">92/51</Option>
              <Option value="93">93/52</Option>
              <Option value="94">94/53</Option>
              <Option value="95">95/54</Option>
              <Option value="96">96/55</Option>
              <Option value="97">97/56</Option>
              <Option value="98">98/57</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="ปีที่เข้าศึกษา">
          {getFieldDecorator("year", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกปีที่เข้าศึกษา"
              }
            ]
          })(<Input placeholder="53" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="ชื่อหน่วยงาน/บริษัท">
          {getFieldDecorator("company", {
            rules: [
              {
                required: true,
                message: "กรุณากรอกชื่อหน่วยงาน/บริษัท"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="ประเภทธุรกิจ" hasFeedback>
          {getFieldDecorator("type", {
            rules: [{ required: true, message: "กรุณาเลือกประเภทธุรกิจ" }]
          })(
            <Select placeholder="เลือกประเภทธุรกิจ">
              <Option value="การศึกษา">การศึกษา</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="เลือกห้อง" hasFeedback>
          {getFieldDecorator("room", {
            rules: [{ required: true, message: "กรุณาเลือกห้อง" }]
          })(
            <Select placeholder="เลือกห้อง">
              <Option value="TOPIC3">TOPIC3: "CHANGE" for our wisdom</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="สิ่งที่สามารถแบ่งปันในกลุ่ม IYA Forum อื่นๆ"
          hasFeedback
        >
          {getFieldDecorator("share", {
            rules: [{ required: true, message: "กรุณาเลือก" }]
          })(
            <Select>
              <Option value="การศึกษา">ร่วมเป็น Speaker</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="คำถามฝากถึง Speaker ห้องที่ตนเองเลือก"
        >
          {getFieldDecorator("question")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="PROMO CODE">
          {getFieldDecorator("promoCode", {
            rules: [
              {
                required: false,
                message: "กรุณากรอก PROMO CODE"
              },
              {
                pattern: new RegExp("^[A-Za-z0-9_.]+$"),
                message: "PROMO CODE ไม่ถูกต้อง"
              }
            ]
          })(<Input />)}
        </FormItem>
        {this.props.history.location.pathname.split("/")[1] ===
          "information" && (
          <FormItem {...tailFormItemLayout}>
            {/* <Button
              type="primary"
              htmlType="submit"
              disabled={this.props.confirmData.length === 4}
            >
              เพิ่มผู้สมัคร
            </Button> */}
            <Button
              style={{ marginLeft: "3%" }}
              type="primary"
              onClick={this.showModal.bind(this)}
            >
              สรุปและชำระเงิน
            </Button>
          </FormItem>
        )}
        {this.props.history.location.pathname.split("/")[1] === "edit" && (
          <FormItem {...tailFormItemLayout}>
            {/* <Button
              type="primary"
              onClick={this.saveEdit.bind(this)}
              disabled={this.props.confirmData.length === 4}
            >
              บันทึกและเพิ่มผู้สมัคร
            </Button> */}
            <Button
              style={{ marginLeft: "3%" }}
              type="primary"
              onClick={this.showModal2.bind(this)}
            >
              บันทึกและชำระเงิน
            </Button>
          </FormItem>
        )}
        <Modal
          //beforePushToSummary
          title="คำเตือน"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={600}
        >
          <p style={{ textAlign: "center" }}>
            กรุณาตรวจสอบข้อมูลผู้สมัครให้ถูกต้องอีกครั้ง
            เนื่องจากจะไม่สามารถแก้ไขได้ในภายหลัง
          </p>
          <br />
          <p style={{ textAlign: "center" }}>
            หากรับทราบกด OK เพื่อดำเนินการต่อ หรือกด Cancel
            เพื่อทำการตรวจข้อมูลอีกครั้ง
          </p>
        </Modal>
        <Modal
          //beforePushToSummaryFromEdit
          title="คำเตือน"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
          width={600}
        >
          <p style={{ textAlign: "center" }}>
            กรุณาตรวจสอบข้อมูลผู้สมัครให้ถูกต้องอีกครั้ง
            เนื่องจากจะไม่สามารถแก้ไขได้ในภายหลัง
          </p>
          <br />
          <p style={{ textAlign: "center" }}>
            หากรับทราบกด OK เพื่อดำเนินการต่อ หรือกด Cancel
            เพื่อทำการตรวจข้อมูลอีกครั้ง
          </p>
        </Modal>
      </Form>
    );
  }
}

export default withRouter(Form.create()(InformationForm));
