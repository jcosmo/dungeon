import React, { Component } from 'react';

class CommandEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {term: '', lastCommand:''};
  }
  
  handleChange = (event) =>  this.setState({term: event.target.value});
  keyPress = (event) => {
    if (event.keyCode == 13) {
      this.setState({lastCommand: this.state.term, term: ''});
    }
  }
  
  render() {
    return (
      <input value={this.state.term} onChange={this.handleChange} onKeyDown={this.keyPress}/>
    );
  }
}

export default CommandEntry;
