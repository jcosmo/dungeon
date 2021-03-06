import React, {Component} from 'react';
import ExitsDescription from './exits_description';
import ItemsDescription from './items_description';
import RoomText from './room_text';
import {observer} from 'mobx-react';

@observer
class RoomDescription extends Component {
  render() {
    return (
        <div className="room_description">
          <div className="description">
            <RoomText text={this.props.room.description}/>
          </div>
          <div className="items">
            Things here:&nbsp;
            <ItemsDescription items={this.props.room.contents}/>
          </div>
          <div className="exits">
            Exits:&nbsp;
            <ExitsDescription exits={this.props.room.exits}/>
          </div>
        </div>
    );
  }
}

export default RoomDescription;
