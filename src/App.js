import "./App.css";
import { InputFilter } from "./components/Filter";
import Logo from "./assets/logo.svg";
import { useEffect, useState } from "react";
import { Vitrine } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { Modal } from "./components/Modal";

function App() {
  const [productsList, setProductsList] = useState();
  const [listFiltro, setListFiltro] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProductsList(response))
      .catch((erro) => console.log(erro));
  }, [productsList]);

  return (
    <>
      <header className="App-header">
        <img src={Logo} className="titulo-header" alt="logo hamburguer" />
        <InputFilter
          productsList={productsList}
          setListFiltro={setListFiltro}
        />
      </header>

      <section className="container-vitrine">
        {openModal === true && <Modal setOpenModal={setOpenModal} />}
        <Vitrine
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          productsList={listFiltro.length === 0 ? productsList : listFiltro}
          setProductsList={setProductsList}
          setOpenModal={setOpenModal}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          productsList={productsList}
        />
      </section>
    </>
  );
}

export default App;
