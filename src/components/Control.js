import React, { Component } from "react";

// 受控组件
class UnControl extends Component {
  state = {
    username: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`用户名：${this.state.username}密码：${this.state.password}`);
  };
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  render() {
    return (
      <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
        用户名：
        <input onChange={this.handleUsernameChange} name="username" />
        密码：
        <input
          onChange={this.handlePasswordChange}
          name="password"
          type="password"
        />
        <button>提交</button>
      </form>
    );
  }
}

export default UnControl;
