import "./style.css";

export function Total({ soma,currentSale, setCurrentSale }) {
  function removerTudo() {
    const deletar = currentSale.map((element) => element);
    setCurrentSale(deletar.splice());
  }

  return (
    <>
      <div className="separador"></div>
      <div className="total-container">
        <div className="div-reduce">
          <span className="preco">Total</span>
          <span className="soma">
            {soma.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
        <button onClick={removerTudo} className="button-removerTodos">
          Remover todos
        </button>
      </div>
    </>
  );
}
