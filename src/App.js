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

  namesChangesHandler = event => {
    this.setState({ persons: [{ name: event.target.value }, { name: "Zoy" }] });
  };

  render() {
    return (
      <div className="App">
        <h1>Test React Works</h1>
        <button onClick={this.swtichNamesHandler.bind(this, "Dola")}>
          Switch Names
        </button>
        <Person
          name={this.state.persons[0].name}
          changed={this.namesChangesHandler}
        />
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
