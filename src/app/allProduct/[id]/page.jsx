"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  FaEnvelope,
  FaUser,
  FaTag,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";

export default function ProductPage() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(
      `https://e-bazar-server-3llgah4p5-md-hashems-projects.vercel.app/products/${id}`
    )
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-base-100 shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src={product.imageUrl}
            alt={product.ProductTitle}
            width={500}
            height={500}
            className="rounded-lg w-full h-full object-cover shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-info mb-4">
              {product.ProductTitle}
            </h1>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Short Description:</span>{" "}
              {product.shortDescription}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Full Description:</span>{" "}
              {product.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4 text-gray-600">
              <p className="flex items-center gap-2">
                <FaTag className="text-info" /> {product.category}
              </p>
              <p className="flex items-center gap-2">
                <FaDollarSign className="text-info" /> ${product.productPrice}
              </p>
              <p className="flex items-center gap-2">
                <FaUser className="text-info" /> {product.name}
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-info" /> {product.email}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-info" />{" "}
                {new Date(product.createdAt).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6">
            <button className="btn btn-info mr-3">Buy Now</button>
            <button className="btn btn-outline btn-info">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
