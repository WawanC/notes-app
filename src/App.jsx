import { Component } from "react";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import NewNote from "./components/NewNote";
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
        <Modal>
          <NewNote />
        </Modal>
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
