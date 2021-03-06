import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>I am {props.name} !!!</p>
      <p>{props.children}</p>
      <input type="Text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
