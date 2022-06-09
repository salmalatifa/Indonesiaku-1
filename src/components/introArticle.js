import React from "react";
import data from "../data/intro.json";

export default class Intro extends React.Component {
  render() {
    const dataIntro = data.destination;
    return (
      <div className="intro">
        <div className="intro1">
          <h2> {dataIntro.city} </h2> <p> {dataIntro.intro1} </p>{" "}
        </div>{" "}
        <div className="intro2">
          <h2> {dataIntro.title2} </h2> <p> {dataIntro.intro2} </p>{" "}
        </div>{" "}
      </div>
    );
  }
}
