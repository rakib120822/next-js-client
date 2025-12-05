"use client";
import ProtectedRoute from "@/component/ProtectedRoute";
import AuthContext from "@/context/AuthContext";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

function AddProducts({ onAdd }) {
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      productName: e.target.productName.value,
      productDescription: e.target.productDescription.value,
      productPrice: parseFloat(e.target.productPrice.value),
      category: e.target.category.value,
      sellerUserName: e.target.sellerUserName.value,
      sellerEmail: e.target.sellerEmail.value,
      productImage: e.target.photoURL.value,
    };

    try {
      const res = await fetch("http://localhost:8080/product", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to add product");

      const result = await res.json();

      // Call parent callback to update dashboard immediately
      if (onAdd) onAdd({ ...data, _id: result.insertedId });

      toast.success("Product added");
      e.target.reset(); // Reset form
    } catch (err) {
      console.error(err);
      toast.error("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex justify-center mt-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="sellerUserName"
                  defaultValue={user?.displayName}
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="sellerEmail"
                  defaultValue={user?.email}
                  required
                />
                <label className="label">Product Name</label>
                <input
                  type="text"
                  className="input"
                  name="productName"
                  required
                />
                <label className="label">Product Image URL</label>
                <input type="text" className="input" name="photoURL" required />
                <label className="label">Description</label>
                <input
                  type="text"
                  className="input"
                  name="productDescription"
                  required
                />
                <div className="flex gap-5 mt-1">
                  <div>
                    <label className="label">Price</label>
                    <input
                      type="number"
                      step="0.01"
                      className="input"
                      name="productPrice"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">Category</label>
                    <input
                      type="text"
                      className="input"
                      name="category"
                      required
                    />
                  </div>
                </div>
                <button className="btn bg-red-600 mt-4" disabled={loading}>
                  {loading ? "Adding..." : "Add Product"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default AddProducts;
