import React from "react";
import { NavLink } from "react-router-dom";

export default function TrustedSection() {
  return (
    <div className="flex justify-center">
      <div
        className="bg-[#E8FFDE]  rounded-md w-[80%] p-10 flex flex-row gap-16 lg:h-[150px] h-auto "
        // style={{ height: "150px" }}
        
      >
        <section className="lg:w-[65%] w-full">
          <p className="lg:text-[23px] md:text-[20px] text-xs font-bold lg:leading-[30px]">
            YOUR
            <span className="text-[#69BD45] ">
              
              TRUSTED PARTNER FOR REGULATORY <br/> COMPLIANCE{" "}
            </span>
            IN AFRICAN HEALTHCARE
          </p>
        </section>
        <section className="w-[35%]">
        <NavLink to="/ReadMore">
            <button className="bg-[#69BD45] text-white lg:p-2 p-1 lg:px-5 px-3 lg:text-[12px] text-[11px]  whitespace-nowrap rounded lg:mt-6 mt-7 mr-16  ">
              Read more
            </button>
          </NavLink>
        </section>
      </div>
    </div>
  );
}
