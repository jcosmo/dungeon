import React, {Component} from 'react';
import ExitsDescription from './exits_description';
import ItemsDescription from './items_description';
import {observer} from 'mobx-react';

export default observer(
    class RoomDescription extends Component {
      render() {
        return (
            <div>
              <div className="description">
                {this.props.room.description}
              </div>
              <div className="items">
                Things here:&nbsp;
                <ItemsDescription items={this.props.room.items}/>
              </div>
              <div className="exits">
                Exits:&nbsp;
                <ExitsDescription exits={this.props.room.exits}/>
              </div>
            </div>
        );
      }
    });
