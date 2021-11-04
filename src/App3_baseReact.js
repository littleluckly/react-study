import React, { Component, Fragment } from "react";
import TodoList from "./components/TodoList";
import UnControl from "./components/UnControl";
import Control from "./components/Control";
import NewLife from "./components/NewLife";
import Diff1 from "./components/Diff1";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoList />
        <UnControl />
        <Control />
        <NewLife />
        <hr />
        <Diff1 />
      </Fragment>
    );
  }
}
