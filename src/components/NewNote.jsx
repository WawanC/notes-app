import { Component } from "react";
import "../styles/NewNote.css";

class NewNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredTitle: "",
      enteredContent: "",
      titleError: null,
    };

    this.titleMaxLength = 50;
  }

  titleChangeHandler = (ev) => {
    const enteredValue = ev.target.value.trim();
    if (enteredValue.length > this.titleMaxLength) return;

    this.setState((state) => ({
      ...state,
      enteredTitle: enteredValue,
    }));
  };

  contentChangeHandler = (ev) => {
    this.setState((state) => ({
      ...state,
      enteredContent: ev.target.value,
    }));
  };

  submitFormHandler = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    if (this.state.titleError) return;

    const title = this.state.enteredTitle.trim();
    const content = this.state.enteredContent.trim();

    this.props.onAddNewNote(title, content);

    this.setState((state) => ({
      ...state,
      enteredTitle: "",
      enteredContent: "",
    }));
  };

  render() {
    const titleLength = this.state.enteredTitle.trim().length;

    return (
      <form onSubmit={(ev) => this.submitFormHandler(ev)}>
        <h1>Create New Note</h1>
        <div className="inputContainer">
          <div className="titleContainer">
            <label htmlFor="title">Title :</label>
            <span className="titleLength">
              {titleLength}/{this.titleMaxLength}
            </span>
          </div>

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
