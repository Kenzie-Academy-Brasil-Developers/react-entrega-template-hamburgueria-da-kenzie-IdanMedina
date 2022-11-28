import React from "react";
import { List } from "../styles/list";
import Product from "./Product";

const ProductList = ({
  showProducts,
  products,
  handleClick,
  filteredProducts,
}) => {
  return (
    <List>
      {filteredProducts.length === 0
        ? products.map((product, index) => (
            <Product key={index} product={product} handleClick={handleClick} />
          ))
        : filteredProducts.map((product, index) => (
            <Product key={index} product={product} handleClick={handleClick} />
          ))}
    </List>
  );
};

export default ProductList;
