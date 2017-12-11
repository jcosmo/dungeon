import appState from '../app_state'
import Item from '../item'

const catToy = new Item(['toy', 'cat toy'],
    'Cat Toy',
    'It\'s actually just a pair of old socks that the cat has bitten holes in and chased around the house');

appState.addRoom(
  'dining',
  'You stand beside a large wooden dining table surrounded by 6 chairs',
    {
      "downstairs": "entrance"
    },
    [
      catToy
    ]
);