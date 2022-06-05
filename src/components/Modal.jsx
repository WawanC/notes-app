import "../styles/Modal.css";
import NewNote from "./NewNote";

const Modal = (props) => {
  const closeModal = (ev) => {
    ev.stopPropagation();
    props.onClose();
  };

  return (
    <section className="modal">
      <div className="backdrop" onClick={closeModal} />
      <div className="content">{props.children}</div>
    </section>
  );
};

export default Modal;
