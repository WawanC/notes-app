import "../styles/Modal.css";

const Modal = (props) => {
  const closeModal = (ev) => {
    ev.stopPropagation();
    console.log("clicked");
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
