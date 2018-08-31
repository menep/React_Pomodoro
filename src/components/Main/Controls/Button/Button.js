import React from "react";
import css from "./Button.css";

const button = props => {
  return <button className={css.button} onClick={props.onClick}>{props.type}</button>;
};

export default button;
