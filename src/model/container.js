import {observable, action, computed} from "mobx";

export default class Inventory {
  @observable contents = [];

  perform(verb, args) {
    return !!this.contents.find(i => i.perform(verb, args));
  };

  @action
  put(item) {
    this.contents.push(item);
  };

  contains(itemId) {
    return this.contents.find(i => i.matches(itemId));
  }

  @action
  remove(itemId) {
    const item = this.contents.find((item, index, array) => item.matches(itemId));
    if (item) {
      this.contents.remove(item);
    }
    return item;
  };

  @action
  removeFrom(item) {
    this.contents.remove(item);
  }

  @action
  insertInto(item) {
    this.contents.push(item);
  }

  @computed
  get size() {
    return this.contents.size;
  }

  @computed
  get empty() {
    return this.size === 0;
  }
}
