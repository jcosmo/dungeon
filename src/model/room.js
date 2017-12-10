import {observable, action} from "mobx";

export default class Room {
  constructor(d, e, i) {
    this.description = d;
    this.exits = Object.assign({}, e);
    this.items = observable([].concat(i));
    this.commands = {};
  }

  addCommand = function (cmd, action) {
    this.commands[cmd] = action;
  };

  perform = function (cmd, args) {
    const action = this.commands[cmd];
    if (action) {
      return action(cmd, args, this);
    }
    return false;
  };

  takeFrom = action(function (itemId) {
    const item = this.items.find(i => i.id === itemId);
    if (item) {
      this.items.remove(item);
    }
    return item;
  });

  putInto = action(function (item) {
    this.items.push(item);
  });

  setDescription = action(function (text) {
    this.description = text;
  });
};
