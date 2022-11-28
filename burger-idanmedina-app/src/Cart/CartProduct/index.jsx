import React from "react";
import { RemoveSpn } from "../../styles/buttons";
import { CardCart, CardCartImg } from "../../styles/cardCart";

const CartProduct = ({
  product,
  currentSale,
  setCurrentSale,
  handleClickDelete,
}) => {
  return (
    <CardCart>
      <div>
        <CardCartImg src={product.img} alt={product.name} />
      </div>
      <div>
        <h4>{product.name}</h4>
        <p>{product.category}</p>
      </div>
      <RemoveSpn
        id={product.id}
        onClick={(e) => handleClickDelete(e.target.id)}
      >
        Remover
      </RemoveSpn>
    </CardCart>
  );
};

export default CartProduct;
