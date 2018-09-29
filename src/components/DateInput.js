import React, { Component } from "react";
import { Select, Row, Col } from "antd";

const Option = Select.Option;

class DateInput extends Component {
    constructor(props) {
      super(props);
  
      const value = props.value || {};
      this.state = {
        day: value.day,
        month: value.month,
        year: value.year
      };
    }
  
    componentWillReceiveProps(nextProps) {
      if ("value" in nextProps) {
        const value = nextProps.value;
        this.setState(value);
      }
    }
  
    handleDayChange = day => {
      if (!("value" in this.props)) {
        this.setState({ day });
      }
      this.triggerChange({ day });
    };
    handleMonthChange = month => {
      if (!("value" in this.props)) {
        this.setState({ month });
      }
      this.triggerChange({ month });
    };
    handleYearChange = year => {
      if (!("value" in this.props)) {
        this.setState({ year });
      }
      this.triggerChange({ year });
    };
  
    triggerChange = changedValue => {
      const onChange = this.props.onChange;
      if (onChange) {
        onChange(Object.assign({}, this.state, changedValue))
      }
    };
  
    render() {
      const state = this.state;
      const day = Array.from(new Array(31), (val, index) => index + 1);
      const month = Array.from(new Array(12), (val, index) => index + 1);
      const year = Array.from(new Array(100), (val, index) => index + 1919);
      return (
        <Row>
          <Col span={8}>
            <Select
              placeholder="Day"
              style={{ maxWidth: 120, width: "100%" }}
              value={state.day}
              onChange={this.handleDayChange}
            >
              {day.map(val => (
                <Option key={`d-${val}`} value={val}>{val}</Option>
              ))}
            </Select>
          </Col>
          <Col span={8}>
            <Select
              placeholder="Month"
              style={{ maxWidth: 120, width: "100%" }}
              value={state.month}
              onChange={this.handleMonthChange}
            >
              {month.map(val => (
                <Option key={`m-${val}`} value={val}>{val}</Option>
              ))}
            </Select>
          </Col>
          <Col span={8}>
            <Select
              placeholder="Year"
              style={{ maxWidth: 120, width: "100%" }}
              value={state.year}
              onChange={this.handleYearChange}
            >
              {year.map(val => (
                <Option key={`y-${val}`} value={val}>{val}</Option>
              ))}
            </Select>
          </Col>
        </Row>
      );
    }
  }
  
  export default DateInput;