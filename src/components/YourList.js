import React, { Component } from "react";
import Mentor from "./Mentor";

class YourList extends React.Component {
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>My Upcoming Meetings</h2>

            {this.props.yourMentors.map(mentor => (
              <Mentor mentor={mentor} removeMentor={this.props.removeMentor} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default YourList;
