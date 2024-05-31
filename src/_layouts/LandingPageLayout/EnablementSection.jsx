import React from "react";
import hands from "../../assets/images/hands.png";
import { NavLink } from "react-router-dom";
export default function EnablementSection() {
  return (
    <div className="flex flex-row">
      <section className="bg-[#E8FFDE] w-[50%]">
        <div className="mt-16 p-10">
          <p className="text-[15px]  text-red-400 mb-3">
            Health system enablers
          </p>
          <p className="font-bold text-[25px] mb-6">We can help</p>
          <p className=" text-11px text-[#667085] mb-6">
            We understand the complexities of African healthcare systems. Our
            teams <br /> of seasoned experts brings a wealth of expoerience and
            local knowledge <br /> to the table. This allows us to provide
            actionable data and strategies <br /> specifically tailored to the
            African context
          </p>
          <NavLink to="/BookACall">
            <button className="bg-[#69BD45] p-3 px-4 text-[11px] text-white rounded-md">
              Contact us
            </button>
          </NavLink>
        </div>
      </section>
      <section className="w-[50%]">
        <figure>
          <img src={hands} alt="" className="w-full h-[500px] object-cover" />
        </figure>
      </section>
    </div>
  );
}
