import React from "react";
import abouta from "../../../assets/images/abouta.png";
import aboutb from "../../../assets/images/aboutb.png";
import bg from "../../../assets/images/brand.png";
import FooterSections from "../FooterSections";
import team from "../../../assets/images/team.png";
import charter from "../../../assets/images/charter.png";
import footerlogo from "../../../assets/images/footerlogo.png";

export default function Vision() {
  return (
    <div>
      <div>
        <div className="flex lg:flex-row flex-col mt-0 gap-y-5">
          <div className="lg:w-[50%] w-full mt-28 lg:px-16 px-5">
            <p className="text-red-500">Our team</p>
            <p className="font-bold text-[35px] leading-10 mt-3">
              The Beacon for African <br /> Healthcare
            </p>
            <p className="text-[13px] text-[#757575] mt-6">
            To be the leading digital ecosystem, empowering a thriving and accessible healthcare landscape across Africa.
            </p>
          </div>
          <div className="lg:w-[50%] w-full ">
            <figure>
              <img src={abouta} alt="" />
            </figure>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex lg:flex-row flex-col mt-5 gap-y-5 px-20">
          <div className="lg-w-[50%] w-full ">
            <figure>
              <img src={aboutb} alt="" />
            </figure>
          </div>
          <div className="lg-w-[50%] w-full lg:mt-28  mt-14 lg:px-16 px-5">
            <p className="text-red-500">Our Mission</p>
            <p className="text-[35px] font-bold leading-10 mt-3">
              Improving Healthcare penetration in Africa
            </p>
            <p className="text-[13px] text-[#757575] mt-6">
              To improve access to quality healthcare goods and services through
              simplified access and market solutions.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col mt-5 gap-10 px-20">
          <div className="lg:w-[50%] w-full lg:mt-28  mt-14">
            <p className="text-red-500">About us</p>
            <p className="text-[35px] font-bold">Why us?</p>
            <p className="text-[13px] text-[#757575] mt-5">
              Imagine a future where Africa thrives, not just in economic
              strength, but in the vibrant health of its communities. At
              Infinity Health Africa, this isn’t just a dream, it’s the driving
              force behind everything we do. We believe that healthcare is a
              right, not a privilege. We see the potential for a vibrant
              continent where everyone has access to quality care. But we also
              know the challenges - fragmented systems, data gaps, and a complex
              regulatory environment.
            </p>
            <button className="text-white text-[13px] rounded-md bg-[#69BD45] p-2 px-5 mt-5">
              Read more
            </button>
          </div>
          <div className="lg:w-[50%] w-full">
            <figure>
              <img src={abouta} alt="" />
            </figure>
          </div>
        </div>

        <div>
          <div className="flex lg:flex-row flex-col mt-5 gap-y-5 px-20">
            <div className="lg:w-[50%] w-full ">
              <figure>
                <img src={charter} alt="" />
              </figure>
            </div>
            <div className="lg:w-[50%] w-full mt-28 lg:px-16 px-5">
              <p className="text-[35px] font-bold leading-10 mt-3">
                Our Charter
              </p>
              <p className="text-[13px] text-[#757575] mt-6">
                We envision ourselves as the leading digital ecosystem that
                fosters a thriving and accessible healthcare landscape across
                Africa. We are committed to driving innovation and progress,
                ensuring healthcare businesses have the tools and support they
                need to achieve success.
              </p>
              <button className="text-white text-[13px] rounded-md bg-[#69BD45] p-2 px-5 mt-5">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F9F9] h-auto p-24px">
          <div>
            <div className="flex lg:flex-row flex-col mt-0 gap-y-5 gap-x-5 p-[80px]">
              <div className="lg:w-[50%] w-full ">
                <figure>
                  <img src={team} alt="" />
                </figure>
              </div>
              <div className="lg:w-[50%] w-full mt-28 lg:px-16 px-5 ">
              <p className="text-red-500">Our team</p>
            <p className="text-[13px] text-[#757575] mt-6">
              Our  team led by Irene Nwaukwa and Uduak XXXXXX are healthcare
              industry experts with 25 years experience between them in
              regulatory compliance, market penetration, business growth &
              development in healthcare across Africa.
            </p>
            <p className="text-[13px] text-[#757575] mt-6">
              We have a demonstrable history of successfully guiding healthcare
              businesses through product registration, clinical trial approvals
              and new product launches using a streamlined  process that helps
              them launch and scale quickly while minimizing risk.
            </p>
                <button className="text-white text-[13px] rounded-md bg-[#69BD45] p-2 px-5 mt-5">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center p-4 mt-20">
          <div
            className="bg-[#69BD45] rounded-md w-[80%] p-10"
            style={{
              backgroundImage: `url(${bg})`,
              height: "200px",
            }}
          >
            <div>
              <img src={footerlogo} alt="" width={110} />
            </div>
            <div className="flex flex-row gap-48">
              <div className="flex flex-col gap-3">
                <p className="text-white">Join 2,000 plus subscribers</p>
                <p className="text-white">
                  Stay in the loop with everything you need to know
                </p>
              </div>
              <div>
                <div className="flex flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="text-[#757575] text-[12px] bg-white px-36 py-2 border border-gray-300 rounded"
                    style={{
                      paddingLeft: "1rem", // Adjust this value as needed to align the placeholder text
                      paddingRight: "9rem", // Adjust this value as needed to keep overall padding consistent
                    }}
                  />
                  <button className="text-[#69BD45] bg-white p-2 px-5 text-[12px] rounded">
                    Subscribe
                  </button>
                </div>
                <p className="text-white text-[10px] mt-2">
                  We care about your data in our <span className="underline">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <FooterSections />
      </div>
    </div>
  );
}
