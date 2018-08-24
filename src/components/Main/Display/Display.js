import React from "react";
import css from "./Display.css";

const display = props => {
  return (
    <div className={css.container}>
      <p className={css.type}>work</p>
      <p className={css.time}>
        {props.minutes < 10 ? `0${props.minutes}` : props.minutes}
        <span />
        :00
      </p>
      <p className={css.cycles}>{props.cycles}</p>
    </div>
  );
};

export default display;
