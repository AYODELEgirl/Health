import React, { useEffect, useState } from "react";
import logo1 from "../../assets/images/logo1.png";
import { Link, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import theVideo from "../../assets/videos/theVideo.mp4";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import styled from "styled-components";

export default function Background() {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false);
      }
    };
// test commemt push
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative max-w-screen  sm:h-screen h-[100vh] ">
      {/*  */}
      <nav
        className={`absolute top-0 w-full z-20 pt-6 md:px-8 px:8 p-8`}
        style={{ zIndex: "9999" }}
      >
        <aside
          className={`md:p-4 top-0  left-0 flex align-middle justify-between items-center ${
            isScrolled ? "scrolled" : "scrolledNo"
          }`}
          // data-aos="fade-down"
        >
          <figure>
            <img src={logo1} alt="" width={130} />
          </figure>
          <ul className="hidden justify-between pt-3 s900:flex gap-20">
            <li className="text-black hover:text-green-300 cursor-pointer">
              Home
            </li>
            <NavLink to="/about-us">
              <li
                className={`cursor-pointer ${
                  clicked ? "text-green-700" : "text-black"
                } hover:text-green-500`}
                onClick={handleClick}
              >
                About Us
              </li>
            </NavLink>
            <NavLink to="/products">
              <li className="text-black hover:text-green-300 cursor-pointer">
                Product
              </li>
            </NavLink>
            <NavLink to="/insights">
              <li className="text-black hover:text-green-300 cursor-pointer">
                Insights
              </li>
            </NavLink>
            <NavLink to="/book-a-call">
              <li>
                <button className="bg-green-500 px-3 py-1 rounded-md text-[14px] text-black">
                  Book a call
                </button>
              </li>
            </NavLink>
          </ul>
          <div
            className="flex s900:hidden text-black cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <CiMenuFries size={30} />
          </div>
        </aside>

        {showModal && (
          <div
            className="bg-[rgba(0,0,0,0.3)] fixed h-[100vh] w-[100vw] top-0 left-0 bottom-0 right-0 flex justify-end  items-center "
            style={{ transition: "ease-in", zIndex: "9999" }}
          >
            <div className="bg-white w-[55%] h-full " data-aos="fade-left">
              <div onClick={() => setShowModal(false)}>
                <LiaTimesSolid className="ml-5 pt-5 " size={70} color="green" />
              </div>

              <ul className="flex flex-col gap-16 p-8">
                <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                  Home
                </li>
                <NavLink to="/about-us">
                  <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                    About Us
                  </li>
                </NavLink>
                <NavLink to="/products">
                  <li className="text-gray-700 hover:text-green-500 cursor-pointer  text-[23px] ">
                    Products
                  </li>
                </NavLink>
                <NavLink to="/insights">
                  <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                    Insights
                  </li>
                </NavLink>
                <NavLink to="/book-a-call">
                  <li>
                    <button className="bg-green-500 px-3 py-1 rounded-md text-[23px] text-gray-700  ">
                      Book a call
                    </button>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        )}

        <div className="text-white m-auto max-w-screen-xl sm:mt-40 ">
          {/* <p
            style={{ lineHeight: "95px" }}
            className="mb-7 mt-20 font-bold text-[5rem] sm:text-sm"
          >
            Unlocking African <br /> Healthcare
          </p> */}
          <p
            data-aos="fade-right"
            className="mb-7 text-black md:mt-16 mt-48 font-bold text-2xl md:text-4xl lg:text-6xl xl:text-10xl leading-10 md:leading-[70px] lg:leading-[75px]"
          >
            Unlocking African <br /> Healthcare
          </p>

          <p  data-aos="fade-left" className="mb-7 md:w-[60%] w-full flex text-sm md:text-base text-black">
            Infinity Health leverages technology to drive Market Access in
            Africa through innovative <br /> regulatory, and business support
            solutions.
          </p>
          <div className="flex items-center gap-7 flex-col lg:flex-row  ">
            <button className="text-[13px] px-14 p-3 text-white rounded-md border-none bg-[#FF784B] w-full md:w-auto">
              Watch video
            </button>
            <NavLink
              to="/about-us"
              className="text-[12px] font-bold flex items-center justify-center p-3 text-black rounded-md border-none bg-[#FFFFFF] w-full md:w-auto lg:px-14"
            >
              <button>More about us</button>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Video and overlay container */}
      <div className="absolute w-full h-full top-0 left-0 z-10">
        {/* Dark overlay */}
        {/* <div className="absolute w-full h-full bg-black opacity-50"></div> */}
        {/* Video element */}
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source src={theVideo} type="video/mp4" />
          {/* Add additional source tags for different video formats if needed */}
        </video>
      </div>
    </div>
  );
}
