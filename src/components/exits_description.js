import React, {Component} from "react";

export default class ExitsDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var exits = this.props.exits;
    if (Object.keys(exits).length === 0) {
      return "none";
    }
    var exitEntries = Object.keys(exits).map(k => {
      return <div>{k}</div>
    }).join(",");

    return exitEntries;
  }
}
