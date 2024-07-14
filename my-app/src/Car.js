import React from 'react';

const Car  = ({ Cylinders, Enginecapacity, Enginetype, FuelType, imageURL }) => {
    return (
      <div className="card" style={{ width: "18rem", margin: "10px" }}>
        <img src={imageURL} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>Cylinders:</strong> {team}
            <br />
            <strong>Engine capacity:</strong> {nationality}
            <br />
            <strong>Engine Type:</strong> {jerseyNumber}
            <br />
            <strong>fuel Type</strong> {FuelType}
          </p>
        </div>
      </div>
    );
  };