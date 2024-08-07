import React from "react";
import exploreone from "../../../assets/images/exploreone.png";
import exploretwo from "../../../assets/images/exploretwo.png";
import explorethree from "../../../assets/images/explorethree.png";
import explorefour from "../../../assets/images/explorefour.png";
import iconwrap from "../../../assets/images/Iconwrap.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import exploreonenote from "../../../assets/images/exploreonenote.png";
import exploretwonote from "../../../assets/images/exploretwonote.png";
import explorethreenote from "../../../assets/images/explorethreenote.png";

export default function ExploreSection() {
  return (
    <div className="px-16">
      <div className="text-center mb-12">
        <p className="text-[21px] mb-4 font-bold mt-10">Explore Our Services</p>
        <p className="text-[#757575] text-[15px] ">
          Discover how ONBOARD can support your business in achieving regulatory
          compliance and unlocking <br /> new opportunities for growth. We
          tackle the challenges of doing business in Africa by
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-6 mb-20">
        <div className="bg-[#E9FFDF99] p-5 lg:w-[25%] w-full rounded-md">
          <div className="mb-4">
            <figure>
              <img src={exploreone} alt="" width={40} />
            </figure>
          </div>
          <div>
            <p className="text-[15px] font-bold mb-3">
              Product & Device Registration
            </p>
            <p className="mb-5 text-[14px]">
              Navigate regulatory hurdles and get your products to market
              faster.
            </p>
            <a
                    href="https://www.getonboard.africa/services?id=productDevice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
              <div className="flex flex-row  gap-4 mt-4 items-center">
                <p className="text-red-400">Register a product </p>
                <MdOutlineArrowOutward style={{ color: "#FF784B" }} />
              </div>
            </a>
          </div>
          {/* <div className="relative h-24">
            <figure className="absolute right-0 top-0">
              <img src={exploreonenote} alt="" width={80} />
            </figure>
          </div> */}
        </div>

        <div className="bg-[#E9FFDF99] p-5 lg:w-[25%] w-full rounded-md">
          <div className="mb-4">
            <figure>
              <img src={exploretwo} alt="" width={40} />
            </figure>
          </div>
          <div>
            <p className="text-[15px] font-bold mb-3">
              Facility Permits & Licenses
            </p>
            <p className="mb-5 text-[14px]">
              Ensure Compliance and operational efficiency with ease.
            </p>
            <a
                    href="https://www.getonboard.africa/services?id=permitLicense"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
            <div className="flex flex-row  gap-4 mt-4 items-center">
              <p className="text-red-400">Register a facility</p>
              <MdOutlineArrowOutward style={{ color: "#FF784B" }} />
            </div>
            </a>
          </div>
          {/* <div className="relative h-28">
            <figure className="absolute right-0 top-0">
              <img src={exploretwonote} alt="" width={80} />
            </figure>
          </div> */}
        </div>

        <div className="bg-[#E9FFDF99] p-5 lg:w-[25%] w-full  rounded-md">
          <div className="mb-4">
            <figure>
              <img src={explorethree} alt="" width={40} />
            </figure>
          </div>
          <div>
            <p className="text-[15px] font-bold mb-3">
              Clinical Trial Licenses
            </p>
            <p className="mb-5 text-[14px]">
              Get support for clinical trial projects with local expertise.
            </p>
            <a
                    href="https://www.getonboard.africa/services?id=trialLicense"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
            <div className="flex flex-row  gap-4 mt-4 items-center">
              <p className="text-red-400">Get started</p>
              <MdOutlineArrowOutward style={{ color: "#FF784B" }} />
            </div>
            </a>
          </div>
          {/* <div className="relative h-28">
            <figure className="absolute right-0 top-0">
              <img src={explorethreenote} alt="" width={80} />
            </figure>
          </div> */}
        </div>

        <div className="bg-[#E9FFDF99] p-5 lg:w-[25%] w-full rounded-md">
          <div className="mb-4">
            <figure>
              <img src={explorefour} alt="" width={40} />
            </figure>
          </div>
          <div>
            <p className="text-[15px] font-bold mb-3">
              Regulatory Compliance Support
            </p>
            <p className="mb-1 text-[14px]">
            Comprehensive support to help you set up and maintain internal regulatory processes

            </p>
            <a
                    href="https://www.getonboard.africa/services?id=complianceSupport"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
            <div className="flex flex-row  gap-4 items-center">
              <p className="text-red-400">Contact us </p>
              <MdOutlineArrowOutward style={{ color: "#FF784B" }} />
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
