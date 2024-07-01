import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";
export default function NavBar() {
  return (
    <div>
      <nav className="absolute overflow-x-hidden w-full z-10">
        <aside className="px-10 flex justify-between p-4 ">
          <NavLink to="/">
            <figure>
              <img src={logo1} alt="" width={150} />
            </figure>
          </NavLink>
          <ul className="flex justify-between  gap-8">
            <NavLink to="/">
              <li className="text-white hover:text-green-700 cursor-pointer">
                Home
              </li>
            </NavLink>
            <NavLink to="/about-us">
              <li className="text-white hover:text-green-700 cursor-pointer">
                About Us
              </li>
            </NavLink>

            <NavLink to="/products">
              <li className="text-white hover:text-green-700 cursor-pointer">
                Product
              </li>
            </NavLink>
            <li className="text-white hover:text-green-700 cursor-pointer">
              Insights
            </li>
            <li>
              <button className="bg-green-500 px-3 py-1 rounded-md text-[14px] text-white ">
                Book a call
              </button>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
  );
}
