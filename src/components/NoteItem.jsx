import "../styles/NoteItem.css";
import { showFormattedDate } from "../utils";
import { MoveIcon, ArchiveIcon, DeleteIcon } from "./Icons";

const NoteItem = (props) => {
  return (
    <div className="noteItem">
      <div className="main">
        <div className="info">
          <h1>{props.title}</h1>
          <span className="createdAt">
            {showFormattedDate(props.createdAt)}
          </span>
        </div>
        <div className="actions topActions">
          <button onClick={props.onToggleArchived} className="toggleBtn">
            {props.archived ? <MoveIcon /> : <ArchiveIcon />}
          </button>
          <button onClick={props.onDelete} className="deleteBtn">
            <DeleteIcon />
          </button>
        </div>
      </div>
      <p className="content">{props.content}</p>
      <div className="actions bottomActions">
        <button onClick={props.onToggleArchived} className="toggleBtn">
          {props.archived ? <MoveIcon /> : <ArchiveIcon />}
        </button>
        <button onClick={props.onDelete} className="deleteBtn">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
