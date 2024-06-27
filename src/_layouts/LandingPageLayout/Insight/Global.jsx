import React from "react";
import price from "../../../assets/images/price.png";
import pixxx from "../../../assets/images/pixxx.jpeg";
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
                Healthcare commodity and service price trends
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
                Reliable Insights on regulatory compliance and market entry planning

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
                Healthcare industry case studies for deep market understanding


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
                On-demand African Market Insights accessible viaDashboards

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
                Anonymised data and disease outcomes data for clinical trial planning


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
                Epidemiological studies to guide new product development
                </p>
              </div>
            </div>
        
          </div>
        
        </div>
        <a href="/BookACall">
          <button className="bg-[#FF784B] p-2 text-white text-[13px] rounded-lg px-7 mt-4">
            Request Demo
          </button>
          </a>
          </div>


        <div className="sm:flex hidden">
          <figure>
            <img src={pixxx} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
