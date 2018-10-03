import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button ,Divider, Row,Col} from "antd";

class test extends Component {
  constructor(props, context) {
    super(props, context);
    // this.handlePush = this.handlePush.bind(this);
    this.state = {};
  }

  componentDidMount() {}

  handlePush(){

    

  }

  pushToSeries() {
      this.props.history.push("/series");
  };

  pushToSearch() {
      this.props.history.push("/search");
  };




  render() {
    return (
      <div style={{ }}>
           <p> hello world</p>
           <Row gutter={0}>
            <Col span={6} >H </Col>
            <Col span={6} >E </Col>
            <Col span={6} >L </Col>
            <Col span={6} >L </Col>
          </Row>
      </div>
    );
  }
}

export default withRouter(Form.create()(test));
