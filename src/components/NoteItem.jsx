import "../styles/NoteItem.css";

const NoteItem = (props) => {
  return (
    <div className="noteItem">
      <div className="main">
        <div>
          <h1>{props.title}</h1>
          <span className="createdAt">{props.createdAt}</span>
        </div>
        <div className="actions">
          <button onClick={props.onToggleArchived}>
            {props.archived ? "Move" : "Archive"}
          </button>
          <button onClick={props.onDelete}>Delete</button>
        </div>
      </div>
      <p className="content">{props.content}</p>
    </div>
  );
};

export default NoteItem;
