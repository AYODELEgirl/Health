import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import onboardONE from "../../assets/images/onboardONE.png";
import { NavLink } from "react-router-dom";
import analyticsbackground from "../../assets/images/analyticsbackground.png";
import onboardlogo from "../../assets/images/onboardlogo.png";
import lloggo from "../../assets/images/lloggo.png";

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
        <div className="md:w-1/2 px-8 pt-5 mt-8">
          <div className="mb-5">
            <figure>
              <img src={lloggo} alt="" width={120} />
            </figure>
          </div>
          <p className="font-medium text-2xl md:text-3xl lg:text-4xl mb-5 text-white">
           <span>REGULATORY COMPLIANCE.</span>{" "}
            <span className="text-[#69BD45]">MADE EASY</span>
          </p>
          <p className="text-white mb-5 text-lg">
            Navigate the complexities of market entry, expansion, and compliance
            with our streamlined regulatory support platform. We connect you
            with the necessary resources and expertise to ensure adherence to
            regulatory standards in the healthcare and life sciences sectors.
          </p>

          <div className="flex gap-2 items-center text-[#69BD45]">
            <NavLink to="/products">
              <p>Visit Product Page</p>
            </NavLink>
            <LiaLongArrowAltRightSolid />
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 mt-8 px-8 p-5 justify-center md:justify-end ">
          <figure>
            <img
              src={onboardONE}
              alt="Onboard"
              className="w-[450px] h-auto max-w-xs md:max-w-none"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
