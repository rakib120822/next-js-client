"use client";
import LatestProductCard from "@/component/card/LatestProductCard";

import React, { useState } from "react";

function AllProduct({ products }) {
  const [allProducts, setAllProducts] = useState(products || []);
  const handleSort = (order) => {
    if (order == "asc") {
      setAllProducts(products.sort((a, b) => a.productPrice - b.productPrice));
    } else {
      setAllProducts(products.sort((a, b) => b.productPrice - a.productPrice));
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold  my-10">
          <span className="text-red-600">All</span> Products
        </h2>
        <select
          defaultValue="Pick a color"
          className="select  border-red-400! focus:border-red-500!"
        >
          <option defaultValue="Sort">Sort</option>
          <option onClick={() => handleSort("asc")}>Low to High</option>
          <option onClick={() => handleSort("dec")}>Hight to Low</option>
        </select>
      </div>
      <div className=" gap-10 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <LatestProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
