import React from "react";
import price from "../../../assets/images/price.png";
import charrt from "../../../assets/images/charrt.png";
import process from "../../../assets/images/process.png";
import ca from "../../../assets/images/ca.png" 
import market from "../../../assets/images/market.png"
import clinical from "../../../assets/images/clinical.png"
import diss from "../../../assets/images/diss.png"
import { NavLink } from "react-router-dom";

export default function Global() {
  return (
    <div className=" p-16 mb-0 mt-0">
      <div>
        <p className="text-[#FF784B] text-[13px]">Our data solution</p>
        <p className="font-bold md:text-[30px] text-[17px]">
          Built for healthcare and life sciences <br /> organizations to succeed{" "}
        </p>
      </div>
      <div className="flex flex-row justify-around mt-8  gap-20">
      <div>

        <div className="flex lg:flex-row flex-col gap-14 ">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-5 items-center">
                <figure>
                  <img src={price} alt="" width={21} />
                </figure>
                <p className="font-bold text-[18px]">Price indices</p>
              </div>
              <div>
                <p className="text-[14px]">
                  Trusted research backed by data, <br /> expertise and
                  analytical rigour
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-5 items-center">
                <figure>
                  <img src={process} alt="" width={21} />
                </figure>
                <p className="font-bold text-[18px]">Regulatory processes</p>
              </div>
              <div>
                <p className="text-[14px]">
                  Proprietary & third-party data combined to simplify trends
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-5 items-center">
                <figure>
                  <img src={ca} alt="" width={21} />
                </figure>
                <p className="font-bold text-[18px]">Case studies</p>
              </div>
              <div>
                <p className="text-[14px]">
                  Economic datasets covering pricing, inflation, forex and more
                </p>
              </div>
            </div>
            <div className=""></div>
        <div>
       
        </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-5 items-center">
                <figure>
                  <img src={market} alt="" width={21} />
                </figure>
                <p className="font-bold text-[18px]">Market sizing</p>
              </div>
              <div>
                <p className="text-[14px]">
                  Trusted research backed by data, <br /> expertise and analytical
                  rigour
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-5 items-center">
                <figure>
                  <img src={clinical} alt="" width={21} />
                </figure>
                <p className="font-bold text-[18px]">Clinical Publications</p>
              </div>
              <div>
                <p className="text-[14px]">
                  Macro and micro estimation models  <br />combining economic and
                  industry data
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-5 items-center">
                <figure>
                  <img src={diss} alt="" width={21} />
                </figure>
                <p className="font-bold text-[18px]">Disease Prevalence</p>
              </div>
              <div>
                <p className="text-[14px]">
                  Live briefings for management teams and decision makers
                </p>
              </div>
            </div>
        
          </div>
        
        </div>
        <NavLink to="/BookACall">
          <button className="bg-[#FF784B] p-2 text-white text-[13px] rounded-lg px-7 mt-4">
            Request Demo
          </button>
          </NavLink>
          </div>


        <div className="sm:flex hidden">
          <figure>
            <img src={charrt} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
