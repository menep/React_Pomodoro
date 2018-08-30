import React from "react";
import css from "./Inputs.css";
import Input from "./Input/Input";

const inputs = props => {
  return (
    <div className={css.container}>
      <Input id="work" val="25" min="1" max="60" changed={props.changed} />
      <Input id="break" val="5" min="1" max="15" changed={props.changed} />
      <Input id="cycles" val="3" min="1" max="10" changed={props.changed} />
    </div>
  );
};

export default inputs;
