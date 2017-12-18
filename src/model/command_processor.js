import appState from "./app_state";

export default class CommandProcessor {
  static processCommand(fullCmd) {
    appState.clearFeedback();

    let verb = fullCmd;
    let args = null;
    const match = fullCmd.match(/^([^\s]+)\s+(.*)/);
    if (match) {
      verb = match[1].trim();
      args = match[2].trim();
    }
    if (appState.inventory.perform(verb, args)) {
      return;
    }
    if (appState.currentRoom.perform(verb, args)) {
      return;
    }
    if (verb === 'get') {
      appState.setPossibleFeedback("Get what?");
      if (args !== null) {
        const item = appState.currentRoom.contains(args);
        if (item) {
          item.moveTo(appState.inventory);
          appState.setFeedback("You pick up a " + item.short);
        }
      }
    }
    else if (verb === 'drop') {
      appState.setPossibleFeedback("Drop what?");
      if (args !== null) {
        const item = appState.inventory.contains(args);
        if (item) {
          item.moveTo(appState.currentRoom);
          appState.setFeedback("You drop a " + item.short);
        }
      }
    }
    else if (verb === 'examine' || verb === 'look') {
      appState.setPossibleFeedback(`${verb} what?`);
      if (verb === 'look') {
        const match = args.match(/^at\s+(.*)/);
        if (match) {
          args = match[1].trim();
        }
        let item = appState.inventory.contains(args);
        if (!item){
          item = appState.currentRoom.contains(args);
        }
        if (item){
          appState.setFeedback(`You see:\n${item.description}`);
        }
      }
    }
    else if (verb === 'help') {
      appState.showHelp();
    }
    else if (appState.currentRoom.exits[verb]) {
      appState.clearFeedback();
      appState.moveto(appState.currentRoom.exits[verb]);
    } else {
      appState.finaliseFeedback(`I don't know what you mean by '${verb}'.\nTry typing 'help' for help.`);
    }
  }
}
