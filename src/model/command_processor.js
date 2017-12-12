import appState from "./app_state";

export default class CommandProcessor {
  static processCommand(fullCmd) {
    appState.clearFeedback();

    let verb = fullCmd;
    let args = null;
    const match = fullCmd.match(/^([^\s]+)\s+(.*)/);
    if (match) {
      verb = match[1];
      args = match[2]
    }
    if (appState.inventory.find(i => i.perform(verb, args, undefined))) {
      return;
    }
    if (appState.currentRoom.perform(verb, args)) {
      return;
    }
    if (verb === 'get') {
      if (args === null) {
        appState.setPossibleFeedback("Get what?");
      }
      else {
        appState.pickup(args)
      }
    }
    else if (verb === 'drop') {
      if (args === null) {
        appState.setPossibleFeedback("Drop what?");
      }
      else {
        appState.drop(args)
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
