import {observable, action, computed, extendObservable} from "mobx";
import Room from "./room";

const appState = observable({
  allRooms: {},
  currentRoom: undefined,
  feedback: undefined,
  inventory: observable([])
});

appState.moveto = action(function (roomId) {
  if (appState.allRooms[roomId]) {
    appState.currentRoom = appState.allRooms[roomId];
    console.log(`Now in ${roomId}`);
  } else {
    appState.feedback = `No such room: '${roomId}'`;
  }
});

appState.addRoom = action(function (id, d, e, i) {
  appState.allRooms[id] = new Room(d, e, i);
});

appState.pickup = action(function (itemId) {
  const item = appState.currentRoom.takeFrom(itemId);
  if (item) {
    appState.inventory.push(item);
    appState.feedback = `You pick up a ${item.name}.`
  } else {
    appState.feedback = `There is no ${itemId} here.`
  }
});

appState.drop = action(function (itemId) {
  const item = appState.inventory.find((item, index, array) => item.id === itemId);
  if (item) {
    appState.inventory.remove(item);
    appState.currentRoom.putInto(item);
    appState.feedback = `You drop a ${item.name}.`
  } else {
    appState.feedback = `You are not carrying a ${itemId}.`
  }
});

appState.showHelp = action( function() {
  appState.feedback = 'Commands:\n - [exit name] to move\n - get [thing]\n - drop [thing]'
});

appState.clearFeedback = action( function() {
  appState.feedback = undefined;
});

appState.setFeedback = action( function(feedback) {
  appState.feedback = feedback;
});

extendObservable(appState, {
  inventorySize: computed(function () {
    return appState.inventory.size;
  }),

  inventoryEmpty: computed(function () {
    return appState.inventory.size === 0;
  })
});

export default appState;