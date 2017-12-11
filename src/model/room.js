import {observable, action} from "mobx";

export default class Room {
  @observable description = "A blank room";

  constructor(d, e, i) {
    this.description = d;
    this.exits = Object.assign({}, e);
    this.items = observable([].concat(i));
    this.commands = {};
  }

  addCommand(cmd, action) {
    this.commands[cmd] = action;
  };

  perform(cmd, args) {
    const action = this.commands[cmd];
    if (action) {
      return action(cmd, args, this);
    }
    return false;
  };

  @action
  takeFrom(itemId) {
    const item = this.items.find(i => i.id === itemId);
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
