import appState from '../../model/app_state'
import Fidget from '../items/fidget'

const room = appState.addRoom(
    'entrance',
    'You stand in the entrance to the house.\nA set of juggling balls is on the floor.',
    {
      "corridor": "corridor1",
      "upstairs": "dining"
    },
    [
      new Fidget()
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
