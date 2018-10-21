import React, { Component } from "react";
import API from "../api/index";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { Button, Divider, Collapse, Col, Row, Alert } from "antd";
const { Panel } = Collapse;

class Summary extends Component {
  pay = () => {
    let applicants = this.props.confirmData.map(item => {
      delete item.year;
      delete item.birthDate;
      item.series && (item.series = Number(item.series));
      item.businessType === 'Other' && (item.businessType = `Other / ${item.businessTypeOther}`)
      delete item.businessTypeOther
      return item;
    });
    const data = {
      applicants
    };
    API.applyEvent(data)
      .then(res => {
        const {
          merchantID,
          description,
          orderID,
          currency,
          amount,
          version,
          redirectURL,
          paymentURL,
          hash,
          status
        } = res.data;
        if (status === "successful") {
          alert("ทำรายการสำเร็จแล้ว");
          this.props.clear()
          this.props.history.push("/");
        } else {
          const element = (
            <form
              id="myform"
              method="post"
              action={paymentURL}
              style={{ display: "none" }}
            >
              <input type="hidden" name="version" value={version} />
              <input type="hidden" name="merchant_id" value={merchantID} />
              <input type="hidden" name="currency" value={currency} />
              <input type="hidden" name="result_url_1" value={redirectURL} />
              <input type="hidden" name="hash_value" value={hash} />
              <input
                type="hidden"
                name="payment_description"
                value={description}
              />
              <input type="hidden" name="order_id" value={orderID} />
              <input type="hidden" name="amount" value={amount} />
              <input type="submit" name="submit" value="Confirm" />
            </form>
          );
          ReactDOM.render(element, document.getElementById("payment"));
          const form = document.getElementById("myform");
          HTMLFormElement.prototype.submit.call(form);
        }
      })
      .catch(err => {
        alert("เกิดข้อผิดพลาด กรุณานาลงทะเบียนใหม่ ขออภัยในความไม่สะดวก");
        this.props.clear()
        this.props.history.push("/");
      });
  };

  payOnly = () => {
    const {
      merchantID,
      description,
      orderID,
      currency,
      amount,
      version,
      redirectURL,
      paymentURL,
      hash
    } = this.props.payment;
    const element = (
      <form
        id="myform2"
        method="post"
        action={paymentURL}
        style={{ display: "none" }}
      >
        <input type="hidden" name="version" value={version} />
        <input type="hidden" name="merchant_id" value={merchantID} />
        <input type="hidden" name="currency" value={currency} />
        <input type="hidden" name="result_url_1" value={redirectURL} />
        <input type="hidden" name="hash_value" value={hash} />
        <input type="hidden" name="payment_description" value={description} />
        <input type="hidden" name="order_id" value={orderID} />
        <input type="hidden" name="amount" value={amount} />
        <input type="submit" name="submit" value="Confirm" />
      </form>
    );
    ReactDOM.render(element, document.getElementById("payment"));
    const form = document.getElementById("myform2");
    HTMLFormElement.prototype.submit.call(form);
  };
  render() {
    const { confirmData } = this.props;
    const total = confirmData.reduce((acc, item) => {
      let price = item.promotionCode ? 0 : ( (Number(item.series) <= 90 || Number(item.series) === -1 ) ? 800 : 500 )
      return acc + price;
    }, 0);
    // const nonVat = total / 1.07;
    // const vat = total - nonVat;
    return (
      <div>
        <Collapse>
          {confirmData.length > 0 &&
            confirmData.map((item, idx) => (
              <Panel header={`ข้อมูลผู้สมัครคนที่ ${idx + 1}`} key={idx + 1}>
                <p>
                  {item.name} {item.lastname} #{item.series} <br />
                  {item.phone} {item.email} <br />
                  เลือกห้อง {item.selectedRoom}
                </p>
                {/* <Icon type="close-circle" theme="outlined" /> */}
              </Panel>
            ))}
        </Collapse>
        <Divider />
        <div style={{ textAlign: "right", marginBottom: 16 }}>
          {/* <Row>
            <Col span={18}>Subtotal</Col>
            <Col span={6}>
              {Number(nonVat.toFixed(2)).toLocaleString("en")} THB
            </Col>
          </Row>
          <Row>
            <Col span={18}>Vat (7%)</Col>
            <Col span={6}>
              {Number(vat.toFixed(2)).toLocaleString("en")} THB
            </Col>
          </Row> */}
          <Row>
            <Col span={18}>Total</Col>
            <Col span={6}>
              {Number(total.toFixed(2)).toLocaleString("en")} THB
            </Col>
          </Row>
        </div>
        {this.props.history.location.pathname.split("/")[1] === "order" && (
          <p>
            สถานะการจ่ายเงิน:
            {this.props.orderStatus}
          </p>
        )}
        {((this.props.orderStatus && this.props.orderStatus === "pending") ||
          (!this.props.payment && !this.props.orderStatus)) && (
          <div id="payment">
            <Button
              type="primary"
              block
              onClick={() => (!!this.props.payment ? this.payOnly() : this.pay())}
            >
              Pay !!
            </Button>
            <Alert
              message="ในกรณีกด Pay แล้วยังไม่พร้อมทำรายการ โปรดกดปิดหน้าเว็บด้วย X (มุมขวาบน) แทนการกด cancel เพื่อป้องกันการผิดพลาดของข้อมูล"
              type="warning"
              style={{
                width: "70%",
                textAlign: "center",
                margin: "0 auto",
                marginTop: "5vh"
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Summary);
