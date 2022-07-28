import "./style.css";

export function CartProduct({ element, remove }) {
  return (
    <li className="li-cart">
      <img
        className="imagem-cart"
        src={element.img}
        alt="imagem Do produto"
      ></img>
      <div className="card-products">
        <span className="nome-cart">{element.name}</span>
        <span className="categoria-cart">{element.category}</span>
      </div>

      <button className="button-remove" onClick={() => remove(element)}>
        Remover
      </button>
    </li>
  );
}
