import {Component} from "react";

export default class ItemsDescription extends Component {
  render() {
    const items = this.props.items;
    if (!items || Object.keys(items).length === 0) {
      return "nothing";
    }

    return Object.keys(items).join(",");
  }
}
