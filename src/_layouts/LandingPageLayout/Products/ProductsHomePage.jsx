// import React from "react";
import product from "../../../assets/images/product.png";

export default function ProductsHomePage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${product})`,
          height: "500px",
        }}
        className="lg:w-full bg-cover bg-center relative"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-start px-16 pt-5">
          <p className="font-bold text-xl lg:text-[45px] md:text-[30px] xl-text-[60px]  text-white mb-4 md:leading-[65px]">
            Unlocking Opportunities with Infinity <br /> health's solution
          </p>
          <p className="text-white lg:text-[14px] md:text-[12px] xl-text-10xl text-xs mt-[28px]">
            Explore how our comprehensive suite of services can transform your
            healthcare business in Africa
          </p>
        </div>
      </div>
    </div>
  );
}
