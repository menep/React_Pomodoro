import React from "react";
import css from "./Button.css";

const button = props => {
  return <button className={css.button}>{props.type}</button>;
};

export default button;
