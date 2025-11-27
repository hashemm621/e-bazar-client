'use client'; 

import Link from "next/link";
import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client'; 
import { FaSpinner } from 'react-icons/fa'; 

const Navbar = () => {
    const { user, isLoading } = useUser();
    
    const links = (
        <>
            <li className="hover:text-info">
                <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-info">
                <Link href={"/allProduct"}>All Product</Link>
            </li>
            {!isLoading && user && (
                <>
                    <li className="hover:text-info">
                        <Link href={"/add-product"}>Add Product</Link>
                    </li>
                    <li className="hover:text-info">
                        <Link href={"/manageProducts"}>Manage Products</Link>
                    </li>
                </>
            )}
        </>
    );

    const authControls = () => {
        if (isLoading) {
            return (
                <button className="btn btn-ghost">
                    <FaSpinner className="animate-spin" /> Loading...
                </button>
            );
        }

        if (user) {
            return (
                <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium hidden md:inline">
                        Welcome, {user.name || 'User'}
                    </span>
                    <a href="/api/auth/logout" className="btn btn-sm btn-outline btn-error">
                        Logout
                    </a>
                </div>
            );
        }
        
       
        return (
            <a href="/api/auth/login" className="btn btn-sm btn-info text-white">
                Login
            </a>
        );
    };

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-6">
                
                {/* Navbar Start Section */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link
                        href={"/"}
                        className=" text-2xl font-bold text-info">
                        E-Bazar
                    </Link>
                </div>
                
                {/* Navbar Center Section */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                

                <div className="navbar-end">
                    {authControls()}
                </div>
            </div>
        </div>
    );
};

export default Navbar;