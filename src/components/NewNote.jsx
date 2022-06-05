import { Component } from "react";
import "../styles/NewNote.css";

class NewNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredTitle: "",
      enteredContent: "",
    };
  }

  titleChangeHandler(ev) {
    this.setState((state) => ({ ...state, enteredTitle: ev.target.value }));
  }

  contentChangeHandler(ev) {
    this.setState((state) => ({ ...state, enteredContent: ev.target.value }));
  }

  submitFormHandler(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    const title = this.state.enteredTitle.trim();
    const content = this.state.enteredContent.trim();

    this.props.onAddNewNote(title, content);

    this.setState((state) => ({ enteredTitle: "", enteredContent: "" }));
  }

  render() {
    return (
      <form onSubmit={(ev) => this.submitFormHandler(ev)}>
        <h1>New Note</h1>
        <div className="inputContainer">
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            id="title"
            value={this.state.enteredTitle}
            onChange={(ev) => this.titleChangeHandler(ev)}
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="content">Content :</label>
          <textarea
            id="content"
            rows={4}
            value={this.state.enteredContent}
            onChange={(ev) => this.contentChangeHandler(ev)}
            required
          />
        </div>
        <div className="actionContainer">
          <button type="submit">Add Note</button>
        </div>
      </form>
    );
  }
}

export default NewNote;
