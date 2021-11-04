import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Test extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <div>happy birthday!</div>;
  }
}
