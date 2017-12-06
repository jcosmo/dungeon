import React, { Component } from 'react';
import ExitsDescription from './exits_description';
import ItemsDescription from './items_description';

class RoomDescription extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div className="description">
        {this.props.room.description}
        </div>
        <div className="items">
          Things here:
          <ItemsDescription items={this.props.room.items} />
        </div>
        <div className="exits">
          Exits:
           <ExitsDescription exits={this.props.room.exits} />
        </div>
      </div>
    );
  }
}

export default RoomDescription;
