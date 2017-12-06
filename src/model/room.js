import {observable, action} from "mobx";

export default class Room {
  constructor(d, e, i) {
    this.description = d;
    this.exits = Object.assign({}, e);
    this.items = observable([].concat(i));
  }

  takeFrom = action( function (itemId) {
    const item = this.items.find(i => i.id = itemId);
    if (item) {
      this.items.remove(item);
    }
    return item;
  } );

  putInto = action( function (item) {
    this.items.push(item);
  } );
}
