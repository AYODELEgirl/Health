import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import logo1 from "../../assets/images/logo1.png";
import { Link, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import theVideo from "../../assets/videos/theVideo.mp4";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import styled from "styled-components";
import Signin from "./Signin/Signin";
import { MdArrowDropDown } from "react-icons/md";
import { Dropdown, Avatar } from "rsuite";
import "rsuite/dist/rsuite.min.css";
// import iconnn from "../../assets/images/iconnn.png"
import { CgProfile } from "react-icons/cg";

import drop from "../../assets/images/drop.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Background() {
  const [otp, setOtp] = useState();
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const [isScrolled, setIsScrolled] = useState(true);

  const renderToggle = (props) => (
    <div className="flex flex-row cursor-pointer">
      <Avatar circle {...props} src={<CgProfile size={7} />} size="" />
      <MdArrowDropDown size={23} className="mt-1" />
    </div>
  );

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
  const [otpModal, setOPTModal] = useState(false);
  const [verifyLoading, setVeryloading] = useState();
  const [changeProfile, setChangeProfile] = useState(false);
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    phone: "",
    organization: "",
    role_: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const userToken = localStorage.getItem("token");
  console.log(userToken);
  async function SignUpHandler() {
    // setModal3(true);
    // setModal2(false);
    // console.log("hello");
    setLoading(true);
    const response = await fetch(
      `http://89.38.135.41:3002/api/v1/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signup),
      }
    );
    const server = await response.json();
    console.log(server);
    if (response?.status === 200) {
      toast.success(server?.msg);
      console.log(server?.data?.token);
      localStorage.setItem("token", server?.data?.token);
      setLoading(false);
      setModal2(false);
      setModal3(true);
    } else {
      toast.error(server?.msg);
      setLoading(false);
    }
    // SendOtp()
  }

  async function logInHandler(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`http://89.38.135.41:3002/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    });
    const server = await response.json();
    console.log(server);
    if (response?.status === 200) {
      toast.success(server?.msg);

      setLoading(false);
    } else {
      toast.error(server?.msg);
      setLoading(false);
    }
  }
  // async function SendOtp() {

  //   const response3 = await fetch(`http://89.38.135.41:3002/api/v1/auth/login`,{
  //     method:"POST",
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify(
  //       {
  //         email:"user.0@gmail.com",
  //         password:"User#0"
  // }
  //     )
  //   })

  //   const server3 = await response3.json()
  //   // setToken(server3?.data?.token)
  //   console.log('==================')
  //   console.log(server3)

  //    const response = await fetch (`http://89.38.135.41:3002/api/v1/auth/sendOTP`,{
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"application/json",
  //       Authorization:`Bearer ${userToken}`
  //     },
  //     body:JSON.stringify({email:email})
  //    })

  //    const server = await response.json()
  //    console.log(server)
  // }
  async function VerifyOtp() {
    setVeryloading(true);
    const response = await fetch(
      `http://89.38.135.41:3002/api/v1/auth/verifyOTP`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          otp: otp,
          email: email,
        }),
      }
    );
    const server = await response.json();
    console.log(server);
    if (response?.status === 200) {
      toast.success(server?.msg);
      setChangeProfile(true);
      setVeryloading(false);
      console.log(server?.data?.token);
      setTimeout(() => {
        setModal3(false);
      }, 1000);
    } else {
      toast.error(server?.msg);
      setVeryloading(false);
    }
  }

  console.log(login.email);

  async function verifyEmailHandler() {
    setVeryloading(true);

    try {
      const response = await fetch(
        `http://89.38.135.41:3002/api/v1/auth/sendOTP`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({ email: login.email }),
        }
      );

      const server = await response.json();

      if (response.ok) {
        // Using response.ok is more concise for checking if the status is 200-299
        toast.success(server?.msg);
        setOPTModal(false);
        setModal3(true);
        console.log(server?.data?.token);

        // Hide modal after 1 second
        // setTimeout(() => {
        //   setModal3(false);
        // }, 1000);
      } else {
        toast.error(server?.msg);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("An error occurred while sending the OTP. Please try again.");
    } finally {
      setVeryloading(false);
    }
  }

  return (
    <div className="relative max-w-screen  sm:h-screen h-[100vh] ">
      {/*  */}
      <ToastContainer />
      <Signin modal={otpModal} setModal={setOPTModal}>
        <>
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => setOPTModal(false)}
          >
            <LiaTimesSolid size={30} />
          </div>
          <p className="font-bold text-[30px] items-center text-center mb-12">
            Enter your Email
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
              onChange={(e) => {
                setLogin((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />

            <div
              className="bg-[#69BD45] items-center flex justify-center cursor-pointer text-white w-[90%] rounded-md mt-7 py-2 "
              onClick={verifyEmailHandler}
            >
              Next
            </div>

            {/* <p className=" text-center">
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
            </p> */}
            <p className="text-[12px] mt-5 text-center ] ">
              Back to
              <span
                className="text-[#FF784B] cursor-pointer"
                onClick={() => {
                  setModal(true);
                  setOPTModal(false);
                }}
              >
                {" "}
                Login
              </span>{" "}
            </p>
          </form>
        </>
      </Signin>

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
              onChange={(e) => {
                setLogin((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />

            <label for="name" class="block text-sm font-normal mt-4 ">
              Password
            </label>
            <input
              type="password"
              id="name"
              name="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your password"
              onChange={(e) => {
                setLogin((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              // placeholder="Show"
            />

            <p className="ml-80 mt-3 text-[12px] text-[#69BD45] cursor-pointer">
              Forget password?
            </p>

            <button
              className="bg-[#69BD45] items-center text-white w-[90%] rounded-md mt-7 py-2"
              onClick={logInHandler}
            >
              Log in 
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
            <p className="text-[12px] text-center ] ">
              Email not verified?
              <span
                className="text-[#FF784B] cursor-pointer"
                onClick={() => {
                  setModal(false);
                  setOPTModal(true);
                }}
              >
                {" "}
                Send OTP
              </span>{" "}
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
          <p className="font-bold text-[35px] items-center text-center mb-2">
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
              onChange={(e) => {
                setSignup((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
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
              onChange={(e) => {
                setSignup((prev) => {
                  return { ...prev, email: e.target.value };
                });
                setEmail(e.target.value);
              }}
            />
            <label for="email" class="block text-sm font-normal mt-4 ">
              Country
            </label>
            <input
              type="text"
              id="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your country"
              onChange={(e) => {
                setSignup((prev) => {
                  return { ...prev, country: e.target.value };
                });
              }}
            />

            <label for="email" class="block text-sm font-normal mt-4 ">
              Phone Number
            </label>
            <input
              type="number"
              id="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your phone number"
              onChange={(e) => {
                setSignup((prev) => {
                  return { ...prev, phone: e.target.value };
                });
              }}
            />
            <label for="email" class="block text-sm font-normal mt-4 ">
              Organization
            </label>
            <input
              type="text"
              placeholder="Enter your organization name"
              id="name"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              onChange={(e) => {
                setSignup((prev) => {
                  return { ...prev, organization: e.target.value };
                });
              }}
            />
            <label for="email" class="block text-sm font-normal mt-4 ">
              Role
            </label>
            <input
              type="text"
              id="name"
              name="email"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your role in your organization"
              onChange={(e) => {
                setSignup((prev) => {
                  return { ...prev, role_: e.target.value };
                });
              }}
            />
            <label for="email" class="block text-sm font-normal mt-4 ">
              Password
            </label>
            <input
              type="password"
              id="name"
              name="password"
              class="w-[90%] p-2 border rounded-md shadow-sm"
              placeholder="Enter your password"
              onChange={(e) => {
                setSignup((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
            />

            <div
              className="bg-[#69BD45] items-center text-center text-white w-[90%] rounded-md mt-7 py-2"
              onClick={SignUpHandler}
            >
              {loading ? "Loading...." : "Next"}
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
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => setModal3(false)}
          >
            <LiaTimesSolid size={30} />
          </div>
          <p className="font-bold text-[35px] items-center text-center mb-2">
            OTP Sent
          </p>
          <p className="text-[#667085] text-[14px] mb-3 text-center">
            An OTP was sent to test****@email.com
          </p>
          <div className="w-fit mx-auto">
            <OtpInput
              value={otp}
              onChange={(e) => {
                setOtp(e);
              }}
              numInputs={4}
              renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="p-6 text-black w-[70%] h-10  border rounded-md shadow-sm"
                  style={{
                    color: "#000",
                  }}
                />
              )}
            />
            <br />
          </div>
          <button
            onClick={VerifyOtp}
            className="bg-[#69BD45] p-3 px-48 text-white rounded-md"
          >
            {verifyLoading ? "loading..." : "Sign Up"}
          </button>

          <p className="text-[19px] mt-5 flex justify-center text-[#71717A]">
            Didn’t receive OTP?{" "}
            <span className="text-[#FF784B] text-[17px] ml-1">Resend</span>
          </p>
        </>
      </Signin>

      <nav
        className={`absolute top-0 w-[80%] lg:w-full z-20 pt-6 md:px-8 px:8 p-8`}
      >
        <aside
          className={`md:px-4 top-0  left-0 flex align-middle justify-between items-center ${
            isScrolled ? "scrolled" : "scrolledNo"
          }`}
          style={{ zIndex: "9999", backgroundColor: "#E8FFDE" }}
          // data-aos="fade-down"
        >
          <figure>
            <img src={logo1} alt="" width={100} />
          </figure>
          <ul className="hidden justify-between pt-3 s900:flex gap-8 items-center text-center">
            <li className="text-black hover:text-green-700 cursor-pointer font-normal">
              Home
            </li>
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
                <button className="bg-green-500 px-3 py-1 rounded-xl text-[14px] font-normal text-black">
                  Book a call
                </button>
              </li>
            </NavLink>

            {changeProfile ? (
              ""
            ) : (
              <li
                onClick={() => {
                  setModal(true);
                }}
                className="text-black hover:text-green-700 cursor-pointer mt-1 font-normal"
              >
                Sign in
              </li>
            )}
            {changeProfile && (
              <div className="">
                {/* <CgProfile size={30} /> */}
                <Dropdown renderToggle={renderToggle}>
                  <Dropdown.Item
                    onClick={() => {
                      setChangeProfile(false);
                    }}
                  >
                    Sign Out
                  </Dropdown.Item>
                       
                </Dropdown>
              </div>
            )}
          </ul>
          <div
            className="flex s900:hidden text-black cursor-pointer"
            onClick={() => {
              setShowModal(true);
              console.log(showModal);
            }}
          >
            <CiMenuFries size={30} />
          </div>
        </aside>

        {/* {showModal && (
          <div
            className={`bg-[rgba(0,0,0,0.3)] fixed h-[100vh] w-[100vw] top-0 left-0 bottom-0 right-0 flex justify-end  items-center transition-all duration-500 ease-in-out ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            // className={`transition-all duration-500 ease-in-out transform ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} md:opacity-100 md:scale-100 md:flex md:items-center`}
            style={{ transition: "ease-in", zIndex: "9999" }}
          >
            <div className="bg-white w-[55%] h-full ">
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
                    <button className="bg-green-500 px-3 py-1 rounded-md text-[23px] text-gray-700 whitespace-nowrap">
                      Book a call
                    </button>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        )} */}

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
                    <button className="bg-green-500 px-3 py-1 rounded-md text-[23px] text-gray-700">
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

          <p
            data-aos="fade-left"
            className="mb-7 md:w-[60%] w-full flex text-sm md:text-base text-black "
          >
            Infinity Health leverages technology to drive Market Access in
            Africa through innovative <br className="lg:inline hidden" />{" "}
            regulatory, and business support solutions.
          </p>
          <div className="flex items-center gap-7 flex-col lg:flex-row  ">
            <a href="#video-section">
              <button className="text-[13px] px-24 p-3 text-white rounded-md border-none bg-[#FF784B] w-full md:w-auto items-center justify-center lg:px-14">
                Watch video
              </button>
            </a>
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
