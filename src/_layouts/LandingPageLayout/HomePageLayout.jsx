import React from "react";
import logo1 from "../../assets/images/logo1.png";
import { Link, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import backgroundVideo from "../../assets/videos/backgroundvideo.mp4";

export default function Background() {
  return (
    <div className="relative max-w-screen h-screen overflow-x-hidden">
      <nav className="absolute h-screen w-full z-20 pt-6">
        <aside className="px-10 flex justify-between">
          <figure>
            <img src={logo1} alt="" width={150} />
          </figure>
          <ul className="flex justify-between gap-20">
            <li className="text-white hover:text-green-300 cursor-pointer">
              Home
            </li>
            <NavLink to="/aboutus">
              <li className="text-white hover:text-green-300 cursor-pointer">
                About Us
              </li>
            </NavLink>
            <NavLink to="/products">
              <li className="text-white hover:text-green-300 cursor-pointer">
                Product
              </li>
            </NavLink>
            <NavLink to="/insight">
              <li className="text-white hover:text-green-300 cursor-pointer">
                Insight
              </li>
            </NavLink>
            <NavLink to="/BookACall">
              <li>
                <button className="bg-green-500 px-3 py-1 rounded-md text-[14px] text-white ">
                  Book a call
                </button>
              </li>
            </NavLink>
          </ul>
        </aside>

        <div className="text-white px-10">
          <p
            style={{ lineHeight: "95px" }}
            className="mb-7 mt-20 font-bold text-[5rem]"
          >
            Unlocking African <br /> Healthcare
          </p>
          <p className="mb-7 w-[60%]">
            Infinity Health leverages technology to drive Market Access in
            Africa through innovative  <br /> regulatory, and business support
            solutions.
          </p>
          <div>
            <button className="text-[13px] px-14 mr-7 p-3 text-white rounded-md border-none bg-[#FF784B]">
              Watch video
            </button>
            <button className="text-[12px] font-bold px-14 mr-7 p-3 text-black rounded-md border-none bg-[#FFFFFF]">
              More about us
            </button>
          </div>
        </div>
      </nav>

      {/* Video and overlay container */}
      <div className="absolute w-full h-full top-0 left-0 z-10">
        {/* Dark overlay */}
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        {/* Video element */}
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source src={backgroundVideo} type="video/mp4" />
          {/* Add additional source tags for different video formats if needed */}
        </video>
      </div>
    </div>
  );
}
