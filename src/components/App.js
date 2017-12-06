import React, {Component} from "react";
import logo from "../images/logo.svg";
import "../style/App.css";
import RoomDescription from "./room_description";
import CommandEntry from "./command_entry";
import Room from '../model/room';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoom: new Room("entrance", {"east":"east", "north":"north"}, {"A dog":"woof"})

    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to the dungeon</h1>
        </header>
        <div className="content">
          <div className="room_description">
            <RoomDescription room={this.state.currentRoom}/>
          </div>
          <div className="command_entry">
            <CommandEntry onCommand={this.processCommand}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
