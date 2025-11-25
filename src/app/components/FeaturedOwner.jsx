import React from 'react';
import { FaShopify } from 'react-icons/fa';

function FeaturedOwner(props) {
    return (
        <div>
            <section className="my-20 bg-linear-to-br from-[#e81c2e]/10 to-[#ff6b81]/10 py-16 px-6 rounded-3xl">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-info mb-4">
              Featured Owner
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              The owner of E-Bazar is a dedicated visionary focused on building a smooth, modern online shopping experience. With innovation and commitment, they ensure quality products, reliable service, and customer satisfaction.
            </p>

            <div className="relative group bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#e81c2e]/20 to-[#ff6b81]/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Jonathan Miles
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Los Angeles, USA
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold text-sm shadow-sm">
                    ⭐ 4.9 Rating
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm shadow-sm flex gap-2">
                    <FaShopify /> Owner
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm shadow-sm">
                    📍 Trusted Host
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                  E-Bazar is led by a passionate and dedicated founder who believes in making online shopping simple, fast, and user-friendly for everyone. With a strong vision of building a modern and accessible digital marketplace, the owner focuses on delivering quality products, smooth browsing experience, and reliable customer support.
                </p>

                <button className="bg-[#e81c2e] hover:bg-[#c51423] text-white font-semibold px-6 py-2 rounded-md transition-all duration-300 shadow-md">
                  View Owners Information 
                </button>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
}

export default FeaturedOwner;