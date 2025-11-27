import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaTrash, FaTag, FaDollarSign } from "react-icons/fa";
import DeleteButton from "../components/DeleteButton";
import { redirect } from "next/navigation";

const productsPromise = async email => {
  const res = await fetch(
    `https://e-bazar-server-3llgah4p5-md-hashems-projects.vercel.app/products?email=${email}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export default async function ManageProductsPage() {
  // ⭐ Now we fetch session from custom API route
  const sessionRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/me`,
    {
      cache: "no-store",
    }
  );

  const { user } = await sessionRes.json();

  if (!user) {
    redirect("/api/auth/login");
  }

  const email = user.email;

  let products = [];
  try {
    products = await productsPromise(email);
  } catch (err) {
    console.error(err);
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20 min-h-[60vh]">
        <h2 className="text-2xl font-semibold text-warning">
          You have not added any products yet.
        </h2>
        <Link
          href="/add-product"
          className="btn btn-info mt-4">
          Add Your First Product
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-info text-center">
        Manage Your Products ({products.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(item => (
          <div
            key={item._id}
            className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
            <figure className="relative h-48 w-full">
              <Image
                src={item?.imageUrl || "/images/placeholder.png"}
                alt={item.ProductTitle}
                fill
                className="object-cover"
              />
            </figure>

            <div className="card-body p-5">
              <h2 className="card-title text-xl text-info">
                {item.ProductTitle}
              </h2>

              <p className="text-lg font-bold text-success flex items-center gap-1">
                <FaDollarSign /> {item.productPrice}
              </p>

              <div className="badge badge-outline badge-info flex items-center gap-1">
                <FaTag /> {item.category}
              </div>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {item.shortDescription}
              </p>

              <div className="card-actions justify-end mt-4">
                <Link
                  href={`/manageProducts/${item._id}`}
                  className="btn btn-sm btn-info text-white flex items-center gap-1">
                  <FaEdit /> Edit
                </Link>

                <DeleteButton
                  productId={item._id}
                  className="btn btn-sm btn-error text-white flex items-center gap-1">
                  <FaTrash /> Delete
                </DeleteButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
