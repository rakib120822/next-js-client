import React from "react";
import AllProduct from "./AllProduct";

async function AllProductPage() {
  const data = await fetch("http://localhost:8080/product");
  const products = await data.json();

  return (
    <div className="px-5">
      <AllProduct products={products} />
    </div>
  );
}

export default AllProductPage;
