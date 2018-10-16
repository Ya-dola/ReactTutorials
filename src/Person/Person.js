import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>I am {props.name} !!!</p>
      <p>{props.children}</p>
      <input type="Text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
