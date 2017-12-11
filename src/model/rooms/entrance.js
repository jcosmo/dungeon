import appState from '../app_state'
import Item from '../item'

const thing = new Item(['thing', 'contraption'],
    'Thing',
    'A strange contraption with a propeller, a string and a small ball.\nPerhaps you could pull the string.');

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
  if ( args === 'balls') {
    appState.setFeedback("You juggle the balls and then stack them neatly on the floor");
    room.setDescription("You stand in the entrance to the house.\nA set of juggling balls is stacked neatly near the door.")
  } else {
    appState.setFeedback("Juggle what?");
  }
  return true;
};

room.addCommand("juggle", juggle);
