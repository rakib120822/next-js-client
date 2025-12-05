"use client";

import React, { useEffect, useState } from "react";
import Card from "./component/Card";
import ProtectedRoute from "@/component/ProtectedRoute";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  // Load products initially
  const getProducts = async () => {
    const res = await fetch("http://localhost:8080/product");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // This will be passed to Card component
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/product/${id}`, {
      method: "DELETE",
    });

    //  Update UI instantly
    setProducts((prev) => prev.filter((p) => p._id !== id));
    alert("product deleted");
  };

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-4">
          <span className="text-red-600">ALL</span> Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <Card key={product._id} product={product} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
