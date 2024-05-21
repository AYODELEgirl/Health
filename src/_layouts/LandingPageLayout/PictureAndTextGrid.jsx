import React from "react";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";

export default function pictureAndTextGrid() {
  return (
    <div className="mt-20">
      <p className="text-[12px] text-red-400 text-center">Our Products</p>
      <p className="font-bold text-[28px] text-center">
        We want to redefine{" "}
        <span className="text-[#69BD45]"> access to quality healthcare</span>{" "}
        with <br />
        local insights, regulatory and business support
      </p>
      <div className="flex flex-row gap-7 p-14 justify-center">
        <div className="flex flex-col gap-5">
          <div className="bg-[#F6FFF2] w-[500px] h-[330px] flex flex-col gap-7 p-5">
            <div className="">
              <figure>
                <img src={first} alt="" width={50} />
              </figure>
            </div>
            <div className="">
              <p className="text-red-500 text-[14px]">
                Quality Healthcare across board
              </p>
              <p className="font-bold text-[34px] ">
                Technology and Data Powering quality Healthcare
              </p>
              <p className="text-[14px] mt-5 text-[#757575]">
                Infinity Health leverages technology to drive Market Access in
                African healthcare through innovative data and analytics,
                regulatory support and business solutions
              </p>
            </div>
          </div>
          <div className="bg-[#FFF3F2] w-[500px] h-[330px] flex flex-col gap-7 p-5">
            <div className="">
              <figure>
                <img src={second} alt="" width={70} />
              </figure>
            </div>
            <div className="">
              <p className="text-red-400 text-[14px]">
                Build meaningful Health Improvement
              </p>
              <p className="font-bold text-[34px] ">Wide Product Offering</p>
              <p className="text-[14px] mt-5 text-[#757575]">
                Infinity Health offers a comprehensive suite of services
                designed to address the challenges faced by healthcare
                businesses in Africa.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F6FFF2] w-[500px] h-[680px] p-5">
          <div className=" mb-11">
            <figure>
              <img src={third} alt="" width={60} />
            </figure>
          </div>
          <div className="">
            <p className="text-red-400 text-[14px] mb-5">Our Priorities</p>
            <p className="font-bold text-[32px] mb-6 ">
              Focused on Critical Healthcare and Life Science Segments
            </p>
            <p className="mb-6">We delivered targeted insights across multiple domains:</p>
            <ul className="list-disc leading-7 flex flex-col gap-5 text-[#757575]">
              <li className="text-[12px]">
               <span className="text-[14px] font-medium">  Pharmaceuticals: </span>From drug safety and efficacy to local
                manufacturing insights
              </li>
              <li  className="text-[12px]">
              <span className="text-[14px] font-medium"> Bioscience Products:</span> Market access insights on foods, Herbals
                and Wellness, Medical consumables and diagnostics products
              </li>
              <li className="text-[12px]">
              <span className="text-[14px] font-medium"> Infrastructure and Surveillance: </span>  Insight into harlthcare
                facilities, medical equipment availability, and public health
                surveillance metrics
              </li>
              <li  className="text-[12px]">
              <span className="text-[14px] font-medium"> Regulatory Insights: </span>  Guidance on compliance with ever-evolving
                regulatory requirements and policies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
