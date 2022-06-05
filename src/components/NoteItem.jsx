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
          <button>Archive</button>
          <button>Delete</button>
        </div>
      </div>
      <p className="content">{props.content}</p>
    </div>
  );
};

export default NoteItem;
