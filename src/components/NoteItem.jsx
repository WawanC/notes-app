import "../styles/NoteItem.css";

const NoteItem = (props) => {
  const deleteNote = () => props.onDelete(props.id);

  return (
    <div className="noteItem">
      <div className="main">
        <div>
          <h1>{props.title}</h1>
          <span className="createdAt">{props.createdAt}</span>
        </div>
        <div className="actions">
          <button>Archive</button>
          <button onClick={deleteNote}>Delete</button>
        </div>
      </div>
      <p className="content">{props.content}</p>
    </div>
  );
};

export default NoteItem;
