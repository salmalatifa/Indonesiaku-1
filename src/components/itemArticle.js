import data from "../data/destination.json";
import React from "react";
import destination from "../data/Destination";
import { v4 as uuid } from "uuid";
import "../styles/coba.css"
// import { useState, useEffect } from "react";

class itemDestination extends React.Component {
  render() {
    const destiny = data.wisata;

    return (
      <div>
        {/* {destination
        .map((data, index) => {
          return (
            <div className="destination" key={data.id}>
              <h3> {data.name} </h3>
              <img
                className="Tour__Image"
                src={data.picture}
                alt={`Pemandangan wisata ${data.name}`}
              />
              <p className="description"> {data.description} </p>
            </div>
          );
        })} */}
        <CardComp arrydata={data.destination} />
      </div>
    );
  }
}

let CardComp = function (props) {
  //ALl data Array
  var destinationId = uuid().slice(1, 16);
  
  const listData = props.arrydata.map(function (data) {
    return (
      <div className="card-label" key={destinationId}>
        {data.name}
      </div>
    );
  });
  return <div>{listData}</div>;
};

export default itemDestination;
