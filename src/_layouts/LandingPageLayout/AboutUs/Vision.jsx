import React from "react";
import abouta from "../../../assets/images/abouta.png";
import aboutb from "../../../assets/images/aboutb.png";
import bg from "../../../assets/images/brand.png";

import FooterSections from "../FooterSections";
import team from "../../../assets/images/team.png";
import pix1 from "../../../assets/images/pix1.png";
import pix2 from "../../../assets/images/pix2.png";
import pix3 from "../../../assets/images/pix3.png";
import IMAGEEE from "../../../assets/images/IMAGEEE.png";
// import mainRead from "../../../assets/images/mainRead.jpg";
// import mainCharter from "../../../assets/images/mainCharter.jpg";
import mainRead from "../../../assets/images/mainRead .jpg";
import mainCharter from "../../../assets/images/mainCharter.jpg";
import { Link, NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { TbLetterX } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Vision() {
  return (
    <div>
      <div>
        <div className="flex lg:flex-row flex-col mt-0 gap-10 md:px-20 px-9">
          <div className="lg:w-[50%] w-full lg:mt-28  mt-14">
            <p className="text-red-500">Our Vision</p>
            <p className="font-bold md:text-[35px] text-[25px] leading-10 mt-3">
              The Beacon for African <br /> Healthcare
            </p>
            <p className="text-[15spx] text-[#757575] mt-6">
              To be the leading digital ecosystem, empowering a thriving and{" "}
              <br /> accessible healthcare landscape across Africa.
            </p>
          </div>
          <div className="lg:w-[50%] w-full ">
            <figure>
              <img src={pix1} alt="" />
            </figure>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex lg:flex-row flex-col mt-5 gap-y-5 md:px-20 px-9">
          <div className="lg-w-[50%] w-full ">
            <figure>
              <img src={pix2} alt="" className="md:flex hidden" />
            </figure>
          </div>
          <div className="lg-w-[50%] w-full lg:mt-28  mt-14  md:px-20 ">
            <p className="text-red-500">Our Mission</p>
            <p className="md:text-[35px] text-[25px] font-bold leading-10 mt-3">
              Empowering Healthcare Businesses to Thrive in Africa
            </p>
            <p className="text-[15px] text-[#757575] mt-6">
              Our mission is to empower healthcare businesses by providing them
              with the tools and resources to flourish and scale in the dynamic
              African healthcare market. We do this by developing innovative
              tech solutions to address critical industry challenges.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col mt-5 gap-10 md:px-20 px-9">
          <div className="lg:w-[50%] w-full lg:mt-28  mt-14">
            {/* <p className="text-red-500">About us</p> */}
            <p className="text-[35px] font-bold">Why us?</p>
            <p className="text-[15px] text-[#757575] mt-5">
              Imagine a future where Africa thrives, not just in economic
              strength, but in the vibrant health of its communities. At
              Infinity Health Africa, this isn’t just a dream, it’s the driving
              force behind everything we do. We believe that healthcare is a
              right, not a privilege. We see the potential for a vibrant
              continent where everyone has access to quality care. But we also
              know the challenges - fragmented systems, data gaps, and a complex
              regulatory environment.
            </p>
            <NavLink to="/ReadMore">
              <button className="text-white text-[13px] rounded-md bg-[#69BD45] p-2 px-5 mt-5">
                Read more
              </button>
            </NavLink>
          </div>
          <div className="lg:w-[50%] w-full">
            <figure>
              <img src={mainRead} alt="" />
            </figure>
          </div>
        </div>

        <div>
          <div className="flex lg:flex-row flex-col mt-5 gap-y-5 md:px-20 px-9">
            <div className="lg:w-[50%] w-full ">
              <figure>
                <img src={mainCharter} alt="" className="md:flex hidden" />
              </figure>
            </div>
            <div className="lg:w-[50%] w-full mt-28 md:px-20 mb-3">
              <p className="text-[35px] font-bold leading-10 mt-3">
                Our Charter
              </p>
              <p className="text-[15px] text-[#757575] mt-6">
                We envision ourselves as the leading digital ecosystem that
                fosters a thriving and accessible healthcare landscape across
                Africa. We are committed to driving innovation and progress,
                ensuring healthcare businesses have the tools and support they
                need to achieve success.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F9F9] h-auto p-24px">
          <div className="flex flex-row ">
            <div className="flex lg:flex-col flex-col mt-0 gap-y-5 gap-x-5 p-[80px] md:px-20 px-9">
              <div className="flex flex-col">
                <div className=" w-full">
                  <div className="w-[50%]">

                  <p className="text-[35px] font-bold leading-10 mt-3">Our Team</p>
                  <p className="text-[15px] text-[#757575] mt-6">
                    Our team is led by Irene Nwaukwa who has over 15 years
                    healthcare experience in regulatory compliance, market
                    penetration, business growth & development in healthcare
                    across Africa.
                  </p>
                  <p className="text-[15px] text-[#757575] mt-6">
                    We have a demonstrable history of successfully guiding
                    healthcare businesses through product registration, clinical
                    trial approvals and new product launches using a streamlined
                    process that helps them launch and scale quickly while
                    minimising risk.
                  </p>
                  </div>

                  {/* <button className="text-white text-[13px] rounded-md bg-[#69BD45] p-2 px-5 mt-5">
                  Read more
                  </button> */}
                  <div className="grid grid-cols-2 mt-7 gap-6">
                        <img src={IMAGEEE} alt=""  />
                    <div className="">
                      <p className="font-bold text-[22px]">Irene Nwaukwa</p>
                      <p className="text-[20px] mt-2">Founder/CEO</p>
                      <p className="text-[15px] mt-2">
                        Healthcare business expert with over 15 years in market
                        penetration, regulatory affairs, business growth &
                        development in healthcare across Africa.
                      </p>
                      <div className="flex flex-row gap-5 mt-4">
                        <a
                          href="https://x.com/irenenwaukwa?s=21&t=bdgcUlrFa861spv-9kAJLQ"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center gap-4 mb-3">
                            <FaXTwitter size={25} />
                          </div>
                        </a>

                        <a
                          href=" https://www.linkedin.com/in/irene-nwaukwa "
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center gap-4 mb-3">
                            <IoLogoLinkedin size={25} />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
