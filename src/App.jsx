import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: "$999", inStock: true },
    { id: 2, name: "Phone", price: "$699", inStock: false },
    { id: 3, name: "Tablet", price: "$499", inStock: true },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.inStock);

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={() => setFilter("all")}>
        All Products
      </button>

      <button onClick={() => setFilter("inStock")}>
        In Stock
      </button>

      <ProductList
        products={filteredProducts}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default App;