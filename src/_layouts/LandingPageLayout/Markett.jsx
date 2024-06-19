import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import insighttt from "../../assets/images/insighttt.jpg";
import { NavLink } from "react-router-dom";
import analyticsbackground from "../../assets/images/analyticsbackground.png";

export default function Market() {
  return (
    <div>
      <div id="insight"
        style={{
          backgroundImage: `url(${analyticsbackground})`,
          
        }}
        className="flex flex-col md:flex-row gap-10 md:gap-40 pt-5 px-8 bg-red-500"
      >
        <div className="md:w-1/2 p-7 mt-8">
          <button className="bg-[#FF784B] text-white text-lg rounded-full py-2 px-5 mb-5">
            Our Services
          </button>
          <p className="font-medium text-2xl md:text-3xl lg:text-4xl mb-5 text-white">
            Local Insights & Analytics
          </p>
          <p className="text-white mb-5 text-lg">
            Make informed decisions with our invaluable local
            insights, market data, and analytics. Gain a deeper understanding of
            the African healthcare landscape to guide your market entry,
            strategic planning, and growth.
          </p>
          <div className="flex gap-2 items-center text-[#69BD45]">
          <a href="/BookACall">
              <p>Contact Us</p>
            </a>
            <LiaLongArrowAltRightSolid />
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 mt-3 mb-6 p-5  justify-center md:justify-end">
          <figure>
            <img
              src={insighttt}
              alt="insight"
              className="w-full h-auto max-w-xs md:max-w-none"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
