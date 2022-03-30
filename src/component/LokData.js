import React from "react";
import Rows from "./Rows";
import classes from "./LokData.module.css";

const LokData = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.wrapper}>
      <div className={classes.first}>
        <h3>City</h3>
        <h3>state</h3>
        <h3>country</h3>
        <h3>postcode</h3>
        <h3>number</h3>
        <h3>name</h3>
        <h3>latitude</h3>
        <h3>longitude</h3>
      </div>
      <hr />

      {data.map((one) => (
        <Rows
          city={one.location.city}
          state={one.location.state}
          country={one.location.country}
          postcode={one.location.postcode}
          number={one.location.street.number}
          name={`${one.name.first} ${one.name.last}`}
          latitude={one.location.coordinates.latitude}
          longitude={one.location.coordinates.longitude}
        />
      ))}
    </div>
  );
};

export default LokData;
