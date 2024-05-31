import React from "react";
import analyticsbakground from "../../assets/images/analyticsbackground.png";
import footerlogo from "../../assets/images/footerlogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbLetterX } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function FooterSection() {
  return (
    <div>
      <div
        className="pr-16 pl-11 pt-10 "
        style={{
          backgroundImage: `url(${analyticsbakground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover',
        }}
      >
        <div className="flex flex-row gap-48  border-b h-[300px]">
          <div className="p-6 w-[45%] ">
            <img src={footerlogo} alt="" width={150} />
            <p className="text-white mb-10 mt-5">
              Join our newsletter to get updated on the latest on African health
            </p>
            <div className="flex flex-row gap-3">
              <div className="relative inline-block">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-[#757575] text-[12px] bg-white px-36 py-2 border border-gray-300 rounded"
                  style={{
                    paddingLeft: "1rem", // Adjust this value as needed to align the placeholder text
                    paddingRight: "9rem", // Adjust this value as needed to keep overall padding consistent
                  }}
                />
              </div>
              <button className="bg-[#69BD45] text-white p-2 px-5 text-[12px] rounded ">
                Subscribe
              </button>
            </div>
            <p className="text-white text-[12px] mt-3">
              By subscribing you agree with our privacy policy and provide
              consent to receive updates from infinity health
            </p>
          </div>

          <div className="w-[55%] flex lg:flex-row flex-col gap-32 leading-10 mt-10">
            <div className="text-white">
              <h1 className="text-[21px] font-semibold">Company</h1>
              <NavLink to="/aboutus">
                <p>About us</p>
              </NavLink>
              <NavLink to="/products">
                <p className="whitespace-nowrap">Our products</p>
              </NavLink>
            </div>
            <div className="text-white">
              <h1 className="text-[21px] font-semibold whitespace-nowrap">
                Our products
              </h1>
              <a href="#data">
                <p>Onboard</p>
                </a>
                <a href="#data">
                <p>Insight</p>
                </a>
                <a href="#data">
                <p>Launch support</p>
                </a>
            </div>
            <div className="text-white">
              <h1 className="text-[21px] font-semibold">Follow us</h1>
              <div className="flex items-center gap-4">
                <FaFacebookF />
                <p>Facebook</p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <FaInstagram />
                <p>Instagram</p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <FaXTwitter />
                <TbLetterX className="w-6" />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <IoLogoLinkedin />
                <p>Linkedln</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-96 mt-8">
          <div>
            <p className="text-white text-[12px]">
              2024 infinity health. All rights reserved
            </p>
          </div>
          <div className="flex flex-row gap-10 ">
            <p className="underline text-[12px] text-white">Privacy Policy</p>
            <p className="underline text-[12px] text-white">Terms of service</p>
            <p className="underline text-[12px] text-white">Cookies settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
