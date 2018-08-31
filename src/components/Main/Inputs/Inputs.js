import React from "react";
import css from "./Inputs.css";
import Input from "./Input/Input";

const inputs = props => {
  return (
    <div className={css.container}>
      <Input id="work" placeholder="25" min="1" max="60" onChange={props.onChange} />
      <Input id="break" placeholder="5" min="1" max="15" onChange={props.onChange} />
      <Input id="cycles" placeholder="3" min="1" max="10" onChange={props.onChange} />
    </div>
  );
};

export default inputs;
