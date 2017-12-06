import {observable} from "mobx";

export default class Room {
  constructor(d, e, i) {
    this.description = d;
    this.exits = Object.assign({}, e);
    this.items = Object.assign({}, e);
  }
}
