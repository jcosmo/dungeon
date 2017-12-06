import {Component} from "react";

export default class ExitsDescription extends Component {
  render() {
    const exits = this.props.exits;
    if (!exits || Object.keys(exits).length === 0) {
      return "none";
    }
    return Object.keys(exits).join(", ");
  }
}
