import React from "react";
import css from "./Display.css";

const display = props => {
  let seconds;
  if (props.seconds === 60) {
    seconds = "00";
  } else if (props.seconds < 10) {
    seconds = `0${props.seconds}`;
  } else seconds = props.seconds;

  const minutes = props.minutes < 10 ? `0${props.minutes}` : props.minutes;

  return (
    <div className={css.container}>
      <p className={css.activity}>{props.activity}</p>
      <p className={css.time}>
        {minutes}:{seconds}
      </p>
      <p className={css.cycles}>{props.cycles}</p>
    </div>
  );
};

export default display;
