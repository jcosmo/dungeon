import React, {Component} from 'react';
import {observer} from 'mobx-react';
import appState from '../model/app_state';

export default observer(
    class Inventory extends Component {
      render() {
        var content;
        if (appState.inventory.size === 0) {
          content = "Nothing here!"
        }
        else {
          content = <div>{appState.inventory.size} items</div>
        }
        return (
            <div>
              <div className="header">Inventory</div>
              <div>
                {content}
              </div>
            </div>
        );
      }
    });
