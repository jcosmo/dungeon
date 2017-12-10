import React, {Component} from "react";
import {observer} from "mobx-react";
import appState from "../model/app_state";

@observer
class Feedback extends Component {
  render() {
    var content;
    if (appState.feedback) {
      content = appState.feedback.split(/\n/).map((line, idx) => <div key={idx}>{line}</div>)
    }
    return <div className="feedback">{content}</div>
  }
}

export default Feedback;
