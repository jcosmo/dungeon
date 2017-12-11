import {observable, action} from "mobx";

export default class Item {
  ids = [];
  @observable short = "item";
  @observable description = "A generic item";
  commands = {};


  constructor(i, short, description) {
    this.ids.push(...i);
    this.short = short;
    this.description = description || short;
  }

  matches(id) {
    return this.ids.find(i => i === id) !== undefined;
  }

  addCommand(cmd, action) {
    this.commands[cmd] = action;
  };

  perform(verb, args) {
    const command = this.commands[verb];
    if (command) {
      return command(verb, args, this);
    }
    return false;
  };

  @action
  setShort(text) {
    this.short = text;
  };

  @action
  setDescription(text) {
    this.description = text;
  };

  key() {
    return this.ids[0];
  }
}
