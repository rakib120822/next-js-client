"use client";

import Image from "next/image";
import Link from "next/link";

function FeatureCard({ product }) {
  return (
    <div className="card bg-base-100  shadow-sm border border-red-500">
      <figure className=" ">
        <Image src={product?.image} alt="Shoes" width={400} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.title}</h2>
        <p>{product?.description}</p>
        <div className="card-actions justify-end">
          <Link href={`/dashboard/${product?.id}`} className="btn bg-red-600">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
