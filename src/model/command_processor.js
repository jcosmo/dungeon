import appState from "./app_state";

export default class CommandProcessor {
  static processCommand(fullCmd) {
    appState.clearFeedback();

    let cmd = fullCmd;
    let args = null;
    const match = fullCmd.match(/^([^\s]+)\s+(.*)/);
    if (match) {
      cmd = match[1];
      args = match[2]
    }
    if (appState.currentRoom.perform(cmd, args)) {
      return;
    }
    if (cmd === 'get') {
      if (args === null) {
        appState.setFeedback("Get what?");
      }
      else {
        appState.pickup(args)
      }
    }
    else if (cmd === 'drop') {
      if (args === null) {
        appState.setFeedback("Drop what?");
      }
      else {
        appState.drop(args)
      }
    }
    else if (cmd === 'help') {
      appState.showHelp();
    }
    else if (appState.currentRoom.exits[cmd]) {
      appState.clearFeedback();
      appState.moveto(appState.currentRoom.exits[cmd]);
    } else {
      appState.setFeedback(`I don't know what you mean by '${cmd}'.\nTry typing 'help' for help.`);
    }
  }
}
