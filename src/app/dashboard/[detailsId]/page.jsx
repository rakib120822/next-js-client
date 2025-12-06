import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default async function DetailPage({ params }) {
  const { detailsId } = await params;
  console.log(detailsId);

  const res = await fetch(`http://localhost:8080/product/${detailsId}`, {
    cache: "no-store", // ensure fresh data
  });

  if (!res.ok) {
    return <h1 className="text-center mt-10">Product not found</h1>;
  }

  const product = await res.json();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          width={400}
          height={400}
          src={product.productImage}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="product image"
        />

        <div>
          <h1 className="text-5xl font-bold">{product.productName}</h1>
          <p className="py-1">Category : {product.productDescription}</p>
          <p>
            Price : {product.productPrice} ${" "}
            <div className="badge badge-outline border-green-600 text-green-600 ">
              Discount : {product.discountPercentage}%
            </div>
          </p>
          <p>Quantity : {product.quantity} </p>
          <p className="py-1">{product.productCategory}</p>
          <p>
            Ingredients :{" "}
            {product.ingredients.map((ingredient, index) => (
              <span key={index}>{ingredient}</span>
            ))}
          </p>
          <p>
            Tags :{" "}
            {product.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </p>
          <p className="py-1">Product Slug : {product.productSlug}</p>

          <div className="my-6 flex justify-between items-center">
            <div className="badge badge-outline border-yellow-600 text-yellow-600 ">
              Rating : {product.rating} <FaStar />
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href="/"
              className="btn btn-outline border border-red-600 text-red-600"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
