import React, { useState } from "react";
import logo1 from "../../assets/images/logo1.png";
import { Link, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import backgroundVideo from "../../assets/videos/backgroundvideo.mp4";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import styled from "styled-components";

export default function Background() {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <HomepPageStyle>
      <div className="relative max-w-screen h-screen overflow-x-hidden">
        {/*  */}
        <nav className="absolute h-screen w-full z-20 pt-6">
          <aside className="px-10 flex justify-between">
            <figure>
              <img src={logo1} alt="" width={130} />
            </figure>
            <ul className="hidden justify-between s900:flex gap-20">
              <li className="text-white hover:text-green-300 cursor-pointer">
                Home
              </li>
              <NavLink to="/aboutus">
                <li
                  className={`cursor-pointer ${
                    clicked ? "text-green-700" : "text-white"
                  } hover:text-green-500`}
                  onClick={handleClick}
                >
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
            <div
              className="flex s900:hidden text-white cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <CiMenuFries size={30} />
            </div>
          </aside>

          {showModal && (
            <div className="bg-[rgba(0,0,0,0.3)] fixed h-[100vh] w-[100vw] top-0 left-0 bottom-0 right-0 flex justify-end  items-center ">
              <div className="bg-white w-[35%] h-full ">
                <div onClick={() => setShowModal(false)}>
                  <LiaTimesSolid
                    className="ml-5 pt-5 "
                    size={70}
                    color="green"
                  />
                </div>

                <ul className="flex flex-col gap-16 p-8">
                  <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                    Home
                  </li>
                  <NavLink to="/aboutus">
                    <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                      About Us
                    </li>
                  </NavLink>
                  <NavLink to="/products">
                    <li className="text-gray-700 hover:text-green-500 cursor-pointer  text-[23px] ">
                      Product
                    </li>
                  </NavLink>
                  <NavLink to="/insight">
                    <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                      Insight
                    </li>
                  </NavLink>
                  <NavLink to="/BookACall">
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

          <div className="text-white px-10">
            {/* <p
            style={{ lineHeight: "95px" }}
            className="mb-7 mt-20 font-bold text-[5rem] sm:text-sm"
          >
            Unlocking African <br /> Healthcare
          </p> */}
            <p
              style={{ lineHeight: "70px" }}
              className="mb-7 mt-28 font-bold text-lg md:text-4xl lg:text-6xl xl:text-10xl"
            >
              Unlocking African <br /> Healthcare
            </p>

            <p className="mb-7 w-[60%] hidden s450:flex">
              Infinity Health leverages technology to drive Market Access in
              Africa through innovative <br /> regulatory, and business support
              solutions.
            </p>
            <div>
              <button className="test text-[13px] px-14 mr-7 p-3 text-white rounded-md border-none bg-[#FF784B]">
                Watch video
              </button>
              <NavLink to="/aboutus">
                <button className="text-[12px] font-bold px-14 mr-7 p-3 text-black rounded-md border-none bg-[#FFFFFF]">
                  More about us
                </button>
              </NavLink>
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
    </HomepPageStyle>
  );
}

const HomepPageStyle = styled.div`
  .test {
  }
`;
