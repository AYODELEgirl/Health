import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import onboardONE from "../../assets/images/onboardONE.png";
import { NavLink } from "react-router-dom";
import analyticsbackground from "../../assets/images/analyticsbackground.png";

export default function Onboard() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${analyticsbackground})`,
          height: "500px",
        }}
        className="flex flex-col md:flex-row gap-10 md:gap-40 md:p-6 bg-red-500"
      >
        <div className="md:w-1/2 p-7 mt-8">
          <button className="bg-[#FF784B] text-white text-lg rounded-full py-3 px-5 mb-5">
            Our Products
          </button>
          <p className="font-medium text-2xl md:text-3xl lg:text-4xl mb-5 text-white">
            Regulatory Compliance Support
          </p>
          <p className="text-white mb-5 text-lg">
            ONBOARD helps healthcare and life science businesses connect and
            comply with regulatory standards more easily.
          </p>
          <p className="text-white mb-5 text-lg">
            We help you meet the regulatory requirements, register, renew, and
            obtain the right certifications for all parts of your business.
          </p>
          <div className="flex gap-2 items-center text-[#69BD45]">
            <NavLink to="/BookACall">  
              <p>Contact Us</p>
            </NavLink>
            <LiaLongArrowAltRightSolid />
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 mt-8 justify-center md:justify-end">
          <figure>
            <img src={onboardONE} alt="Onboard" className="w-full h-auto max-w-xs md:max-w-none" />
          </figure>
        </div>
      </div>
    </div>
  );
}
