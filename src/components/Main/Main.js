import React from "react";
import css from "./Main.css";
import Inputs from "./Inputs/Inputs";
import Display from "./Display/Display";
import Controls from "./Controls/Controls";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: 25,
      break: 5,
      cycles: 1,
      counterMin: 25,
      counterSec: 0
    };
  }

  inputChangeHandler = e => {
    const name = e.target.name;
    const value = Number(e.target.value);
    // value over what admitted?
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <main className={css.container}>
        <Inputs changed={this.inputChangeHandler} />
        <Display minutes={this.state.work} cycles={this.state.cycles} />
        <Controls />
      </main>
    );
  }
}

export default Main;
