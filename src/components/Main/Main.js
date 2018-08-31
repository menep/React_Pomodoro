import React from "react";
import css from "./Main.css";
import Inputs from "./Inputs/Inputs";
import Display from "./Display/Display";
import Controls from "./Controls/Controls";

const activities = {
  work: "work",
  break: "break",
  cycles: "cycles"
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        // values from input forms are stored here
        work: 0,
        break: 0,
        cycles: 0
      },
      counter: {
        // values that influence the counter are stored here
        initiated: false,
        counting: false,
        minutes: 0,
        seconds: 0,
        cycles: null,
        activity: null,
        timerId: null
      }
    };
  }

  // stores input values into state
  inputChangeHandler = e => {
    const name = e.target.name;
    const value = Number(e.target.value);
    // TODO: issue when input has 3 digits
    if (
      // max values for each input, exits function if exceeded
      (name === activities.work && value > 60) ||
      (name === activities.break && value > 15) ||
      (name === activities.cycles && value > 10) || 
      value < 0 ||
      !Number.isInteger(value)
    )
      return;

    this.setState({
      input: {
        ...this.state.input,
        [name]: value
      }
    });
  };

  // invoked when start btn is clicked
  onStartHandler = () => {
    // missing one or more inputs, or is counter already active? exit function
    if (
      !this.state.input.work ||
      !this.state.input.break ||
      !this.state.input.cycles ||
      this.state.counter.counting
    )
      return;

    // counter logic
    const timerId = setInterval(() => {
      // create copies of state properties
      const input = { ...this.state.input };
      const prevCounter = { ...this.state.counter };

      // function that returns an object with the values to pass into setState later
      const updater = ({ minutes, seconds }) => {
        // are there minutes left in the counter?
        if (minutes > 0) {
          // if positive, check if there are no seconds left
          if (seconds === 0) {
            // if positive, subtract one minute, set seconds to 59
            return { ...prevCounter, minutes: minutes - 1, seconds: 59 };
          } else {
            // if negative, minutes don't change, subtract one second
            return { ...prevCounter, minutes, seconds: seconds - 1 };
          }
        } else {
          // since there are no minutes left, check:
          // are there no seconds left as well?
          if (seconds === 0) {
            // if positive, we need to switch activity
            if (prevCounter.activity === activities.work) {
              // if work period is over, switch to break and reset counter
              return {
                ...prevCounter,
                minutes: input.break - 1,
                seconds: 59,
                activity: activities.break
              };
            } else {
              // if break period is over, check if there are cycles left
              if (prevCounter.cycles > 0) {
                // if positive, then start a new cycle, switch activity to work, decrease cycles left, reset counters
                return {
                  ...prevCounter,
                  minutes: input.work - 1,
                  seconds: 59,
                  activity: activities.work,
                  cycles: prevCounter.cycles - 1
                };
              } else {
                // if no cycles are left, stop the counter, reset values
                clearInterval(prevCounter.timerId);
                return {
                  ...prevCounter,
                  activity: "done!",
                  cycles: null,
                  initiated: false,
                  counting: false,
                  timerId: null
                };
              }
            }
          } else {
            // if there are seconds left, return the same amount of minutes and decrease seconds
            return { ...prevCounter, minutes, seconds: seconds - 1 };
          }
        }
      };
      const updatedCounter = updater(prevCounter);
      this.setState({
        counter: {
          ...updatedCounter
        }
      });
    }, 1000); // end of counter logic

    // the following set the state upon which the counter will work
    // create copies of status properties
    const stateInput = { ...this.state.input };
    const stateCounter = { ...this.state.counter };

    let min, sec;
    if (!stateCounter.initiated) {
      // if counter had not been initiated, set minutes to input, activity to work, cycles to the input cycles minus one
      min = stateInput.work;
      sec = 0;
      stateCounter.activity = activities.work;
      stateCounter.cycles = stateInput.cycles - 1;
    } else {
      // if it had been paused, just set minutes and seconds to the previous values, so the clock can continue and don't modify any other value
      min = stateCounter.minutes;
      sec = stateCounter.seconds;
    }

    this.setState({
      counter: {
        initiated: true,
        counting: true,
        minutes: min,
        seconds: sec,
        cycles: stateCounter.cycles,
        activity: stateCounter.activity,
        timerId
      }
    });
  };

  // when stop is clicked, stop the interval
  onStopHandler = () => {
    clearInterval(this.state.counter.timerId);
    this.setState({
      counter: {
        ...this.state.counter,
        counting: false
      }
    });
  };

  // when reset is clicked, just set all values to the initial ones
  onResetHandler = () => {
    clearInterval(this.state.counter.timerId);
    this.setState({
      counter: {
        initiated: false,
        counting: false,
        minutes: 0,
        seconds: 0,
        cycles: null,
        activity: null,
        timerId: null
      }
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <main className={css.container}>
        <Inputs onChange={this.inputChangeHandler} />
        <Display
          minutes={counter.minutes}
          seconds={counter.seconds}
          cycles={counter.cycles}
          activity={counter.activity}
        />
        <Controls
          start={this.onStartHandler}
          stop={this.onStopHandler}
          reset={this.onResetHandler}
        />
      </main>
    );
  }
}

export default Main;
