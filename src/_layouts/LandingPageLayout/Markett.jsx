import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import markett from "../../assets/images/markett.png";
import { NavLink } from "react-router-dom";
import analyticsbakground from "../../assets/images/analyticsbackground.png";

export default function Market() {
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
            Onboard
          </p>
          <p className="text-white mb-5 text-[18px]">
            <span className="font-medium">Onboard</span> by infinity Health
            caters to new and already existing <br /> healthcare and related
            businessess, guiding them through the proper  framework for
            registration and expansion of their products and  services across
            Africa, starting from Nigeria
          </p>
          <NavLink to="/products">
            <div
              className="flex gap-2"
              style={{
                alignItems: "center",
                color: "#69BD45",
              }}
            >
              <p>Visit Product page </p>
              <LiaLongArrowAltRightSolid />
            </div>
          </NavLink>
        </div>
        <div className="w-[50%] mt-8">
          <figure>
            <img src={markett} alt="" width={500} />
          </figure>
        </div>
      </div>
    </div>
  );
}
