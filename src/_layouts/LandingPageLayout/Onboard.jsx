import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import onboardONE from "../../assets/images/onboardONE.png";
import { NavLink } from "react-router-dom";
import analyticsbakground from "../../assets/images/analyticsbackground.png";

export default function Onboard() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${analyticsbakground})`,
          height: "500px",
        }}
        className="flex bg-red-500 flex-row gap-40  p-6"
      >
        <div className="w-[50%] p-7 mt-8">
          <button className="bg-[#FF784B] text-white text-[17px] rounded-full p-3 px-5 mb-5">
            Our Products
          </button>
          <p className="font-medium text-[36px]  mb-5 whitespace-nowrap text-white">
            Regulatory Compliance Support
          </p>
          <p className="text-white mb-5 text-[18px]">
            ONBOARD helps healthcare and life science businesses connects and
            comply with regulatory standards more easily. </p>
            <p className="text-white mb-5 text-[18px]">    
            We help you meet the
            regulatory requirements, register, renew and obtain the right
            certifications for all parts of your business.
          </p>
          <NavLink to="/products">
            <div
              className="flex gap-2"
              style={{
                alignItems: "center",
                color: "#69BD45",
              }}
            >
              <p> Contact Us </p>
              <LiaLongArrowAltRightSolid />
            </div>
          </NavLink>
        </div>
        <div className="w-[50%] mt-8">
          <figure>
            <img src={onboardONE} alt="" width={500} />
          </figure>
        </div>
      </div>
    </div>
  );
}
