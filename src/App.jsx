import { Component } from "react";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  render() {
    return (
      <>
        <Navbar />
      </>
    );
  }
}

export default App;
