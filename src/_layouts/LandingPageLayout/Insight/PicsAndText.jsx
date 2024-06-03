import React from "react";
import insighta from "../../../assets/images/insighta.png";

export default function picsAndText() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-5 mt-0">
        <div className="lg:w-[50%] w-full lg:mt-28 mt-8 lg:px-16 p-4">
          <p className="text-red-500">Health system Enablers</p>
          <p className="text-[35px] font-bold mb-5">We want to become Beacon</p>
          <p className="text-[13px] text-[#757575]">
            We are a one-stop source for simplified and carefully curated
            African   <br /> Healthcare data and insights to support decision-making and
            market  <br /> access for players in the African healthcare market.
          </p>
        </div>
        <div className="lg:w-[50%] w-full sm:p-4">
          <figure>
            <img src={insighta} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
