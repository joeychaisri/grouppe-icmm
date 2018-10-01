import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button ,Divider , Collapse } from "antd";

class Summary extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  componentDidMount() {}



  render() {

const Panel = Collapse.Panel;
const text = " asdadadad "

    return (
      <div>
               <Collapse  >
                    <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3" >
                    <p>{text}</p>
                    </Panel>
                </Collapse>
      </div>
    );
  }
}

export default withRouter(Form.create()(Summary));
