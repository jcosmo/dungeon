import appState from '../../model/app_state'
import CatToy from '../items/cat_toy'

appState.addRoom(
  'dining',
  'You stand beside a large wooden dining table surrounded by 6 chairs',
    {
      "downstairs": "entrance"
    },
    [
      new CatToy(),
      new CatToy()
    ]
);