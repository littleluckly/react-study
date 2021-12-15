import React, { Component } from "react";

export default class CountRedux extends Component {
  increment = () => {
    this.props.increment(1);
  };
  incrementAsync = () => {
    this.props.incrementAsync(1);
    // store.dispatch(increment_action_async(1));
  };
  render() {
    return (
      <div>
        <h1>当前值：{this.props.count}</h1>
        <button onClick={this.increment}>加+1</button>
        <button onClick={this.incrementAsync}>异步方式加+1</button>
      </div>
    );
  }
}
