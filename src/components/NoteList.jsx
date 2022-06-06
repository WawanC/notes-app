import "../styles/NoteList.css";
import NoteItem from "./NoteItem";

const NoteList = (props) => {
  return (
    <section className="noteList">
      {props.notes.length > 0 ? (
        props.notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            createdAt={note.createdAt}
            content={note.body}
            archived={note.archived}
            onToggleArchived={() =>
              props.onToggleArchived(note.id, !note.archived)
            }
            onDelete={() => props.onDelete(note.id)}
          />
        ))
      ) : (
        <span>No notes found.</span>
      )}
    </section>
  );
};

export default NoteList;
