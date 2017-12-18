import {observable, action, computed} from "mobx";
import Room from "./room";
import Inventory from "./inventory";

class AppState {
  @observable allRooms = {};
  @observable currentRoom = undefined;
  @observable feedback = undefined;
  inventory = new Inventory();
  possibleFeedback = undefined;

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
      this.feedback = `You pick up a ${item.short}.`
    } else {
      this.feedback = `There is no ${itemId} here.`
    }
  };

  @action
  drop(itemId) {
    const item = this.inventory.find((item, index, array) => item.matches(itemId));
    if (item) {
      this.inventory.remove(item);
      this.currentRoom.putInto(item);
      this.feedback = `You drop a ${item.short}.`
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
    this.possibleFeedback = undefined;
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

  setPossibleFeedback( feedback ) {
    this.possibleFeedback = feedback;
  }

  finaliseFeedback( text ) {
    if (!this.possibleFeedback ) {
      this.setFeedback(text);
    }
    else {
      this.setFeedback(this.possibleFeedback);
      this.possibleFeedback = undefined;
    }
  }

  get player() {
    return this.inventory;
  }
}

export default new AppState();