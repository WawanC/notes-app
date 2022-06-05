import { Component } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/App.css";

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
        <main>
          <button>Add New Note</button>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
