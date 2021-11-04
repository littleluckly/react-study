import React, { Component } from "react";

class Diff1 extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <h1>hello Diff</h1>
        <input />
        <p>{date.toTimeString()}</p>
      </div>
    );
  }
}

export default Diff1;
