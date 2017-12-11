import {observable, action} from "mobx";

export default class Room {
  @observable description = "A blank room";
  @observable items = [];
  commands = {};

  constructor(d, e, i) {
    this.description = d;
    this.exits = Object.assign({}, e);
    this.items.push(...i);
  }

  addCommand(cmd, action) {
    this.commands[cmd] = action;
  };

  @action
  addItem(item) {
    this.items.push(item);
  };

  perform(verb, args) {
    // if (this.items.find(i => i.perform(verb, args))) {
    //   return true;
    // }
    const command = this.commands[verb];
    if (command) {
      return command(verb, args, this);
    }
    return false;
  };

  @action
  takeFrom(itemId) {
    const item = this.items.find(i => i.matches(itemId));
    if (item) {
      this.items.remove(item);
    }
    return item;
  }

  @action
  putInto(item) {
    this.items.push(item);
  };

  @action
  setDescription(text) {
    this.description = text;
  };
}
