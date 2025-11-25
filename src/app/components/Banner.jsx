import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImg from "../../../public/bannerBg.png";

function Banner(props) {
  return (
    <div className=" py-12 lg:py-20 bg-primary-content">
      <div className="mx-auto w-full hero-content flex-col md:flex-row-reverse px-6">
        <div className="shrink-0 w-full max-w-sm lg:w-1/2 flex justify-center">
          <Image
            src={bannerImg}
            alt="E-Bazar Shopping Basket Illustration"
            width={400}
            height={250}
            priority={true}
            className="object-contain rounded-xl hover:scale-125 transition-all hover:skew-2"
          />
        </div>

        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-6xl font-extrabold mb-4 text-info">E-Bazar</h1>
          <p className="text-lg text-gray-500 font-medium mb-8">
            Shop smart, live better. Find everything you need right here,
            delivered fast to your door. Explore our wide selection today!
          </p>

          <Link
            href={"/allProduct"}
            className="btn btn-lg btn-white text-blue-500 bg-white hover:bg-gray-100 border-none shadow-lg transition duration-300">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
