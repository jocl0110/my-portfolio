import { ModalProps } from "../types/types";

function Modal({ setIsModalOpen, image }: ModalProps) {
  return (
    <div
      className="modal"
      onClick={() => setIsModalOpen(false)} // Close when clicking outside
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="me" />
      </div>
    </div>
  );
}

export default Modal;
