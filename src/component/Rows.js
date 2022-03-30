import React from "react";
import classes from "./LokData.module.css";

const Rows = ({
  city,
  state,
  country,
  postcode,
  number,
  name,
  latitude,
  longitude,
}) => {
  return (
    <>
      <div className={classes.sec}>
        <h4>{city}</h4>
        <h4>{state}</h4>
        <h4>{country}</h4>
        <h4>{postcode}</h4>
        <h4>{number}</h4>
        <h4>{name}</h4>
        <h4>{latitude}</h4>
        <h4>{longitude}</h4>
      </div>
      <hr />
    </>
  );
};

export default Rows;
