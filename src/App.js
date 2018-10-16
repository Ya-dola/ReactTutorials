import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Aadil" }, { name: "Zoy" }]
  };

  swtichNamesHandler = () => {
    console.log("Button Clicked !");
    this.setState({ persons: [{ name: "Dola" }, { name: "Zoy" }] });
  };

  render() {
    return (
      <div className="App">
        <h1>Test React Works</h1>
        <button onClick={this.swtichNamesHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name}>Elloooo</Person>
      </div>
    );
  }
}

export default App;
