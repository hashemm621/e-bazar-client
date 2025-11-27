"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaSpinner, FaSave, FaExclamationTriangle } from "react-icons/fa";
import Image from "next/image";
import Swal from "sweetalert2";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(null);
  const [updateError, setUpdateError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      ProductTitle: "",
      category: "",
      fullDescription: "",
      imageUrl: "",
      productPrice: 0,
      shortDescription: "",
    },
  });

  const imageUrlWatch = watch("imageUrl");

  useEffect(() => {
    if (!id) {
      setPageError("Product ID is missing.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://e-bazar-server-3llgah4p5-md-hashems-projects.vercel.app/products/${id}`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch product (Status: ${res.status})`);
        }
        const data = await res.json();
        setInitialData(data);

        reset({
          ProductTitle: data.ProductTitle || "",
          category: data.category || "",
          fullDescription: data.fullDescription || "",
          imageUrl: data.imageUrl || "",

          productPrice: parseFloat(data.productPrice) || 0,
          shortDescription: data.shortDescription || "",
        });
      } catch (err) {
        setPageError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, reset]);

  const onSubmit = async data => {
    setUpdateError("");
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

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/manageProducts");
      router.refresh();
    } catch (err) {
      setUpdateError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 min-h-[60vh] flex flex-col items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-info" />
        <p className="mt-2 text-info">Loading Product Data...</p>
      </div>
    );
  }

  if (pageError) {
    return (
      <div
        role="alert"
        className="alert alert-error max-w-lg mx-auto my-10 shadow-lg">
        <FaExclamationTriangle />
        <span>Error loading product: {pageError}</span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-base-100 shadow-2xl rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-info border-b pb-3">
        Edit Product: {initialData?.ProductTitle || "Loading..."}
      </h1>

      {updateError && (
        <div
          role="alert"
          className="alert alert-error my-4">
          <FaExclamationTriangle />
          <span>Update Error: {updateError}</span>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4">
        {/* ProductTitle */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Product Title</span>
          </div>
          <input
            type="text"
            {...register("ProductTitle", { required: "Title is required" })}
            className={`input input-bordered w-full ${
              errors.ProductTitle ? "input-error" : ""
            }`}
          />
          {errors.ProductTitle && (
            <p className="text-error text-sm mt-1">
              {errors.ProductTitle.message}
            </p>
          )}
        </label>

        {/* category */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <select
            {...register("category", { required: "Category is required" })}
            className={`select select-bordered w-full ${
              errors.category ? "select-error" : ""
            }`}>
            <option value="">Select Category</option>
            <option value="electric">Electric</option>
            <option value="fashion">Fashion</option>
            <option value="baby">Baby</option>
            <option value="homeDecor">Home Decor</option>
          </select>
          {errors.category && (
            <p className="text-error text-sm mt-1">{errors.category.message}</p>
          )}
        </label>

        {/* productPrice */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Price ($)</span>
          </div>
          <input
            type="number"
            {...register("productPrice", {
              required: "Price is required",
              valueAsNumber: true,
              min: 1,
            })}
            className={`input input-bordered w-full ${
              errors.productPrice ? "input-error" : ""
            }`}
          />
          {errors.productPrice && (
            <p className="text-error text-sm mt-1">
              {errors.productPrice.message}
            </p>
          )}
        </label>

        {/* shortDescription */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Short Description</span>
          </div>
          <textarea
            {...register("shortDescription", {
              required: "Short Description is required",
            })}
            className={`textarea textarea-bordered h-16 w-full ${
              errors.shortDescription ? "textarea-error" : ""
            }`}
          />
          {errors.shortDescription && (
            <p className="text-error text-sm mt-1">
              {errors.shortDescription.message}
            </p>
          )}
        </label>

        {/* fullDescription */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Full Description</span>
          </div>
          <textarea
            {...register("fullDescription", {
              required: "Full Description is required",
            })}
            className={`textarea textarea-bordered h-32 w-full ${
              errors.fullDescription ? "textarea-error" : ""
            }`}
          />
          {errors.fullDescription && (
            <p className="text-error text-sm mt-1">
              {errors.fullDescription.message}
            </p>
          )}
        </label>

        {/* imageUrl */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Image URL</span>
          </div>
          <input
            type="url"
            {...register("imageUrl", { required: "Image URL is required" })}
            className={`input input-bordered w-full ${
              errors.imageUrl ? "input-error" : ""
            }`}
          />
          {errors.imageUrl && (
            <p className="text-error text-sm mt-1">{errors.imageUrl.message}</p>
          )}

          {imageUrlWatch && (
            <div className="mt-4 border p-2 rounded-lg max-w-xs">
              <Image
                src={imageUrlWatch}
                alt="Preview"
                width={100}
                height={100}
                className="object-cover rounded"
              />
            </div>
          )}
        </label>

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
}
