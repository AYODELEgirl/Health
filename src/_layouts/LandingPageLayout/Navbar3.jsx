import React, { useEffect, useState } from "react";
import logo1 from "../../assets/images/logo1.png";
import { Link, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import theVideo from "../../assets/videos/theVideo.mp4";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import styled from "styled-components";
import Signin from "./Signin/Signin";

export default function NavBar3() {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  console.log(showModal);

  const [isScrolled, setIsScrolled] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > window.innerHeight * 0.9) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   // test commemt push
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // console.log(window.scrollY, window.innerHeight * 0.4);

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <div className="bg-[#E8FFDE]">
      {/*  */}

      <Signin modal={modal} setModal={setModal}>
        <>
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => setModal(false)}
          >
            <LiaTimesSolid size={30} />
          </div>
          <p className="font-bold text-[30px] items-center text-center mb-12">
            Log in to your account
          </p>

          <form>
            <label for="name" class="block text-sm font-normal mb-1">
              Email Address
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your email"
            />

            <label for="name" class="block text-sm font-normal mt-4 ">
              Password
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Show"
            />

            <p className="flex justify-end mt-3 text-[12px] text-[#69BD45] cursor-pointer">
              Forget password?
            </p>

            <button className="bg-[#69BD45] items-center text-white w-[90%] rounded-md mt-7 py-2">
              Next
            </button>

            <p className="mt-5 text-center">
              Don't have an account?{" "}
              <span
                className="text-[#FF784B] cursor-pointer "
                onClick={() => {
                  setModal(false);
                  setModal2(true);
                }}
              >
                {" "}
                Sign up
              </span>
            </p>
          </form>
        </>
      </Signin>

      <Signin modal={modal2} setModal={setModal2}>
        <>
        <div
            className="flex justify-end cursor-pointer"
            onClick={() => setModal2(false)}
          >
            <LiaTimesSolid size={30} />
          </div>
          <p className="font-bold text-[35px] items-center text-center mb-2 md:text-[20px] mt-2 md:mt-0">
            Sign up on Infinity Health Africa
          </p>
          <p className="text-[#667085] text-[16px] mb-3 text-center">
            Create an account and get unlimited access to our publications in
            developments in African healthcare.
          </p>
          <form>
            <label for="name" class="block text-sm font-normal mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your name"
            />

            <label for="email" class="block text-sm font-normal mt-4 ">
              Email Address
            </label>
            <input
              type="text"
              id="name"
              name="email"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your email"
            />
            <label for="email" class="block text-sm font-normal mt-4 ">
              Country
            </label>
            <input
              type="text"
              id="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your country"
            />

            <label for="email" class="block text-sm font-normal mt-4 ">
              Phone Number
            </label>
            <input
              type="number"
              id="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your phone number"
            />
            <label for="email" class="block text-sm font-normal mt-4 ">
              Organization
            </label>
            <input
              type="text"
              id="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
            />
            <label for="email" class="block text-sm font-normal mt-4 ">
              Role
            </label>
            <input
              type="text"
              id="name"
              name="email"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your role"
            />
            <label for="email" class="block text-sm font-normal mt-4 ">
              Password
            </label>
            <input
              type="text"
              id="name"
              name="password"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your password"
            />

            <div
              className="bg-[#69BD45] items-center text-center text-white w-[90%] rounded-md mt-7 py-2"
              onClick={() => {
                setModal3(true);
                setModal2(false);
                console.log("hello");
              }}
            >
              Next
            </div>

            <p className="mt-5 text-center">
              Already have an account?{" "}
              <span
                className="text-[#FF784B] cursor-pointer "
                onClick={() => {
                  setModal2(false);
                  setModal(true);
                }}
              >
                {" "}
                Log in{" "}
              </span>
            </p>
          </form>
        </>
      </Signin>

      <Signin modal={modal3} setModal={setModal3}>
        <>
          <p className="font-bold text-[35px] items-center text-center mb-2">
            Sign in to your account
          </p>
          <p className="text-[#667085] text-[16px] mb-3 text-center">
            Create an account and get unlimited access to our publications on
            developments in African healthcare.
          </p>
          <form>
            <label for="name" class="block text-sm font-normal mb-1">
              Email Address
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your email"
            />

            <label for="name" class="block text-sm font-normal mt-4 ">
              Password
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Show"
            />

            <p className="ml-80 mt-3 text-[12px] text-[#69BD45] cursor-pointer">
              Forget password?
            </p>

            <button className="bg-[#69BD45] items-center text-white w-[90%] rounded-md mt-7 py-2">
              Next
            </button>

            <p className="mt-5 text-center">
              Already have an account?{" "}
              <span
                className="text-[#FF784B] cursor-pointer "
                onClick={() => {
                  setModal(true);
                  setModal2(false);
                }}
              >
                {" "}
                Log in{" "}
              </span>
            </p>
          </form>
        </>
      </Signin>

      <nav className={``}>
        <aside
          className={`md:px-4 top-0  left-0 flex align-middle justify-between items-center ${
            isScrolled ? "scrolled" : "scrolledNo"
          }`}
          style={{ zIndex: "9999", backgroundColor:"#E8FFDE" }}
          // data-aos="fade-down"
        >
          <figure>
            <img src={logo1} alt="" width={100} />
          </figure>
          <ul className="hidden justify-between pt-3 s900:flex gap-10">
            <NavLink to="/" className="text-black hover:text-green-700 cursor-pointer font-normal">
              Home
            </NavLink>
            <NavLink to="/about-us">
              <li
                className={`cursor-pointer ${
                  clicked ? "text-green-700" : "text-black"
                } hover:text-green-500 font-normal`}
                onClick={handleClick}
              >
                About Us
              </li>
            </NavLink>
            <NavLink to="/products">
              <li className="text-black hover:text-green-700 cursor-pointe  font-normal">
                Product
              </li>
            </NavLink>
            <NavLink to="/insights">
              <li className="text-black hover:text-green-700 cursor-pointer  font-normal">
                Insights
              </li>
            </NavLink>
            <NavLink to="/book-a-call">
              <li>
                <button className="bg-green-500 px-3 py-1 rounded-xl text-[14px] mb-2  font-normal text-black">
                  Book a call
                </button>
              </li>
            </NavLink>

            <li
              onClick={() => {
                setModal(true);
              }}
              className="text-black hover:text-green-700 cursor-pointer  font-normal"
            >
              Sign in
            </li>
          </ul>
          <div
            className="flex s900:hidden text-black cursor-pointer"
            onClick={() => {setShowModal(true); console.log(showModal);}}
          >
            <CiMenuFries size={30} />
          </div>
        </aside>


        
        <>
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              showModal
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-full pointer-events-none"
            } fixed h-full w-full top-0 left-0 flex justify-end items-center bg-[rgba(0,0,0,0.3)]`}
            style={{ zIndex: 9999 }}
          >
            <div className="bg-white w-[55%] h-full">
              <div
                onClick={() => {
                  setShowModal(false);
                  console.log(showModal);
                }}
              >
                <LiaTimesSolid className="ml-5 pt-5" size={70} color="green" />
              </div>
              <ul className="flex flex-col gap-10 p-8">
                <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                  Home
                </li>
                <NavLink to="/about-us">
                  <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
                    About Us
                  </li>
                </NavLink>
                <NavLink to="/products">
                  <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[23px]">
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
                    <button className="bg-green-500 px-2 py-1 rounded-md text-[23px] text-gray-700">
                      Book a call
                    </button>
                  </li>
                </NavLink>
                <li
              onClick={() => {
                setModal(true);
              }}
              className="text-black hover:text-green-700 cursor-pointer text-[23px] font-normal"
            >
              Sign in
            </li>
              </ul>
            </div>
          </div>
        </>
      </nav>
    </div>
  );
}
