import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test React Works</h1>
        <Person name = "Aadil" />
      </div>
    );
  }
}

export default App;
