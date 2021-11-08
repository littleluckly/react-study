import React, { Component } from "react";
import store from "../store";
import {
  increment_action,
  increment_action_async,
} from "../store/count_action";

export default class CountRedux extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }
  increment = () => {
    // store.dispatch({ type: "increment", data: 1 });
    store.dispatch(increment_action(1));
  };
  incrementAsync = () => {
    store.dispatch(increment_action_async(1));
  };
  render() {
    return (
      <div>
        <h1>当前值：{store.getState()}</h1>
        <button onClick={this.increment}>加+1</button>
        <button onClick={this.incrementAsync}>异步方式加+1</button>
      </div>
    );
  }
}
