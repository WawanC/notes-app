import { forwardRef } from "react";
import "../styles/Modal.css";

const Modal = forwardRef((props, ref) => {
  const closeModal = (ev) => {
    ev.stopPropagation();
    props.onClose();
  };

  return (
    <section className="modal">
      <div className="backdrop" onClick={closeModal} />
      <div ref={ref} className="content">
        {props.children}
      </div>
    </section>
  );
});

export default Modal;
