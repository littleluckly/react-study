import React, { Component } from "react";

// 函数柯里化
// 在受控组件Control的基础上进行优化，将表单项onChange事件进行柯里化
class UnControl extends Component {
  state = {
    username: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`用户名：${this.state.username}密码：${this.state.password}`);
  };
  // 柯里化
  saveFormData = (dataType) => {
    return (event) => {
      this.setState({
        [dataType]: event.target.value,
      });
    };
  };
  // handleUsernameChange = (e) => {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // };
  // handlePasswordChange = (e) => {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // };
  render() {
    return (
      <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
        用户名：
        <input onChange={this.saveFormData("username")} name="username" />
        密码：
        <input
          onChange={this.saveFormData("password")}
          name="password"
          type="password"
        />
        <button>提交</button>
      </form>
    );
  }
}

export default UnControl;
