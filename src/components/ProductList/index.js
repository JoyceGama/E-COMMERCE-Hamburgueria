import "./style.css";

export function Vitrine({
  productsList,
  setCurrentSale,
  currentSale,
  setOpenModal,
}) {
  function addCart(id) {
    const products = productsList.find((element) => element.id === id);
    const encontrar = currentSale.find((element) => element.id === id);
    if (encontrar) {
      setOpenModal(true);
    } else {
      setCurrentSale([...currentSale, products]);
    }
  }

  return (
    <ul className="list">
      {productsList?.map((product) => (
        <li key={product.id} className="products">
          <img className="imagem-produto" src={product.img} alt="produto"></img>
          <span className="nome-produto">{product.name}</span>
          <span className="categoria-produto">{product.category}</span>
          <span className="preco-produto">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            })}
          </span>
          <button
            onClick={() => addCart(product.id)}
            className="button-adicionar"
          >
            Adicionar
          </button>
        </li>
      ))}
    </ul>
  );
}
