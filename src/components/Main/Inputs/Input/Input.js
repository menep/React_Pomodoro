import React from "react";
import css from "./Input.css";

const input = props => {
  const text = props.id.toUpperCase();
  return (
    <div className={css.container}>
      <label htmlFor={props.id} className={css.label}>{text}</label>
      <input
        type="number"
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        required
        className={css.input}
        onChange={props.onChange}
      />
    </div>
  );
};

export default input;
