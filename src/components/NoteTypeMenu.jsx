import "../styles/NoteTypeMenu.css";

const NoteTypeMenu = (props) => {
  return (
    <menu className="noteTypeMenu">
      <button
        className={`noteType ${props.value === "active" && "selected"}`}
        onClick={() => props.onChange("active")}
      >
        Active Note
      </button>
      <button
        className={`noteType ${props.value === "archived" && "selected"}`}
        onClick={() => props.onChange("archived")}
      >
        Archived Note
      </button>
    </menu>
  );
};

export default NoteTypeMenu;
