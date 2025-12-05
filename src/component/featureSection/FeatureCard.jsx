import Image from "next/image";
import React from "react";

function FeatureCard({ feature }) {
  return (
    <div className="card bg-base-100 shadow-sm border border-red-600">
      <figure className="px-10 pt-10">
        <Image
          width={64}
          height={64}
          src={feature?.image}
          alt="fast-delivery--v2"
          className="rounded-xl "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-red-600">{feature?.title}</h2>
        <p>{feature?.description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
