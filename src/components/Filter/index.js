import "./style.css";
import { useState } from "react";

export function InputFilter({ productsList, setListFiltro }) {
  const [inputValue, setInputValue] = useState("");

  function ignorarCaracteres(str) {
    str = str.replace(/[ÀÁÂÃ]/, "A");
    str = str.replace(/[àáâã]/, "a");
    str = str.replace(/[ÈÉÊ]/, "E");
    str = str.replace(/[Ç]/, "C");
    str = str.replace(/[ç]/, "c");
    str = str.replace(/[í]/, "i");
    str = str.replace(/[Í]/, "i");

    return str.replace(/[^a-z0-9]/gi, "");
  }

  function filtrarItens() {
    const newArray = productsList.filter(
      (product) =>
        ignorarCaracteres(product.name.toLowerCase()).includes(
          ignorarCaracteres(inputValue.toLowerCase())
        ) ||
        ignorarCaracteres(product.category.toLowerCase()).includes(
          ignorarCaracteres(inputValue.toLowerCase())
        )
    );
    setListFiltro(newArray);
  }

  return (
    <div className="input-container">
      <div className="div-border">
        <input
          onChange={(event) => {
            filtrarItens();
            setInputValue(event.target.value);
          }}
          placeholder="Digitar Pesquisa"
          className="input-filtro"
        ></input>
        <button onClick={filtrarItens} className="button-pesquisar">
          Pesquisar
        </button>
      </div>
    </div>
  );
}
