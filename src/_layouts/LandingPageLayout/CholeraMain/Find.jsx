import React from "react";
import choleraImage from "../../../assets/images/choleraImage.png";

export default function Find() {
  return (
    <div>
      <div className="mb-0">
        <div
          className="bg-[#69BD45] w-full  p-10 "
          style={{
            backgroundImage: `url(${choleraImage})`,
            height: "500px",
          }}
        >
          <div className="mt-32 md:ml-7">
            <p className="text-white font-bold lg:text-[45px] md:text-[40px] text-[20px] mb-8">
              Find a Cholera Vaccination Centre
            </p>
            <p className="lg:text-[17px] md:text[12px] text-[10px] text-white font-normal">
              Vaccination is a safe and effective way to prevent cholera,
              especially for those travelling to or living <br /> in areas with a high
              risk of infection. By getting vaccinated, you protect yourself and
              support efforts  <br />  to control and eliminate cholera
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
