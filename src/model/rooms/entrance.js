import appState from '../app_state'
import Item from '../item'

const thing = new Item(['thing', 'contraption'],
    'Thing',
    'A strange contraption with a propeller, a string and a small ball.\nPerhaps you could pull the string.');

thing.addCommand('pull', (verb, args, item, container) => {
  if (args === 'string') {
    if (container) {
      appState.setPossibleFeedback('You would have to be holding the thing to do that.');
      return false;
    } else {
      appState.setFeedback('You pull the string on the thing and the propeller spins violently for a period of time.');
      return true;
    }
  } else {
    appState.setPossibleFeedback('Pull what?');
    return false;
  }
});

const room = appState.addRoom(
    'entrance',
    'You stand in the entrance to the house.\nA set of juggling balls is on the floor.',
    {
      "corridor": "corridor1",
      "upstairs": "dining"
    },
    [
      thing
    ]
);

const juggle = function (cmd, args, room) {
  if (args === 'balls') {
    appState.setFeedback("You juggle the balls and then stack them neatly on the floor");
    room.setDescription("You stand in the entrance to the house.\nA set of juggling balls is stacked neatly near the door.")
    return true;
  } else {
    appState.setPossibleFeedback("Juggle what?");
    return false;
  }
};

room.addCommand("juggle", juggle);
