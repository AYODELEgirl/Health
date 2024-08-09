import React from "react";
// import logo1 from  "../../../assets/images/logo1.png"
import logo1 from "../../../assets/images/logo1.png";
import SigninNavbar from "./SigninNavbar";

export default function Signin({ modal, setModal, children }) {
  return (
    <div
      className={`bg-[#0b0b0b9e] fixed top-0 left-0 w-full h-screen overflow-hidden overflow-y-scroll z-[900000] flex justify-center items-center transition ease-in-out delay-500 transform ${
        modal
          ? "translate-y-0 pointer-events-auto"
          : "-translate-y-full pointer-events-none"
      }`}
      onClick={() => {
        setModal(false);
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white  w-[90%] md:w-[55%] s960:w-[45%]  rounded-lg overflow-auto overflow-x-hidden"
        style={{maxHeight: '34rem'}}
      >
        {/* <SigninNavbar /> */}
        <div className={``}>
          <div className="items-center p-6 s900:p-10 s1100:p-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
