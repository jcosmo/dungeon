import React, {Component} from "react";
import logo from "../images/logo.svg";
import {observer} from 'mobx-react';
import "../style/App.css";
import RoomDescription from "./room_description";
import CommandEntry from "./command_entry";
import Inventory from "./inventory";
import appState from '../model/app_state'
import '../model/rooms'
appState.moveto("corridor1");
appState.pickup({id:"thing",desc:"whatsit"});

export default observer(
class App extends Component {
  processCommand = (cmd) => {
    appState.processCommand(cmd);
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to the dungeon</h1>
          </header>
          <div className="content">
            <div className="room_description">
              <RoomDescription room={appState.currentRoom}/>
            </div>
            <div className="command_entry">
              <CommandEntry onCommand={this.processCommand}/>
            </div>
            <div className="feedback">
              {appState.feedback}
            </div>
          </div>
          <Inventory />
        </div>
    );
  }
});
