import React, {Component} from "react";
import {observer} from "mobx-react";

export default observer(
  class InventoryItem extends Component {
    render() {
      var content;
      if (this.props.item.name === this.props.item.id)
        content = this.props.item.name;
      else
        content = `{this.props.item.name} ({this.props.item.id})`;

      return (
        <li key={this.props.item.id} className="inventory_item">
          {content}
        </li>
      );
    }
  });
