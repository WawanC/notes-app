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
            content={note.content}
          />
        ))
      ) : (
        <span>No notes yet</span>
      )}
    </section>
  );
};

export default NoteList;
