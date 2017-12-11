import React, {Component} from "react";
import {observer} from "mobx-react";

@observer
class InventoryItem extends Component {
  render() {
    return (
        <li className="inventory_item">
          {this.props.item.short}
        </li>
    );
  }
}

export default InventoryItem;
