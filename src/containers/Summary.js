import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../api/index";
import ReactDOM from "react-dom";
import { Button, Divider, Collapse, Col, Row } from "antd";
const { Panel } = Collapse;

class Summary extends Component {
  pay = () => {
    const data = {
      applicants: this.props.confirmData
    };
    // API.applyEvent(data).then(res => {
      // const { data } = res;
      const element = (
        <form
          id="myform"
          method="post"
          action="https://demo2.2c2p.com/2C2PFrontEnd/RedirectV3/payment"
          style={{ display: "none" }}
        >
          <input type="hidden" name="version" value="7.2" />
          <input type="hidden" name="merchant_id" value="JT04" />
          <input type="hidden" name="currency" value="764" />
          <input
            type="hidden"
            name="result_url_1"
            value="https://icmm.co/order/8472DO4E1"
          />
          <input
            type="hidden"
            name="hash_value"
            value="18aaaa55f76b9934cf706e3295464fd90282f94a"
          />
          <input
            type="hidden"
            name="payment_description"
            value="Charge for order ID: 8472DO4E1"
          />
          <input type="hidden" name="order_id" value="8472DO4E1" />
          <input type="hidden" name="amount" value="000000002500" />
          <input type="submit" name="submit" value="Confirm" />
        </form>
      );
      ReactDOM.render(element, document.getElementById("payment"));
      const form = document.getElementById("myform");
      HTMLFormElement.prototype.submit.call(form);
    // });
  };
  render() {
    const { confirmData } = this.props;
    const total = confirmData.length * 600;
    const nonVat = total / 1.07;
    const vat = total - nonVat;
    console.log(confirmData);
    return (
      <div className="container">
        <Collapse>
          {confirmData.length > 0 &&
            confirmData.map((item, idx) => (
              <Panel header={`ข้อมูลผู้สมัครคนที่ ${idx + 1}`} key={idx + 1}>
                <p>
                  {item.name} {item.lastname} <br />
                  Email: {item.email} <br />
                  Tel: {item.phone}
                  <br />
                  Shirt Size: {item.shirtSize}
                  <br />
                  Type: {item.type}
                </p>
              </Panel>
            ))}
        </Collapse>
        <Divider />
        <div style={{ textAlign: "right", marginBottom: 16 }}>
          <Row>
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
          </Row>
          <Row>
            <Col span={18}>Total</Col>
            <Col span={6}>
              {Number(total.toFixed(2)).toLocaleString("en")} THB
            </Col>
          </Row>
        </div>
        <Button type="primary" block onClick={() => this.pay()}>
          Pay !!
        </Button>
        <div id="payment" />
      </div>
    );
  }
}

export default withRouter(Summary);
