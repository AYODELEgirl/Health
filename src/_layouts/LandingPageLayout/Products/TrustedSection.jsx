import React from "react";
import { NavLink } from "react-router-dom";

export default function TrustedSection() {
  return (
    <div className="flex justify-center">
      <div className="bg-[#E8FFDE] rounded-md w-[80%] p-10 flex flex-row gap-2 lg:h-[150px] h-auto">
        <section className="lg:w-[65%] w-full">
          <p className="lg:text-[23px] md:text-[20px] text-xs font-bold lg:leading-[35px]">
            YOUR <span className="text-[#69BD45] "> TRUSTED PARTNER FOR REGULATORY <br/> COMPLIANCE{" "}
            </span>
            IN AFRICAN HEALTHCARE
          </p>
        </section>
        <section className="w-[35%] flex flex-row gap-2 items-center">
          <NavLink to="/ReadMore">
            <button className="bg-[#69BD45] text-white lg:p-2 p-1 lg:px-5 px-3 lg:text-[12px] text-[11px]  whitespace-nowrap rounded">
              Read more
            </button>
          </NavLink>
          <NavLink to="/ReadMore">
            <button className="bg-[#FF784B] text-white lg:p-2 p-1 lg:px-5 px-3 lg:text-[12px] text-[11px]  whitespace-nowrap rounded">
              Request demo
            </button>
          </NavLink>
        </section>
      </div>
    </div>
  );
}
