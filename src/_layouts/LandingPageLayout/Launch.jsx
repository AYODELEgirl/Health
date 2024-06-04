import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import launch from "../../assets/images/launch.png";
import { NavLink } from "react-router-dom";
import analyticsbackground from "../../assets/images/analyticsbackground.png";

export default function Launch() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${analyticsbackground})`,
          height: "500px",
        }}
        className="flex flex-col md:flex-row gap-10 md:gap-40 p-6 bg-red-500"
      >
        <div className="md:w-1/2 p-7 mt-8">
          <button className="bg-[#FF784B] text-white text-lg rounded-full py-3 px-5 mb-5">
            Our Products
          </button>
          <p className="font-medium text-2xl md:text-3xl lg:text-4xl mb-5 text-white">
            Powering Growth
          </p>
          <p className="text-white mb-5 text-lg">
            Expand your reach and forge strategic partnerships through our
            comprehensive marketplace and expertise. We connect healthcare
            businesses to a network of potential collaborators and clients,
            fostering new opportunities in marketing, business development, and
            partnerships.
          </p>
          <div className="flex gap-2 items-center text-[#69BD45]">
            <NavLink to="/products">
              <p>Contact Us</p>
            </NavLink>
            <LiaLongArrowAltRightSolid />
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 mt-8 mb-5 justify-center md:justify-end">
          <figure className="w-full md:w-auto md:max-w-md">
            <img src={launch} alt="Launch" className="w-full h-auto" />
          </figure>
        </div>
      </div>
    </div>
  );
}
