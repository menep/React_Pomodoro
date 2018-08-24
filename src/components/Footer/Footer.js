import React from "react";
import css from "./Footer.css";

const footer = props => {

  return (
    <footer className={css.container}>
      <p className={css.footnote}>
        {props.footerNote}
      </p>
      <a href="https://github.com/menep/" className={css.github}>See on GitHub</a>
    </footer>
  );
};

export default footer;
