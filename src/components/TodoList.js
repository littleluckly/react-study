import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListItem from "./ListItem";

export default class TodoList extends Component {
  // React.createRef生成一个容器，该容器存放ref标识的节点
  inputRef2 = React.createRef();
  state = {
    inputValue: "",
    list: ["泰式按摩", "精油推背"],
  };
  inputChange = () => {
    const inputValue = this.inputRef2.current.value;
    this.setState({
      inputValue: inputValue,
    });
  };
  addList = () => {
    const { list } = this.state;
    const inputValue = this.inputRef2.current.value;
    if (!inputValue) return;
    this.setState({
      list: list.concat(inputValue),
      inputValue: "",
    });
  };
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
    const { inputValue, list } = this.state;
    return (
      <Fragment>
        <div>
          <input
            value={inputValue}
            onChange={this.inputChange}
            ref={this.inputRef2}
          />
          {/* ref={(ref) => (this.inputRef = ref)} */}
          <button onClick={this.addList}>增加服务</button>
        </div>
        <ul>
          <TransitionGroup>
            {list.map((item, idx) => {
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
                    deleteListItem={() => {
                      this.deleteListItem(idx);
                      console.log("@--", idx);
                    }}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </ul>
        <p>你已选择了{list.length}项服务</p>
      </Fragment>
    );
  }
}
