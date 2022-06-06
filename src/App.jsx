import { Component } from "react";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";
import NoteTypeMenu from "./components/NoteTypeMenu";
import Search from "./components/Search";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      showModal: false,
      searchKeyword: "",
      selectedNoteType: "active",
    };
  }

  toggleModal = (value) => {
    this.setState((state) => ({ ...state, showModal: value }));
  };

  addNewNote = (title, content) => {
    const newNote = {
      id: +new Date(),
      title: title,
      content: content,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    const updatedNotes = [...this.state.notes];
    updatedNotes.push(newNote);

    this.setState((state) => ({
      ...state,
      notes: updatedNotes,
      showModal: false,
    }));
  };

  deleteNote = (id) => {
    const updatedNotes = [...this.state.notes].filter((note) => note.id !== id);
    this.setState((state) => ({ ...state, notes: updatedNotes }));
  };

  changeSearchKeyword = (value) =>
    this.setState((state) => ({ ...state, searchKeyword: value }));

  changeSelectedNoteType = (value) =>
    this.setState((state) => ({ ...state, selectedNoteType: value }));

  render() {
    let displayedNotes = this.state.notes;
    if (this.state.searchKeyword.length > 0) {
      displayedNotes = this.state.notes.filter((note) =>
        note.title
          .toLowerCase()
          .includes(this.state.searchKeyword.toLowerCase())
      );
    }

    return (
      <>
        {this.state.showModal && (
          <Modal onClose={() => this.toggleModal(false)}>
            <NewNote onAddNewNote={this.addNewNote} />
          </Modal>
        )}
        <Navbar />
        <main>
          <Search
            value={this.state.searchKeyword}
            onChange={this.changeSearchKeyword}
          />
          <button onClick={() => this.toggleModal(true)}>Add New Note</button>
          <NoteTypeMenu
            value={this.state.selectedNoteType}
            onChange={this.changeSelectedNoteType}
          />
          <NoteList notes={displayedNotes} onDelete={this.deleteNote} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
