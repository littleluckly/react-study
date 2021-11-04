// 新的声明周期

import React, { Component } from "react";
class NewLife extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state);
    return state;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return "我是快照值";
  }
  componentDidUpdate(prevProps, prevState, snapshotValue) {
    console.log(snapshotValue);
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.addCount}>增加</button>
      </div>
    );
  }
}

export default NewLife;
