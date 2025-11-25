"use client";
import React from "react";
import { useForm } from "react-hook-form";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProduct = data => {
    console.log(data);
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-100 rounded-xl shadow-lg border border-base-200">
      <h2 className="text-3xl font-bold mb-6 text-info text-center">
        Add New Product
      </h2>

      <form
        onSubmit={handleSubmit(handleProduct)}
        className="space-y-5">
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Product Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter product title"
            className="input input-bordered w-full"
            {...register("ProductTitle", { required: true })}
          />
        </div>

        {/* Short Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Short Description</span>
          </label>
          <input
            type="text"
            {...register("shortDescription", { required: true })}
            placeholder="1-2 line short description"
            className="input input-bordered w-full"
          />
        </div>

        {/* Full Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Full Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-28"
            placeholder="Full product details..."
            {...register("fullDescription")}></textarea>
        </div>

        {/* user Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="input input-bordered w-full"
            {...register("name", { required: true })}
          />
        </div>

        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="input input-bordered w-full"
            {...register("email", { required: true })}
          />
        </div>

        {/* Price and Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price ($)</span>
            </label>
            <input
              type="number"
              placeholder="Enter price"
              {...register("productPrice", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

         
        </div>

        {/* Priority */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Category</span>
          </label>
          <select
            className="select select-bordered w-full"
            {...register("category", { required: true })}
            defaultValue="">
            <option
              value=""
              disabled>
              Select category
            </option>
            <option value="Electric">Electric</option>
            <option value="Baby Corners">Baby Corners</option>
            <option value="Home Decor">Home Decor</option>
            <option value="Fruits">Fruits</option>
            <option value="Food">Food</option>
          </select>
        </div>

        {/* Image URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Product Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Paste image URL"
            className="input input-bordered w-full"
            {...register("imageUrl")}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-info w-full mt-4">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Page;
