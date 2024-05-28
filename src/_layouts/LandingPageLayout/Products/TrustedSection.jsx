import React from "react";
import { NavLink } from "react-router-dom";

export default function TrustedSection() {
  return (
    <div className="flex justify-center">
      <div
        className="bg-[#E8FFDE]  rounded-md mb-5 w-[80%] p-10 flex flex-row gap-16 "
        style={{ height: "150px" }}
        
      >
        <section className="w-[65%]">
          <p className="text-[23px] font-bold">
            YOUR{" "}
            <span className="text-[#69BD45] ">
              {" "}
              TRUSTED PARTNER FOR REGULATORY <br /> COMPLIANCE{" "}
            </span>{" "}
            IN AFRICAN HEALTHCARE
          </p>
        </section>
        <section className="w-[35%]">
        <NavLink to="/ReadMore">
            <button className="bg-[#69BD45] text-white p-2 px-5 text-[12px] rounded mt-6 mr-16 ">
              Read more
            </button>
          </NavLink>
        </section>
      </div>
    </div>
  );
}
