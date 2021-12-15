import React, { Component } from "react";
import CountReactRedux from "./containers/count";
import store from "./store/redux";

export default class App extends Component {
  render() {
    return (
      <div>
        <CountReactRedux store={store} />
      </div>
    );
  }
}
