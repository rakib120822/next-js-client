import Image from "next/image";
import Link from "next/link";

function LatestProductCard({ product }) {
  return (
    <div className="card bg-base-100  shadow-sm border border-red-500 hover:scale-105 transition duration-300 ease-in-out">
      <figure className="h-[200px]">
        <Image
          src={product?.productImage}
          alt="Shoes"
          width={450}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.productName}</h2>
        <p>{product?.productDescription}</p>
        <div className="card-actions justify-end">
          <Link href={`/dashboard/${product?._id}`} className="btn bg-red-600">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LatestProductCard;
