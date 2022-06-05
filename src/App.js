import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  render() {
    return <h1>Notes App</h1>;
  }
}

export default App;
