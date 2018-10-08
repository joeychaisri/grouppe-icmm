import React, { Component } from "react";
import API from "../api/index";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { Button, Divider, Collapse, Col, Row} from "antd";
const { Panel } = Collapse;

class Summary extends Component {
  pay = () => {
    let applicants = this.props.confirmData.map(item => {
      delete item.birthDate;
      item.isAlumni = item.isAlumni === "true"
      item.isRunning = item.isRunning === "true"
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
          hash
        } = res.data;
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
      })
      .catch(err => {
        console.log(err);
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
    const total = confirmData.length * 550;
    // const nonVat = total / 1.07;
    // const vat = total - nonVat;
    return (
      <div>
        <Collapse>
          {confirmData.length > 0 &&
            confirmData.map((item, idx) => (
              <Panel header={`ข้อมูลผู้สมัครคนที่ ${idx + 1}`} key={idx + 1} >
                <p>
                  {item.name} {item.lastname} <br />
                  Email: {item.email} <br />
                  Tel: {item.phone}
                  <br />
                  Shirt Size: {item.shirtSize}
                  <br />
                  Type: {item.type}
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
          (!this.props.payment && !this.props.orderStatus) )&& (
          <Button
            type="primary"
            block
            onClick={() => (!!this.props.payment ? this.payOnly() : this.pay())}
          >
            Pay !!
          </Button>
        )}
        <div id="payment" />
      </div>
    );
  }
}

export default withRouter(Summary);
