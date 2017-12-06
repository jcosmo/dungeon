import {observable, action, computed, extendObservable} from 'mobx';
import Room from './room';

const appState = observable({
  allRooms: {},
  currentRoom: undefined,
  feedback: undefined,
  inventory: observable.map()
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

appState.pickup = action(function (item) {
  appState.inventory.set(item.id, item);
  console.log(`Inventory now contains ${item.id}`)
});

appState.drop = action(function (itemId) {
  appState.inventory.delete(itemId);
});

extendObservable(appState, {
  inventorySize: computed(function() {
    return appState.inventory.size;
  }),

  inventoryEmpty: computed(function() {
    return appState.inventory.size === 0;
  })
});

appState.processCommand = action(function (cmd) {
  if (cmd === 'get') {
    appState.pickup({id:'whatsit'})
  }
  else if (appState.currentRoom.exits[cmd]) {
    appState.feedback = undefined;
    appState.moveto(appState.currentRoom.exits[cmd]);
  } else {
    appState.feedback = `I don't know what you mean by '${cmd}'`;
  }
});

export default appState;