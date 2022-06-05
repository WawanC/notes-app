import "../styles/Modal.css";

const Modal = (props) => {
  return (
    <section className="modal">
      <div className="backdrop" />
      <div className="content">{props.children}</div>
    </section>
  );
};

export default Modal;
