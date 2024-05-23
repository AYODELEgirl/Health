import React from "react";
import logo1 from "../../assets/images/logo1.png";
import { Link, NavLink } from "react-router-dom";
import NavBar from "./NavBar";

export default function Background() {
  return (
    <div className=" max-w-screen h-screen overflow-x-hidden">
      <nav className="absolute h-screen overflow-x-hidden w-full z-10 pt-6">
        <aside className="px-10 flex justify-between">
          <figure>
            <img src={logo1} alt="" width={150} />
          </figure>
          <ul className="flex justify-between gap-8">
            <li className="text-white hover:text-green-700 cursor-pointer">
              Home
            </li>
            <NavLink to="/aboutus">
              <li className="text-white hover:text-green-700 cursor-pointer">
                About Us
              </li>
            </NavLink>
            <NavLink to="/products">
              <li className="text-white hover:text-green-700 cursor-pointer">
                Product
              </li>
            </NavLink>
            <NavLink to="/insight">
              <li className="text-white hover:text-green-700 cursor-pointer">
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
            style={{ lineHeight: "80px" }}
            className="mb-7  mt-20 font-medium text-[5rem]"
          >
            Unlocking African <br /> Healthcare
          </p>
          <p className="mb-7 w-[60%]">
            Infinity Health leverages technology to drive Market Access in
            Africa healthcare through <br /> innovative data and analytics,
            regulatory support and business solutions. Our mission is <br />{" "}
            simple: to improve quality healthcare across the continent by
            providing actionable <br />
            insights and robust business support
          </p>
          <div>
            <button className="text-[13px]  px-14 mr-7 p-3 text-white rounded-md border-none bg-[#FF784B]">
              Watch video
            </button>
            <button className="text-[12px] font-bold px-14 mr-7 p-3 text-black rounded-md border-none bg-[#FFFFFF]">
              More about us
            </button>
          </div>
        </div>
      </nav>
      {/* <NavBar/> */}
      {/* Video element */}
      <div className="bg-black/20 w-full h-screen absolute left-0 top-0">
        <video autoPlay loop muted className="h-full w-full object-cover ">
          {/* Video source */}
          <source
            src="../public/backgroundvideo.mp4"
            type="video/mp4"
          />
          {/* Add additional source tags for different video formats if needed */}
        </video>
      </div>
    </div>
  );
}
