import Item from '../../model/item'

export default class CatToy extends Item {
  constructor() {
    super(['toy', 'cat toy'],
        'Cat Toy',
        'It\'s actually just a pair of old socks that the cat has bitten holes in and chased around the house')
  }
}
