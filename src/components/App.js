import React, {Component} from "react";
import logo from "../images/logo.svg";
import {observer} from 'mobx-react';
import "../style/App.css";
import RoomDescription from "./room_description";
import CommandEntry from "./command_entry";
import Inventory from "./inventory";
import Feedback from "./feedback";
import CommandProcessor from "../model/command_processor";
import appState from '../model/app_state'
import '../world/rooms'

appState.moveto("entrance");

@observer
class App extends Component {
  render() {
    return (
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo"/>
            <h1 className="app-title">Welcome to the dungeon</h1>
          </header>
          <div className="content">
            <div className="content1">
              <RoomDescription room={appState.currentRoom}/>
              <CommandEntry onCommand={(cmd) => CommandProcessor.processCommand(cmd)}/>
              <Feedback/>
            </div>
            <Inventory/>
          </div>
        </div>
    );
  }
}

export default App;
