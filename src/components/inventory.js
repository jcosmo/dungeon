import React, {Component} from 'react';
import {observer} from 'mobx-react';
import appState from '../model/app_state';
import InventoryItem from './inventory_item';

@observer
class Inventory extends Component {
  render() {
    let content;
    if (appState.inventory.empty) {
      content = <li className="inventory_item"> Not even any fluff </li>
    }
    else {
      content = appState.inventory.contents.map(item => <InventoryItem key={item.key()} item={item}/>)
    }
    return (
        <div className="inventory">
          <div className="header">Inventory</div>
          {content}
        </div>
    );
  }
}

export default Inventory;
