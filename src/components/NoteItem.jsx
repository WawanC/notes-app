import "../styles/NoteItem.css";
import { showFormattedDate } from "../utils";
import { MoveIcon, ArchiveIcon, DeleteIcon } from "./Icons";

const NoteItem = (props) => {
  return (
    <div className="noteItem">
      <div className="main">
        <div>
          <h1>{props.title}</h1>
          <span className="createdAt">
            {showFormattedDate(props.createdAt)}
          </span>
        </div>
        <div className="actions">
          <button onClick={props.onToggleArchived} className="toggleBtn">
            {props.archived ? <MoveIcon /> : <ArchiveIcon />}
          </button>
          <button onClick={props.onDelete} className="deleteBtn">
            <DeleteIcon />
          </button>
        </div>
      </div>
      <p className="content">{props.content}</p>
    </div>
  );
};

export default NoteItem;
