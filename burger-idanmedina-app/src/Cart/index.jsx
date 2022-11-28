import React from "react";
import { CartDiv, CartHead, CartList } from "../styles/cart";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";

const Cart = ({ currentSale, setCurrentSale, handleClickDelete }) => {
  return (
    <CartDiv>
      <CartHead>
        <h3>Carrinho de compras</h3>
      </CartHead>
      <CartList>
        {currentSale.map((product, index) => (
          <CartProduct
            key={index}
            product={product}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            handleClickDelete={handleClickDelete}
          />
        ))}
        <hr></hr>
      </CartList>
      <CartTotal currentSale={currentSale} />
    </CartDiv>
  );
};

export default Cart;
