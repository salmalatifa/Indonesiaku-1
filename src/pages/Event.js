import React, { Component } from "react";
import Header from "../components/Header";

class Event extends Component {
  render() {
    return (
      <div className="div">
        <div>
          <Header />
        </div>
        <div className="cotent-event">
          <h1>Event nih</h1>
        </div>
      </div>
    );
  }
}

export default Event;
