import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";

export default function NavBar2() {
  return (
    <div>
      <nav className="overflow-x-hidden w-full z-10">
        <aside className="px-10 flex justify-between p-4 ">
          <NavLink to="/">
            <figure>
              <img src={logo1} alt="" width={150} />
            </figure>
          </NavLink>
          <ul className="flex items-center justify-between  gap-8">
            <NavLink to="/">
              <li className="text-black hover:text-green-700 cursor-pointer">
                Home
              </li>
            </NavLink>
            <NavLink to="/aboutus">
              <li className="text-black hover:text-green-700 cursor-pointer">
                About Us
              </li>
            </NavLink>
            <NavLink to="/products">
              <li className="text-black  hover:text-green-700 cursor-pointer">
                Product
              </li>
            </NavLink>
            <NavLink to="/insight">
            <li className="text-black hover:text-green-700 cursor-pointer">
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
      </nav>
    </div>
  );
}
