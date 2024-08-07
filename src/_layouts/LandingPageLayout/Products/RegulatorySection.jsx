import React from "react";
import onboardONE from "../../../assets/images/onboardONE.png";
import newlogo from "../../../assets/images/newlogo.png";

export default function RegulatorySection() {
  return (
    <div className="flex lg:flex-row flex-col gap-12 p-12 mb-14">
      <section className="lg:w-[50%] w-full lg:px-8  px-0 pt-5 ">
        <div className="mb-1">
          <figure>
            <img src={newlogo} alt="" width={90} />
          </figure>
        </div>
        <div>
          <p className="md:text-[35px] text-[25px] text-[#3C592F] font-bold leading-[50px] mb-5">REGULATORY COMPLIANCE.  <br  className="hidden lg:block" /> <span className="text-[#69BD45]">MADE EASY.</span></p>
          <p className="text-[#757575] mb-5">
            Onboard helps healthcare and life sciences understand, navigate and comply
            with business and product regulatory standards.{" "}
          </p>
          <p className="text-[#757575] mb-5">
            We do this by guiding you through regulatory requirements for <br />
            registration, renewal and all certifications required for your  <br />
            business.
          </p>
          <div className="flex flex-row gap-4 mb-5">
          <a
                    href="https://www.getonboard.africa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
            <button className="bg-[#69BD45] text-white p-2 px-5 text-[12px] rounded ">
              How it works
            </button>
          </a>
          <a
                  href="https://www.getonboard.africa/services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
            <button className="text-[#69BD45] bg-white p-2 px-5 text-[12px] rounded border border-solid border-[#69BD45]">
              Create request
            </button>
            </a>
          </div>
        </div>
      </section>
      <section className="lg:w-[50%]  w-full px-8 pl-24 pt-5 sm:flex hidden">
        <figure>
          <img src={onboardONE} alt="" width={500} />
        </figure>
      </section>
    </div>
  );
}
