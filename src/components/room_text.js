import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class RoomText extends Component {
  render() {
    const text = this.props.text;
    const content = text.split(/\n/).map((line, idx) => <div key={idx}>{line}</div>)
    return content;
  }
}

export default RoomText;

