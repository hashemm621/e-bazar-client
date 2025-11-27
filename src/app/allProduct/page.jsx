import Image from "next/image";
import Link from "next/link";
import React from "react";

const productsPromise = async () => {
  const res = await fetch(
    "https://e-bazar-server-3llgah4p5-md-hashems-projects.vercel.app/products",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

async function Page() {
  const products = await productsPromise();
  console.log(products);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-info text-center">
        All Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(item => (
          <div
            key={item._id}
            className="bg-base-100 border border-base-300 shadow-lg rounded-xl p-3 hover:shadow-xl duration-300">
            <div className="relative w-full h-36 md:h-40 rounded-lg overflow-hidden">
              <Image
                src={item?.imageUrl}
                alt={item.ProductTitle}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-lg font-semibold mt-3">{item.ProductTitle}</h2>

            <p className="text-sm text-gray-500 mt-1">
              {item.shortDescription}
            </p>

            <p className="text-info font-bold mt-2 text-lg">
              ${item.productPrice}
            </p>

            <div className="mt-3 flex justify-between items-center">
              <span className="badge badge-info badge-outline">
                {item.category}
              </span>

              <Link
                href={`/allProduct/${item._id}`}
                className="btn btn-sm btn-info text-white">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
