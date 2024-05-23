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
        className="w-full bg-cover bg-center relative"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-start p-10">
          <p className="font-bold text-[45px] text-white mb-4">
            Unlocking Opportunities with Infinity <br /> health's solution
          </p>
          <p className="text-white text-[14px] mt-[28px]">
            Explore how our comprehensive suite of services can transform your
            healthcare business in Africa
          </p>
        </div>
      </div>
    </div>
  );
}
