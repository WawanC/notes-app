import { Component } from "react";
import "../styles/NewNote.css";

class NewNote extends Component {
  render() {
    return (
      <form>
        <h1>New Note</h1>
        <div className="inputContainer">
          <label htmlFor="title">Title :</label>
          <input type="text" id="title" />
        </div>
        <div className="inputContainer">
          <label htmlFor="content">Content :</label>
          <textarea id="content" rows={4} />
        </div>
        <div className="actionContainer">
          <button type="submit">Add Note</button>
        </div>
      </form>
    );
  }
}

export default NewNote;
