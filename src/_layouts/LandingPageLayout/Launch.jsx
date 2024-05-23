import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import launch from "../../assets/images/launch.png";
import { NavLink } from "react-router-dom";
import analyticsbakground from "../../assets/images/analyticsbackground.png";

export default function Launch() {
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
          <p className="text-white mb-5 text-[15px]">
            Find the perfect sales strategy and partnership for your healthcare
            organization to launch and scale across Africa with{" "}
            <span className="font-medium text-[17px]">AKSELLERATE</span>
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
            <img src={launch} alt="" width={350} />
          </figure>
        </div>
      </div>
    </div>
  );
}