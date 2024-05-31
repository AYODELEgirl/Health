import React, { useState } from "react";
import logo1 from "../../assets/images/logo1.png";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import backgroundVideo from "../../assets/videos/backgroundvideo.mp4";

export default function Background() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative max-w-screen h-screen overflow-x-hidden">
      <nav className="absolute h-screen w-full z-20 pt-6">
        <aside className="px-6 md:px-10 flex justify-between items-center">
          <figure>
            <img src={logo1} alt="" className="w-32 md:w-40" />
          </figure>
          <div className="flex s900:hidden text-white cursor-pointer" onClick={() => setShowModal(true)}>
            <CiMenuFries size={30} />
          </div>
        </aside>
        <ul className="hidden justify-between s900:flex gap-10 md:gap-20">
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
              <button className="bg-green-500 px-4 py-2 rounded-md text-sm md:text-base text-white hover:bg-green-600 transition duration-200">
                Book a call
              </button>
            </li>
          </NavLink>
        </ul>

        {showModal && (
          <div className="fixed inset-0 flex justify-end items-center">
            <div className="bg-[rgba(0,0,0,0.3)] w-full h-full" onClick={() => setShowModal(false)}></div>
            <div className="bg-white w-4/5 md:w-1/2 lg:w-1/3 h-full">
              <div className="p-5">
                <LiaTimesSolid size={40} color="green" onClick={() => setShowModal(false)} />
              </div>
              <ul className="flex flex-col gap-8 p-8">
                <li className="text-gray-700 hover:text-green-500 cursor-pointer text-xl">
                  Home
                </li>
                <NavLink to="/aboutus">
                  <li className="text-gray-700 hover:text-green-500 cursor-pointer text-xl">
                    About Us
                  </li>
                </NavLink>
                <NavLink to="/products">
                  <li className="text-gray-700 hover:text-green-500 cursor-pointer text-xl">
                    Product
                  </li>
                </NavLink>
                <NavLink to="/insight">
                  <li className="text-gray-700 hover:text-green-500 cursor-pointer text-xl">
                    Insight
                  </li>
                </NavLink>
                <NavLink to="/BookACall">
                  <li>
                    <button className="bg-green-500 px-4 py-2 rounded-md text-xl text-gray-700 hover:bg-green-600 transition duration-200">
                      Book a call
                    </button>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        )}

        <div className="text-white px-6 md:px-10 pt-4 md:pt-0 pb-8 md:pb-0">
          <p className="mb-7 mt-20 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Unlocking African <br /> Healthcare
          </p>
          <p className="mb-7 w-screen md:w-3/4 lg:w-1/2 text-base md:text-lg lg:text-xl leading-relaxed">
            Infinity Health leverages technology to drive Market Access in Africa through innovative regulatory, and business support solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="text-sm md:text-base px-8 py-3 md:px-10 md:py-4 text-white rounded-md bg-[#FF784B] hover:bg-[#e66f3e] transition duration-200">
              Watch video
            </button>
            <NavLink to="/aboutus">
              <button className="text-sm md:text-base font-bold px-8 py-3 md:px-10 md:py-4 text-black rounded-md bg-white hover:bg-gray-100 transition duration-200">
                More about us
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="absolute w-screen h-full top-0 left-0 z-10">
        <div className="absolute w-screen h-full bg-black opacity-50"></div>
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
