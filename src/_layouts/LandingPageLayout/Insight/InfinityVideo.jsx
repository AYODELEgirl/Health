import React from "react";
import insight from "../../../assets/images/insight.png";

export default function infinityVideo() {
  return (
    <div>
      <div
        className="bg-[#69BD45] w-full  p-10 "
        style={{
          backgroundImage: `url(${insight})`,
          height: "500px",
        }}
      >
        <div className="mt-20 ml-10">
          <p className="text-white font-bold text-[55px] mb-8">
            Market access starts with <br /> right data
          </p>
          <p className="text-[14px] text-white font-thin">
            Explore a collection on issues we care about, the work we do and our
            latest thinking across the African Healthcare
          </p>
        </div>
      </div>
    </div>
  );
}
