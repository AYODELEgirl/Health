import React from "react";
import analyticsbakground from "../../assets/images/analyticsbackground.png";
import footerlogo from "../../assets/images/footerlogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbLetterX } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function FooterSections({activeTab,setActiveTab}) {
  return (
    <div>
      <div
        className="pr-16 pl-11 px-8 pt-5 "
        style={{
          backgroundImage: `url(${analyticsbakground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover',
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between border-b lg:h-[300px]">
          <div className="p-3 lg:w-[45%]">
            <img src={footerlogo} alt="" width={150} />
            <p className="text-white mb-10 mt-5">
            Join our newsletter to get updated on the latest developments in African health

            </p>
            <div className="flex flex-col lg:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-[#757575] text-[12px] outline-none md:w-[160%] bg-white px-2  py-2 border border-gray-300 rounded" 
                   
                />
              <button className="bg-[#69BD45] md:w-[40%] text-white p-2 px-5 text-[12px] rounded">
                Subscribe
              </button>
            </div>
            <p className="text-white text-[12px] mt-3">
              By subscribing you agree with our privacy policy and provide
              consent to receive updates from infinity health
            </p>
          </div>

          <div className="w-[45%] sm:p-6 flex flex-col lg:flex-row gap-y-12 justify-between leading-10 mt-10">
            <div className="text-white">
              <h1 className="text-[21px] font-semibold">Company</h1>
              <NavLink to="/about-us">
                <p>About us</p>
              </NavLink>
              <a href="/products">
                <p className="whitespace-nowrap">Our products</p>
              </a>
            </div>
            <div className="text-white">
              <h1 className="text-[21px] font-semibold whitespace-nowrap">
                Our products
              </h1>
            
              <a href="#data" onClick={() =>{
                setActiveTab("Regulatory Support")
              }}>
                <p>Onboard</p>
                </a>
                <a href="#data" onClick={() => {
                setActiveTab("Insights")
                localStorage.setItem("current","market")}}>
                <p>Insights</p>
                </a>
                <a href="#data" onClick={() =>{
                setActiveTab("Launch Support")
              }}>
                <p>Launch Support</p>
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
                <p>Linkedin</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse gap-10 justify-between  mt-8">
          <div className="mb-8">
            <p className="text-white text-[12px]">
              2024 infinity health. All rights reserved
            </p>
          </div>
          <div className=" lg:flex-row gap-10 flex flex-col ">
            <p className="underline text-[12px] text-white">Privacy Policy</p>
            <p className="underline text-[12px] text-white">Terms of service</p>
            <p className="underline text-[12px] text-white">Cookies settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSections;
