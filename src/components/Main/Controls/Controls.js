import React from "react";
import css from "./Controls.css";
import Button from "./Button/Button";

const controls = props => {
  return (
    <div className={css.container}>
      <Button type="start" click={props.start} />
      <Button type="stop" click={props.stop}/>
      <Button type="reset" click={props.reset}/>
    </div>
  );
};

export default controls;
