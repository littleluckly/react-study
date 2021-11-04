import React, { Component } from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";

const About = () => <div>About</div>;
const Home = () => <div>Home</div>;
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <p></p>
        <Link to="/about">About</Link>
        <hr />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    );
  }
}
