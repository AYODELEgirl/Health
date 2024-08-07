import React from "react";
import insight from "../../../assets/images/insight.png";

export default function infinityVideo() {
  return (
    <div className="mb-0">
      <div
        className="bg-[#69BD45] w-full  p-10 "
        style={{
          backgroundImage: `url(${insight})`,
          height: "500px",
        }}
      >
        <div className="mt-20 md:ml-7">
          <p className="text-white font-bold lg:text-[55px] md:text-[40px] text-[20px] mb-8">
            Market access starts with <br /> thes right data
          </p>
          <p className="lg:text-[14px] md:text[12px] text-[10px] text-white font-thin">
            Explore a collection on issues we care about, the work we do and our
            latest thinking across the African Healthcare
          </p>
        </div>
      </div>
    </div>
  );
}
