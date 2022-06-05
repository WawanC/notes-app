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
      showModal: false,
    };
  }

  toggleModal(value) {
    this.setState({ ...this.state, showModal: value });
  }

  render() {
    return (
      <>
        {this.state.showModal && (
          <Modal onClose={() => this.toggleModal(false)}>
            <NewNote />
          </Modal>
        )}
        <Navbar />
        <main>
          <button onClick={() => this.toggleModal(true)}>Add New Note</button>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
