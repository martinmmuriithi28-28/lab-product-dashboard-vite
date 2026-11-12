import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, removeProduct }) => {
  if (products.length === 0) {
    return <h2>No products in stock</h2>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </>
  );
};

export default ProductList;