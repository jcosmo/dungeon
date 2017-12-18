import {observable, action} from "mobx";
import appState from './app_state';

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

  moveTo(env) {
    if (this.environment) {
      this.environment.removeFrom(this);
    }
    this.environment = env;
    if (this.environment) {
      this.environment.insertInto(this);
    }
  }

  get isHeldByPlayer() {
    return this.environment !== appState.player
  }
}
