import { Component, createRef } from "react";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";
import NoteTypeMenu from "./components/NoteTypeMenu";
import Search from "./components/Search";
import "./styles/App.css";
import { getInitialData } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      showModal: false,
      searchKeyword: "",
      selectedNoteType: "active",
    };

    this.modalRef = createRef();
  }

  componentDidMount() {
    const initialNotes = getInitialData();
    this.setState((state) => ({ ...state, notes: initialNotes }));
  }

  toggleModal = (value) => {
    if (!value) {
      this.modalRef.current.style.animation = "modalPopdown 0.25s";
      setTimeout(
        () => this.setState((state) => ({ ...state, showModal: value })),
        200
      );
    } else {
      this.setState((state) => ({ ...state, showModal: value }));
    }
  };

  addNewNote = (title, body) => {
    const newNote = {
      id: +new Date(),
      title: title,
      body: body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    const updatedNotes = [...this.state.notes];
    updatedNotes.push(newNote);

    this.setState((state) => ({
      ...state,
      notes: updatedNotes,
    }));
    this.toggleModal(false);
  };

  deleteNote = (id) => {
    const updatedNotes = [...this.state.notes].filter((note) => note.id !== id);
    this.setState((state) => ({ ...state, notes: updatedNotes }));
  };

  toggleArchived = (id, value) => {
    const updatedNotes = [...this.state.notes];
    const noteIdx = updatedNotes.findIndex((note) => note.id === id);
    if (noteIdx < 0) return;
    updatedNotes[noteIdx].archived = value;

    this.setState((state) => ({ ...state, notes: updatedNotes }));
  };

  changeSearchKeyword = (value) =>
    this.setState((state) => ({ ...state, searchKeyword: value }));

  changeSelectedNoteType = (value) =>
    this.setState((state) => ({ ...state, selectedNoteType: value }));

  render() {
    let displayedNotes = this.state.notes.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    if (this.state.searchKeyword.length > 0) {
      displayedNotes = this.state.notes.filter((note) =>
        note.title
          .toLowerCase()
          .includes(this.state.searchKeyword.toLowerCase())
      );
    }
    displayedNotes = displayedNotes.filter((note) =>
      this.state.selectedNoteType === "active" ? !note.archived : note.archived
    );

    return (
      <>
        {this.state.showModal && (
          <Modal onClose={() => this.toggleModal(false)} ref={this.modalRef}>
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
          <NoteList
            notes={displayedNotes}
            onToggleArchived={this.toggleArchived}
            onDelete={this.deleteNote}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
