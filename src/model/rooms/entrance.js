import appState from '../app_state'

const room = appState.addRoom(
    'entrance',
    'You stand in the entrance to the house.  A set of juggling balls is on the floor.',
    {
      "corridor": "corridor1",
      "upstairs": "dinning"
    },
    [
      {id: 'thing', name: 'thing'}
    ]
);

const juggle = function (cmd, args, room) {
  if ( args === 'balls') {
    appState.setFeedback("You juggle the balls and then stack them neatly on the floor");
    room.setDescription("You stand in the entrance to the house.  A set of juggling balls is stacked neatly near the door.")
  } else {
    appState.setFeedback("Juggle what?");
  }
  return true;
};

room.addCommand("juggle", juggle);
