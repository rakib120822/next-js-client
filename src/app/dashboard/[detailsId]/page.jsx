import Image from "next/image";
import Link from "next/link";

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
          <p className="py-6">{product.productDescription}</p>

          <div className="my-6">
            <div className="badge badge-outline border-red-600 text-red-600 ">
              Price : {product.productPrice} $
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
