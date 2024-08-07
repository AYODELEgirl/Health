import React from "react";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";

export default function PictureAndTextGrid() {
  return (
    <div className="mt-20 overflow-x-hidden m-auto max-w-screen-xl p-5">
      {/* <p className="text-[12px] text-red-400 text-center">Our Mission</p> */}
      <p className="font-bold md:text-[28px] mt-5 md:mt-0 text-center" data-aos="fade-down">
        We want to redefine{" "}
        <span className="text-[#69BD45]"> access to quality healthcare</span>{" "}
        with <br />
        local insights, regulatory and business support
      </p>
      <div className="m-auto flex gap-7 pt-5 justify-center items-center flex-col md:flex-row">
        <div className="flex flex-col gap-5" data-aos="fade-right">
          <div className="bg-[#F9FDFF] max-w-[600px] lg:h-[330px]  flex flex-col gap-7 pt-8 px-16 pb-2">
            <div>
              <figure>
                <img src={first} alt="" width={50} />
              </figure>
            </div>
            <div>
              <p className="text-red-500 text-[14px] mb-3" >
                Quality Healthcare across board
              </p>
              <p className="font-bold text-2xl mb-5  lg:text-[32px]">
                Technology and Data Powering quality Healthcare
              </p>
              <p className="text-[14px] mt-8 text-[#757575]">
                Infinity Health leverages technology to drive Market Access in
                African healthcare and life sciences through innovative data and analytics,
                regulatory support and business solutions
              </p>
            </div>
          </div>
          <div className="bg-[#FFF3F2] max-w-[600px] lg:h-[330px] flex flex-col gap-5 pt-8 px-12 pb-2">
            <div>
              <figure>
                <img src={second} alt="" width={70} />
              </figure>
            </div>
            <div>
              <p className="text-red-400 text-[14px] mb-2">
                Build meaningful Health Improvement
              </p>
              <p className="font-bold text-2xl  lg:text-[32px]">Wide Product Offering</p>
              <p className="text-[14px] mt-5 text-[#757575]">
                Infinity Health offers a comprehensive suite of services
                designed to address the challenges faced by healthcare
                businesses in Africa.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F6FFF2] max-w-[600px] lg:h-[680px] pt-8 px-12 pb-2" data-aos="fade-left">
          <div className="mb-11">
            <figure>
              <img src={third} alt="" width={60} />
            </figure>
          </div>
          <div>
            <p className="text-red-400 text-[14px] mb-5">Our Priorities</p>
            <p className="font-bold text-2xl  lg:text-[32px] mb-6">
              Focused on Critical Healthcare and Life Science Segments
            </p>
            <p className="mb-6">
              We delivered targeted insights across multiple domains:
            </p>
            <ul className="list-disc leading-7 flex flex-col gap-5 text-[#757575]">
              <li className="text-[14px]">
                <span className="text-[16px] font-medium">Pharmaceuticals:</span> From drug safety and efficacy to local
                manufacturing insights
              </li>
              <li className="text-[14px]">
                <span className="text-[16px] font-medium">Bioscience Products:</span> Market access insights on foods, Herbals
                and Wellness, Medical consumables and diagnostics products
              </li>
              <li className="text-[14px]">
                <span className="text-[16px] font-medium">Infrastructure and Surveillance:</span> Insight into healthcare
                facilities, medical equipment availability, and public health
                surveillance metrics
              </li>
              <li className="text-[14px]">
                <span className="text-[16px] font-medium">Regulatory Insights:</span> Guidance on compliance with ever-evolving
                regulatory requirements and policies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
