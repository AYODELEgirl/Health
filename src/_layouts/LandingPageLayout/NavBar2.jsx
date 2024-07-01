import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

export default function NavBar2() {
    const [showModal, setShowModal] = useState(false);
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!clicked);
    };
  return (
    <div>
      <nav className="overflow-x-hidden w-full z-10 pt-5 md:px-16 px-8 mb-1">
        <aside className="flex justify-between ">
          <NavLink to="/">
            <figure>
              <img src={logo1} alt="" width={130} />
            </figure>
          </NavLink>
          <ul className="hidden justify-between s900:flex  gap-20">
            <NavLink to="/">
            <li className={`text-black hover:text-green-700 ${window.location.pathname === "/home" ? "text-green-500":""}  cursor-pointer`}>
                Home
              </li>
            </NavLink>
            <NavLink to="/about-us">
              <li className={`text-black hover:text-green-700 ${window.location.pathname === "/about-us" ? "text-green-500":""}  cursor-pointer`}>
                About Us
              </li>
            </NavLink>
            <NavLink to="/products">
            <li className={`text-black hover:text-green-700 ${window.location.pathname === "/products" ? "text-green-500":""}  cursor-pointer`}>
                Products
              </li>
            </NavLink>
            <NavLink to="/insights">
            <li className={`text-black hover:text-green-700 ${window.location.pathname === "/insight" ? "text-green-500":""}  cursor-pointer`}>
                Insights
              </li>
            </NavLink>
            <NavLink to="/book-a-call">
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
              <CiMenuFries size={30} className="text-green-600" />
            </div>
        </aside>
        
        {showModal && (
            <div className="bg-[rgba(0,0,0,0.3)] z-[900] fixed h-[100vh] w-[100vw] top-0 left-0 bottom-0 right-0 flex justify-end  items-center ">
              <div className="bg-white w-[55%] h-full ">
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
          )}
      </nav>
    </div>
  );
}
