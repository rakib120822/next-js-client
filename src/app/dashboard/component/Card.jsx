"use client";

import Image from "next/image";
import Link from "next/link";

function Card({ product, onDelete }) {
  return (
    <div className="card bg-base-100 shadow-sm border border-red-500 hover:scale-105 transition duration-300 ease-in-out">
      <figure className="h-[200px]">
        <Image
          src={product?.productImage}
          alt="Product Image"
          width={450}
          height={200}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{product?.productName}</h2>
        <p>{product?.productDescription}</p>

        <div className="card-actions justify-end">
          <Link
            href={`/dashboard/${product?._id}`}
            className="btn bg-red-600 hover:bg-black hover:text-red-600 border hover:btn-outline border-red-600"
          >
            View
          </Link>

          <button
            onClick={() => onDelete(product._id)}
            className="btn btn-outline border border-red-600 text-red-600 hover:text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
