import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListItem from "./ListItem";
export default class App extends Component {
  constructor() {
    super();
    this.inputRef2 = React.createRef();
    this.state = {
      inputValue: "",
      list: ["泰式按摩", "精油推背"],
    };
  }
  inputChange = (e) => {
    const inputValue = this.inputRef.value;
    this.setState({
      inputValue: inputValue,
    });
    // React 16.3版本之后，refs被弃用了，
    // this.setState({
    //   inputValue: this.refs.input1.value,
    // });
    // this.setState({
    //   inputValue: e.target.value,
    // });
  };
  addList() {
    const { list } = this.state;
    const inputValue = this.inputRef.value;
    if (!inputValue) return;
    this.setState({
      list: list.concat(inputValue),
      inputValue: "",
    });
  }
  deleteListItem(idx) {
    const { list } = this.state;
    list.splice(idx, 1);
    // 注意不能直接使用this.state.list.splice(idx,1), this.setState({list})
    // 会造成性能问题
    this.setState({
      list,
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange}
            ref={this.inputRef2}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          <TransitionGroup>
            {this.state.list.map((item, idx) => {
              return (
                <CSSTransition
                  key={idx}
                  unmountOnExit
                  appear={true}
                  timeout={1000}
                  classNames="fadeIn"
                >
                  <ListItem
                    key={idx}
                    content={item}
                    idx={idx}
                    deleteListItem={this.deleteListItem.bind(this, idx)}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </ul>
        <p>你已选择了{this.state.list.length}项服务</p>
      </Fragment>
    );
  }
}
