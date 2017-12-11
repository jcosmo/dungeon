import {observable, action, computed} from "mobx";
import Room from "./room";

class AppState {
  @observable allRooms = {};
  @observable currentRoom = undefined;
  @observable feedback = undefined;
  @observable inventory = [];

  @action
  moveto(roomId) {
    if (this.allRooms[roomId]) {
      this.currentRoom = this.allRooms[roomId];
    } else {
      this.feedback = `No such room: '${roomId}'`;
    }
  };

  @action
  addRoom(id, d, e, i) {
    return (this.allRooms[id] = new Room(d, e, i));
  };

  @action
  pickup(itemId) {
    const item = this.currentRoom.takeFrom(itemId);
    if (item) {
      this.inventory.push(item);
      this.feedback = `You pick up a ${item.name}.`
    } else {
      this.feedback = `There is no ${itemId} here.`
    }
  };

  @action
  drop(itemId) {
    const item = this.inventory.find((item, index, array) => item.id === itemId);
    if (item) {
      this.inventory.remove(item);
      this.currentRoom.putInto(item);
      this.feedback = `You drop a ${item.name}.`
    } else {
      this.feedback = `You are not carrying a ${itemId}.`
    }
  };

  @action
  showHelp() {
    this.feedback = 'Commands:\n - [exit name] to move\n - get [thing]\n - drop [thing]'
  };

  @action
  clearFeedback() {
    this.feedback = undefined;
  };

  @action
  setFeedback(feedback) {
    this.feedback = feedback;
  };

  @computed
  get inventorySize() {
    return this.inventory.size;
  }

  @computed
  get inventoryEmpty() {
    return this.inventory.size === 0;
  }
}

export default new AppState();