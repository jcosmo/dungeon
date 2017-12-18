import {observable, action} from "mobx";
import Container from './container';

export default class Room extends Container {
  @observable description = "A blank room";
  commands = {};

  constructor(d, e, i) {
    super();
    this.description = d;
    this.exits = Object.assign({}, e);
    i.forEach(x => x.moveTo(this));
  }

  addCommand(cmd, action) {
    this.commands[cmd] = action;
  }

  perform(verb, args) {
    if (super.perform(verb, args)) {
      return true;
    }
    const command = this.commands[verb];
    if (command) {
      return command(verb, args, this);
    }
    return false;
  };

  @action
  setDescription(text) {
    this.description = text;
  };
}
