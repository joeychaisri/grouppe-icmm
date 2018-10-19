import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Select, Alert, Modal, TreeSelect } from "antd";
import DateInput from "../components/DateInput";
import API from "../api";
import speakerImg from '../static/speaker.jpg';
import topic1 from '../static/topic1.jpg';
import topic2 from '../static/topic2.jpg';
import topic3 from '../static/topic3.jpg';
import topic4 from '../static/topic4.jpg';

const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = TreeSelect.TreeNode;

class InformationForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: null,
      visible2: null,
      roomOptions: []
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
    this.getRoomOptions();
    // if(!this.props.data || !this.props.data.invitationCode) {
    //   this.props.history.push('/')
    // }
  }

  getRoomOptions = async () => {
    const res = await API.getEvent();
    res &&
      this.setState({
        roomOptions: res.data.availableRoom.map(item => {
          return {
            name: `${item.title} (${item.currentSeat}/${item.maxSeat})`,
            value: item.title
          };
        })
      });
  };
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
    !res.data.status &&
      callback(`ขออภัย หมายเลขโทรศัพท์ของคุณซ้ำกับในระบบ โปรดใช้หมายเลขอื่น`);
    callback();
    return;
  };

  checkPromoCode = async (rule, value, callback) => {
    if (value) {
      const res = await API.validatePromocode(value);
      !res.data.status && callback(`ไม่สามารถใช้รหัสนี้ได้`);
    }
    callback();
    return;
  };

  checkEventAvailable = async (rule, value, callback) => {
    const res = await API.getEvent();
    let result = res.data.availableRoom.find(item => item.title === value);
    console.log(result);
    if (result && result.maxSeat === result.currentSeat) {
      callback(`ห้องเต็มแล้ว ไม่สามารถเลือกห้องนี้ได้`);
    }
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
        {/* {this.props.isRegistered && (
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
        )} */}
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
                pattern: new RegExp("^[A-Za-z_.]+$"),
                message: "กรุณากรอกชื่อเป็นภาษาอังกฤษ"
              },
              {
                required: true,
                message: "กรุณากรอกชื่อเป็นภาษาอังกฤษ"
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
            rules: [{ required: true,validator: this.checkBirthDate }]
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
            <Select
              placeholder="เลือก วศ."
              onChange={this.handleSeriesNoChange}
            >
              <Option value="-1">ป.โท/ป.เอก</Option>
              <Option value="80">80/39</Option>
              <Option value="81">81/40</Option>
              <Option value="82">82/41</Option>
              <Option value="83">83/42</Option>
              <Option value="84">84/43</Option>
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
          {getFieldDecorator("businessType", {
            rules: [{ required: true, message: "กรุณาเลือกประเภทธุรกิจ" }]
          })(
            <Select placeholder="เลือกประเภทธุรกิจ">
              <Option value="1">Agro and Food</Option>
              <Option value="2">Consumer Products</Option>
              <Option value="3">Financial</Option>
              <Option value="4">Industrials</Option>
              <Option value="5">Property and Contructions</Option>
              <Option value="6">Resources & Energy</Option>
              <Option value="7">Services</Option>
              <Option value="8">IT & Technology</Option>
              <Option value="9">Education</Option>
              <Option value="10">Consultant</Option>
              <Option value="11">Logistics & Transport</Option>
              <Option value="12">Other</Option>
            </Select>
          )}
        </FormItem>
        {/* {getFieldValue("isAlumni") === "true" && (
          <FormItem {...formItemLayout} label="หมายเลขรุ่น">
            {getFieldDecorator("series", {
              rules: [
                {
                  required: true,
                  message: "กรุณากรอกหมายเลขรุ่น"
                }
              ]
            })(
              <InputNumber
                placeholder="94"
                onBlur={e => this.handleSeriesNoChange(e.target.value)}
                min={85} max={98}
                style={{ width: '100%'}}
              />
            )}
          </FormItem>
        )} */}
        <div style={{textAlign : "center"}}>
        <p><strong>กำหนดการ</strong></p>
        <p><strong>13:30 &ndash; 14:30 น. ลงทะเบียนเข้างาน</strong></p>
        <p><strong>14:30 &ndash; 17.00 น. </strong><strong>Intania Young Alumni Round Table Session </strong></p>
        <p><strong>ชั้น 1 อาคารเรียนรวมและวิจัย (ตึก 100 ปี) คณะวิศวกรรมศาสตร์</strong></p>
        <p><strong>&nbsp;</strong></p>
        <p><strong>ห้อง 1 &ldquo;</strong><strong>CHANGE&rdquo; of Thailand Future Cities in <span>4.0</span> era</strong></p>
        <p><strong>ห้อง 2 &ldquo;</strong><strong>CHANGE&rdquo; to drive businesses in dynamic world</strong></p>
        <p><strong>ห้อง 3 &ldquo;</strong><strong>CHANGE&rdquo; of our Wisdom</strong></p>
        <p><strong>ห้อง 4 &ldquo;</strong><strong>CHANGE&rdquo; of Future Energy</strong></p>
        <p><strong>&nbsp;</strong></p>
        <p><strong>17:30 &ndash; 18:00 น. ลงทะเบียนเข้างานเลี้ยงช่วงเย็น</strong></p>
        <p><strong>18:00 &ndash; 18:30 น. การเปิดกิจกรรม </strong><strong>Intania Young Alumni Forum</strong></p>
        <p><strong>18:30 &ndash; 21:00 น. ร่วมรับประทานอาหาร และกิจกรรมภายในงาน</strong></p>
        </div>
        <img style={{marginLeft : "15%" , marginBottom: "25px", width:"70%" , height:"50%"}} src={topic1}  />
        <img style={{marginLeft : "15%" , marginBottom: "25px", width:"70%" , height:"50%"}} src={topic2}  />
        <img style={{marginLeft : "15%" , marginBottom: "25px", width:"70%" , height:"50%"}} src={topic3}  />
        <img style={{marginLeft : "15%" , marginBottom: "25px", width:"70%" , height:"50%"}} src={topic4}  />
        <FormItem {...formItemLayout} label="เลือกห้อง" hasFeedback>
          {getFieldDecorator("selectedRoom", {
            rules: [
              { required: true, message: "กรุณาเลือกห้อง" },
              { validator: this.checkEventAvailable }
            ]
          })(
            <Select placeholder="เลือกห้อง">
              {this.state.roomOptions.map((item, idx) => (
                <Option key={`room-${idx}`} value={item.value}>
                  {item.name}
                </Option>
              ))}
              {/* <Option
                value={`TOPIC1: "CHANGE" of Thailand Future Cities in 4.0 Era`}
              >
                TOPIC1: "CHANGE" of Thailand Future Cities in 4.0 Era
              </Option>
              <Option
                value={`TOPIC2: "CHANGE" of Sustain Business in Dynamic World`}
              >
                TOPIC2: "CHANGE" of Sustain Business in Dynamic World
              </Option>
              <Option value={`TOPIC3: "CHANGE" of our Wisdo`}>
                TOPIC3: "CHANGE" of our Wisdom
              </Option>
              <Option value={`TOPIC4: "CHANGE" of Future Energy`}>
                TOPIC4: "CHANGE" of Future Energy
              </Option> */}
            </Select>
            
          )}
        </FormItem>
        {/* <img style={{marginLeft : "14%" , marginBottom: "25px", width:"70%" , height:"50%"}} src={speakerImg}  /> */}
        
        <FormItem
          {...formItemLayout}
          label="สิ่งที่สามารถแบ่งปันในกลุ่ม IYA Forum อื่นๆ"
          hasFeedback
        >
          {getFieldDecorator("sharingForum", {
            rules: [{ required: true, message: "กรุณาเลือก" }]
          })(
            <TreeSelect
            showSearch
            style={{ width: 300 }}
            placeholder="Please select"
            allowClear
            multiple
            treeDefaultExpandAll
          >
       
                <TreeNode value="1" title="1.ร่วมกับกลุ่มธุรกิจในกลุ่มเดียวกัน" key="1" />
                <TreeNode value="2" title="2.เข้าร่วมกิจกรรมของ CUEA/ IYA" key="2" />
                <TreeNode value="3" title="3.ร่วมเป็น Speaker" key="3" />
                <TreeNode value="4" title="4.Open House ในธุรกิจของตน" key="4" />
                <TreeNode value="5" title="5.สปอนเซอร์สนับสนุนงาน IYA" key="5" />
                <TreeNode value="6" title="6.ออกบู๊ท รับสมัครงาน ในกิจกรรมต่างๆ" key="6" />
                <TreeNode value="7" title="7.เสนอขายสินค้าราคาพิเศษ" key="7" />
                <TreeNode value="8" title="8.ช่วยจัดกิจกรรมต่างๆ" key="8" />

          </TreeSelect>
     
          )}
        </FormItem>
        {/* <FormItem
          {...formItemLayout}
          label="สิ่งที่สามารถแบ่งปันในกลุ่ม IYA Forum อื่นๆ"
          hasFeedback
        >
          {getFieldDecorator("sharingForum", {
            rules: [{ required: true, message: "กรุณาเลือก" }]
          })(
            <Select>
              <Option value="1">
                1.Power of Team กับ ธุรกิจในกลุ่มเดียวกัน
              </Option>
              <Option value="2">
                2.เข้าร่วมกิจกรรมของ Intania Young Alumni
              </Option>
              <Option value="3">3.ร่วมเป็น Speaker</Option>
              <Option value="4">
                4.สปอนเซอร์สนับสนุนงาน Intania Young Alumni
              </Option>
              <Option value="5">5.ออกบู๊ทรับสมัครงาน</Option>
              <Option value="6">6.สินค้าราคาพิเศษ</Option>
              <Option value="7">
                7.เข้าร่วมเป็นผู้จัดงานของ Intania Young Alumni
              </Option>
            </Select>
          )}
        </FormItem> */}
        <FormItem
          {...formItemLayout}
          label="คำถามฝากถึง Speaker ห้องที่ตนเองเลือก"
        >
          {getFieldDecorator("questionToSpeaker")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="PROMO CODE">
          {getFieldDecorator("promotionCode", {
            validateTrigger: "onBlur",
            validateFirst: true,
            rules: [
              {
                pattern: new RegExp("^[A-Za-z0-9_.]+$"),
                message: "PROMO CODE ไม่ถูกต้อง"
              },
              { validator: this.checkPromoCode }
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
