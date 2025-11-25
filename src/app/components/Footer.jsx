import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer(props) {
  return (
    <div>
      <footer className="bg-info text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">E-Bazar</h1>
            <p className="text-sm mt-1">
              &copy; {new Date().getFullYear()} E-Bazar. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-0 text-center">
            <Link
              href="/"
              className="hover:underline">
              Home
            </Link>
            <a className="hover:underline">Manage Product</a>
            <a className="hover:underline">All Product</a>
            <a className="hover:underline">Contact</a>
          </div>

          <div className="flex gap-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200">
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-white/30 pt-4 text-center text-sm text-white/80">
          E-Bazar - Make sure comfortable your shopping.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
