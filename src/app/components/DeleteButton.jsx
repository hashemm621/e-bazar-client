"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation"; // রিফ্রেশ করার জন্য
import Swal from "sweetalert2";

const DeleteButton = ({ productId }) => {
  const router = useRouter();

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            `http://localhost:5000/products/${productId}`,
            {
              method: "DELETE",
            }
          );

          if (res.ok) {
            router.refresh();
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          } else {
            alert("Failed to delete product.");
          }
        } catch (error) {
          console.error("Error deleting product:", error);
          alert("An unexpected error occurred.");
        }
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      className="btn btn-sm btn-error text-white flex items-center gap-1">
      <FaTrash /> Delete
    </button>
  );
};

export default DeleteButton;
