import React, {Component} from 'react';

class CommandEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {term: '', lastCommand: ''};
  }

  handleChange = (event) => this.setState({term: event.target.value});
  keyPress = (event) => {
    if (event.keyCode === 13) {
      const command = this.state.term.trim();
      this.setState({lastCommand: command, term: ''});
      if (command !== "") {
        this.props.onCommand(command);
      }
    }
  };

  render() {
    return (
        <div className="command_entry">
          <input value={this.state.term} onChange={this.handleChange} onKeyDown={this.keyPress}/>
        </div>
    );
  }
}

export default CommandEntry;
