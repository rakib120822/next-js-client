import React from "react";
import LatestProductCard from "../card/LatestProductCard";

async function LatestProducts() {
  const data = await fetch("http://localhost:8080/product");
  const products = await data.json();

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">
        <span className="text-red-600">Latest</span> Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <LatestProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default LatestProducts;
