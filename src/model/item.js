import {observable, action} from "mobx";

export default class Item {
  ids = [];
  @observable short = "item";
  @observable description = "A generic item";
  commands = {};
  environment = undefined;

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

  perform(verb, args, container) {
    const command = this.commands[verb];
    if (command) {
      return command(verb, args, this, container);
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

  @action
  moveTo(env) {
    if (this.environment) {
      this.environment.removeFrom(this);
    }
    this.environment = env;
    this.environment.insertInto(this);
  }
}
