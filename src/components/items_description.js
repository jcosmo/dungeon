import {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class ItemsDescription extends Component {
  render() {
    const items = this.props.items;
    if (!items || items.length === 0) {
      return "nothing";
    }
    return items.map(i => i.name).join(",");
  }
}

export default ItemsDescription;

