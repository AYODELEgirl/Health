import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

export default function NavBar2({ isScrolled = true }) {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav
        className={`overflow-hidden z-10 pt-10 md:px-16 px-8 mb-1 ${
          isScrolled ? "scrolled" : "scrolledNo"
        } `}
      >
        <aside className={`flex justify-between items-center `}>
          <div>
          <NavLink to="/">
            <figure>
              <img src={logo1} alt="" width={100} />
            </figure>
          </NavLink>
          </div>
          <ul className="hidden justify-between s900:flex gap-10 p-3">
            <NavLink to="/">
              <li
                className={`text-black hover:text-green-700 ${
                  window.location.pathname === "/home" ? "text-green-500" : ""
                }  cursor-pointer`}
              >
                Home
              </li>
            </NavLink>
            <NavLink to="/about-us">
              <li
                className={`text-black hover:text-green-700 ${
                  window.location.pathname === "/about-us"
                    ? "text-green-500"
                    : ""
                }  cursor-pointer`}
              >
                About Us
              </li>
            </NavLink>
            <NavLink to="/products">
              <li
                className={`text-black hover:text-green-700 ${
                  window.location.pathname === "/products"
                    ? "text-green-500"
                    : ""
                }  cursor-pointer`}
              >
                Products
              </li>
            </NavLink>
            <NavLink to="/insights">
              <li
                className={`text-black hover:text-green-700 ${
                  window.location.pathname === "/insight"
                    ? "text-green-500"
                    : ""
                }  cursor-pointer`}
              >
                Insights
              </li>
            </NavLink>
            <NavLink to="/book-a-call">
              <li>
                <button className="bg-green-500 px-3 py-1 rounded-md text-[14px] text-white whitespace-nowrap ">
                  Book a call
                </button>
              </li>
            </NavLink>
          </ul>

          <div
            className="flex s900:hidden text-white cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <CiMenuFries size={30} className="text-green-600" />
          </div>
        </aside>

        {/* {showModal && ( */}
        <div
          className={`transition-all duration-500 ease-in-out transform z-50 ${
            showModal
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"
          } fixed h-full w-full top-0 left-0 flex justify-end items-center bg-[rgba(0,0,0,0.3)]`}
        >
          <div className="bg-white w-[55%] h-full ">
            <div onClick={() => setShowModal(false)}>
              <LiaTimesSolid className="ml-5 pt-5 " size={70} color="green" />
            </div>

            <ul className="flex flex-col gap-16 p-8">
              <NavLink to="/">
                <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                  Home
                </li>
              </NavLink>
              <NavLink to="/about-us">
                <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                  About Us
                </li>
              </NavLink>
              <NavLink to="/products">
                <li className="text-gray-700 hover:text-green-500 cursor-pointer  text-[23px] ">
                  Product
                </li>
              </NavLink>
              <NavLink to="/insights">
                <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                  Insights
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
      </nav>
    </div>
  );
}
