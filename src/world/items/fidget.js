import appState from '../../model/app_state'
import Item from '../../model/item'

class Fidget extends Item {
  constructor() {
    super(['thing', 'contraption'],
        'Thing',
        'A strange contraption with a propeller, a string and a small ball.\nPerhaps you could pull the string.');

    this.addCommand('pull', (verb, args) => {
      if (args === 'string') {
        if (this.isHeldByPlayer) {
          appState.setPossibleFeedback('You would have to be holding the thing to do that.');
          return false;
        } else {
          appState.setFeedback('You pull the string on the thing and the propeller spins violently for a period of time.');
          this.setShort("Thing (spinning)");
          setTimeout(() => this.setShort("Thing"), 5000);
          return true;
        }
      } else {
        appState.setPossibleFeedback('Pull what?');
        return false;
      }
    });
  }
}

export default Fidget;