import React from "react";

function AddProducts() {
  return (
    <div className=" flex justify-center mt-[40px]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Your Name" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Product Name</label>
            <input type="text" className="input" placeholder="Product Name" />
            <label className="label">Description</label>
            <input type="text" className="input" placeholder="Description" />
            <div className="flex gap-5 mt-1">
              <div>
                <label className="label">Price</label>
                <input type="number" className="input" placeholder="Price" />
              </div>
              <div>
                <label className="label">Category</label>
                <input type="text" className="input" placeholder="Category" />
              </div>
            </div>

            <button className="btn bg-red-600 mt-4">Add Product</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
