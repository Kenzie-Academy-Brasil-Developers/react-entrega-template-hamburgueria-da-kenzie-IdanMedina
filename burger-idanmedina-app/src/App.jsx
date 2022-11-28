import { useEffect, useState } from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { GlobalStyle } from "./styles/global.js";
import { api } from "./services/api.js";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  function showProducts(input) {
    const some = products.some(
      (product) =>
        product.name.toLowerCase() === input.toLowerCase() ||
        product.category.toLowerCase() === input.toLowerCase()
    );
    console.log(some);
    const filter = products.filter(
      (product) =>
        product.name.toLowerCase() === input.toLowerCase() ||
        product.category.toLowerCase() === input.toLowerCase()
    );

    some && setFilteredProducts(filter);
    some && setProducts(filter);
  }

  function handleClick(id) {
    const handled = products.find((product) => product.id === Number(id));
    const verify = currentSale.some((product) => product.id === Number(id));
    verify || setCurrentSale([...currentSale, handled]);
  }

  function handleClickDelete(id) {
    const find = currentSale.findIndex((product) => product.id === Number(id));
    const splice = [...currentSale].splice(find, 1)
    setCurrentSale(splice);
  }

  return (
    <div>
      {loading ? (
        <h2>Carregando...</h2>
      ) : (
        <>
          <GlobalStyle />
          <nav>
            <Header
              filteredProducts={filteredProducts}
              showProducts={showProducts}
            />
          </nav>
          <ProductsList
            showProducts={showProducts}
            products={products}
            handleClick={handleClick}
          />
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            handleClickDelete={handleClickDelete}
          />
        </>
      )}
    </div>
  );
}

export default App;
