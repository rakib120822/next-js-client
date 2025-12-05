"use client";

import React, { useContext, useEffect, useState } from "react";
import Card from "./component/Card";
import ProtectedRoute from "@/component/ProtectedRoute";
import AuthContext from "@/context/AuthContext";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:8080/product?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);

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
      <div className="px-5">
        <h1 className="text-4xl font-bold text-center my-10">
          <span className="text-red-600">My</span> Products
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
