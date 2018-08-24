import React, { Component } from "react";
import css from "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className={css.container}>
        <Header />
        <Main />
        <Footer footerNote="A project by Menep" />
      </div>
    );
  }
}

export default App;
