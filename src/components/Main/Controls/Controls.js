import React from "react";
import css from "./Controls.css";
import Button from "./Button/Button";

const controls = props => {
  return (
    <div className={css.container}>
      {["start", "stop", "reset"].map(el => <Button key={el} type={el} onClick={props[el]} />)}
    </div>
  );
};

export default controls;