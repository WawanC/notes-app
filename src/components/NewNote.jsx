import { Component } from "react";
import "../styles/NewNote.css";

class NewNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredTitle: "",
      enteredBody: "",
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

  bodyChangeHandler = (ev) => {
    this.setState((state) => ({
      ...state,
      enteredBody: ev.target.value,
    }));
  };

  submitFormHandler = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    if (this.state.titleError) return;

    const title = this.state.enteredTitle.trim();
    const body = this.state.enteredBody.trim();

    this.props.onAddNewNote(title, body);

    this.setState((state) => ({
      ...state,
      enteredTitle: "",
      enteredBody: "",
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
          <label htmlFor="body">Content :</label>
          <textarea
            id="body"
            rows={4}
            value={this.state.enteredBody}
            onChange={(ev) => this.bodyChangeHandler(ev)}
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
