import React, { Component } from "react";

// 非受控组件， 输入框的值没有用变量控制，而是通过ref方法获取的
class UnControl extends Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `用户名：${this.usernameRef.current.value}密码：${this.passwordRef.current.value}`
    );
  };
  render() {
    return (
      <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
        用户名：
        <input ref={this.usernameRef} name="username" />
        密码：
        <input ref={this.passwordRef} name="password" type="password" />
        <button>提交</button>
      </form>
    );
  }
}

export default UnControl;
