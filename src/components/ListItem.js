import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  static propTypes = {
    idx: PropTypes.number.isRequired,
    content: PropTypes.string,
    deleteListItem: PropTypes.func,
  };
  static defaultProps = {
    content: "哈哈哈",
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.deleteListItem(this.props.idx);
  }
  // shouldComponentUpdate(nextProps) {
  //   return nextProps.content !== this.props.content;
  // }
  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }
}

export default ListItem;
