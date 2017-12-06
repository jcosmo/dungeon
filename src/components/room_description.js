import React, { Component } from 'react';
import ExitsDescription from './exits_description';

class RoomDescription extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div class="description">
        {this.props.room.description}
        </div>
        <div class="items">
          Things here:
          this.props.room.items
        </div>
        <div class="exits">
          Exits:
           <ExitsDescription exits={this.props.room.exits} />
        </div>
      </div>
    );
  }
}

export default RoomDescription;
