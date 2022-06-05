import { Component } from "react";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      showModal: false,
    };
  }

  toggleModal(value) {
    this.setState((state) => ({ ...state, showModal: value }));
  }

  addNewNote(title, content) {
    const newNote = {
      id: +new Date(),
      title: title,
      content: content,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    const newNotes = [...this.state.notes];
    newNotes.push(newNote);

    this.setState((state) => ({ ...state, notes: newNotes, showModal: false }));
  }

  render() {
    return (
      <>
        {this.state.showModal && (
          <Modal onClose={() => this.toggleModal(false)}>
            <NewNote onAddNewNote={this.addNewNote.bind(this)} />
          </Modal>
        )}
        <Navbar />
        <main>
          <button onClick={() => this.toggleModal(true)}>Add New Note</button>
          <NoteList notes={this.state.notes} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
