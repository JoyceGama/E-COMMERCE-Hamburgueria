import "./style.css";

export function Modal({ setOpenModal }) {
  return (
    <div className="modal">
      <button className="button-modal" onClick={() => setOpenModal(false)}>
        X
      </button>
      <span className="text-modal">Este item ja tem no carrinho</span>
    </div>
  );
}
