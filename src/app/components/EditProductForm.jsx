"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaSpinner, FaSave, FaExclamationTriangle } from "react-icons/fa";
import Image from "next/image";

const EditProductForm = ({ id, initialProductData }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm();

  const imageUrlWatch = watch("imageUrl");
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    if (initialProductData) {
      reset({
        ProductTitle: initialProductData.ProductTitle || "",
        shortDescription: initialProductData.shortDescription || "",
        fullDescription: initialProductData.fullDescription || "",
        productPrice: initialProductData.productPrice || "",
        category: initialProductData.category || "",
        imageUrl: initialProductData.imageUrl || "",
      });
    }
  }, [initialProductData, reset]);
  // ----------------------

  const onSubmit = async data => {
    try {
      const res = await fetch(
        `https://e-bazar-server-3llgah4p5-md-hashems-projects.vercel.app/products/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update product.");
      }

      alert("Product updated successfully!");
      router.push("/manageProducts");
      router.refresh();
    } catch (err) {
      alert(`Update Error: ${err.message}`);
      console.error("Update Error:", err);
    }
  };

  if (fetchError) {
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-base-100 shadow-2xl rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-info border-b pb-3">
        Edit Product
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4">
        <label className="form-control w-full">...</label>

        <div className="pt-4">
          <button
            type="submit"
            className="btn btn-info w-full text-white text-lg"
            disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin" /> Updating...
              </>
            ) : (
              <>
                <FaSave /> Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
