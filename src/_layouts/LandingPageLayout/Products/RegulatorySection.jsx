import React from "react";
import onboardONE from "../../../assets/images/onboardONE.png";
import onboardlogo from "../../../assets/images/onboardlogo.png";

export default function RegulatorySection() {
  return (
    <div className="flex flex-row gap-12 p-12 mb-14">
      <section className="w-[50%] ">
        <div className="mb-1">
          <figure>
            <img src={onboardlogo} alt="" width={90} />
          </figure>
        </div>
        <div>
          <p className="text-[34px] font-bold leading-10 mb-5">Regulatory Compliance  <br /> Made Easy</p>
          <p className="text-[#757575] mb-5">
            Onboard helps healthcare businesses understand, navigate andmeet up
            with business and product regulatory standards.{" "}
          </p>
          <p className="text-[#757575] mb-5">
            We do this by guiding you through regulatory requirements for <br />
            registration, renewal and all certifications required for your  <br />
            business.
          </p>
          <div className="flex flex-row gap-4 mb-5">
            <button className="bg-[#69BD45] text-white p-2 px-5 text-[12px] rounded ">
              How it works
            </button>
            <button className="text-[#69BD45] bg-white p-2 px-5 text-[12px] rounded border border-solid border-[#69BD45]">
              create a request
            </button>
          </div>
        </div>
      </section>
      <section className="w-[50%]">
        <figure>
          <img src={onboardONE} alt="" width={500} />
        </figure>
      </section>
    </div>
  );
}
