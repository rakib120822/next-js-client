import LatestProductCard from "@/component/card/LatestProductCard";

import React from "react";

function AllProduct({ products }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold  my-5">
          <span className="text-red-600">Feature</span> Section
        </h2>
        <select
          defaultValue="Pick a color"
          className="select  border-red-400! focus:border-red-500!"
        >
          <option disabled={true} selected>Sort</option>
          <option>Hig</option>
          <option>Amber</option>
          
        </select>
      </div>
      <div className=" gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <LatestProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
