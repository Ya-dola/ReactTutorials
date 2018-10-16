import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Aadil" }, { name: "Zoy" }]
  };

  swtichNamesHandler = newName => {
    console.log("Button Clicked !");
    this.setState({ persons: [{ name: newName }, { name: "Zoy" }] });
  };

  render() {
    return (
      <div className="App">
        <h1>Test React Works</h1>
        <button onClick={this.swtichNamesHandler.bind(this, "Dola")}>
          Switch Names
        </button>
        <Person name={this.state.persons[0].name} />
        <Person
          name={this.state.persons[1].name}
          click={this.swtichNamesHandler.bind(this, "Dola !")}
        >
          Elloooo
        </Person>
      </div>
    );
  }
}

export default App;
