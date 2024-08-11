import React from "react";
import mainHelp from "../../assets/images/mainHelp.jpg";
import { NavLink } from "react-router-dom";
export default function EnablementSection() {
  return (
    <div className="flex md:flex-row flex-col ">
      <section className="bg-[#E8FFDE] md:w-[50%] w-full px-8 pt-5">
        <div className="md:mt-16 mt:8 md:p-10 pb-4">
          <p className="text-[15px]  text-red-400 mb-3">
            Health system enablers
          </p>
          <p className="font-bold text-[25px] mb-6">We can help</p>
          <p className=" text-11px text-[#667085] mb-6">
            We understand the complexities of African healthcare systems. Our
            teams of seasoned experts brings a wealth of expoerience and
            local knowledge to the table. This allows us to provide
            actionable data and strategies specifically tailored to the
            African context
          </p>
          <a href="/BookACall">
            <button className="bg-[#69BD45] p-3 px-7 text-[12px] text-white rounded-md">
              Contact us
            </button>
          </a>
        </div>
      </section>
      <section className="md:w-[50%] w-full">
        <figure>
          <img src={mainHelp} alt="" className="w-full h-[500px] object-cover md:flex hidden" />
        </figure>
      </section>
    </div>
  );
}
