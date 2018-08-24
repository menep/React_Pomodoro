import React from "react";
import css from "./Controls.css";
import Button from "./Button/Button";

const controls = props => {
  return (
    <div className={css.container}>
      <Button type="start" />
      <Button type="stop" />
      <Button type="reset" />
    </div>
  );
};

export default controls;
