import { CartProduct } from "../CartProducts";
import { Total } from "../Total";
import "./style.css";
export function Cart({ currentSale, setCurrentSale }) {
  function remove(element) {
    const deletar = currentSale.filter((item) => item !== element);
    setCurrentSale(deletar);
  }

  const soma = currentSale.reduce((acc, valor) => acc + valor.price, 0);

  return (
    <div className="container-carrinho">
      <div className="header-carrinho">Carrinho de Compras</div>
      <div className="corpo-carrinho-texto">
        {currentSale.length === 0 ? (
          <>
            <span className="carrinho-texto-um">Sua sacola está vazia</span>
            <span className="carrinho-texto-dois">Adicione itens</span>
          </>
        ) : (
          <>
            <ul className="cart-container">
              {currentSale?.map((element) => {
                return (
                  <>
                    <CartProduct
                      key={element.id}
                      element={element}
                      remove={remove}
                    />
                  </>
                );
              })}
            </ul>

            <Total
              soma={soma}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          </>
        )}
      </div>
    </div>
  );
}
