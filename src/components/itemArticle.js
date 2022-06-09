import data from "../data/destination.json";
import React from "react";
// import { useState, useEffect } from "react";

function itemDestination() {

    const destination = data.destination;

    return (
      <div>
        {destination.filter()
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
        })}
      </div>
    );
  
}

export default itemDestination;