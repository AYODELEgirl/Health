import React from "react";
import first from "../../../assets/images/first.png";
import second from "../../../assets/images/second.png";
import specific from "../../../assets/images/specific.png";
import business from "../../../assets/images/business.png";
import { NavLink } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function MarketSection() {
  return (
    <div>
      <div className="flex flex-row gap-9 mb-10 mt-10 justify-center">
        <div className="flex flex-col gap-5">
          <div className="bg-[#E8E7E3] w-[500px] h-[350px] p-10 rounded-lg">
            <div className="mb-5">
              <figure>
                <img src={first} alt="" width={40} />
              </figure>
            </div>
            <p className="text-[35px] font-bold mb-6 ">Market Insight</p>
            <p className="text-[#757575] text-[14px] mb-8">
              Gain access to real time market insights and navigate regulatory
              complexities with ease. Our data analytics and regulatory support
              solutions provide the tools guidance you need to stay ahead of the
              competition.
            </p>
            <NavLink to="/book a call">
              <div
                className="flex gap-2"
                style={{
                  alignItems: "center",
                  color: "#69BD45",
                }}
              >
                <p>Contact us </p>
                <LiaLongArrowAltRightSolid />
              </div>
            </NavLink>
          </div>

          <div className="bg-[#FFF3F2] w-[500px] h-[350px] p-10 rounded-lg">
            <div>
              <figure>
                <img src={second} alt="" width={50} className="mb-5" />
              </figure>
            </div>
            <div>
              <p className="text-[35px] font-bold mb-6 ">Regulatory Insight</p>
              <p className="text-[#757575] text-[14px] mb-8">
                Navigate the complex regulatory landscape with confidence. Our
                tailored regulatory insights ensure compliance with ever
                -evolving requirements, giving you peace of mind as you expand
                your business.
              </p>
              <NavLink to="/book a call">
                <div
                  className="flex gap-2"
                  style={{
                    alignItems: "center",
                    color: "#D15A51",
                  }}
                >
                  <p>Contact us </p>
                  <LiaLongArrowAltRightSolid />
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-[#E8E7E3] w-[500px] h-[350px]  p-10 rounded-lg">
            <div>
              <figure>
                <img src={business} alt="" width={50} className="mb-5" />
              </figure>
            </div>
            <div>
              <p className="text-[35px] font-bold mb-6 ">Business Support</p>
              <p className="text-[#757575] text-[14px] mb-8">
                Gain access to real time market insights and navigate regulatory
                complexities with ease. Our data analytics and regulatory
                support solutions provide the tools guidance you need to stay
                ahead of the competition.
              </p>
              <NavLink to="/book a call">
                <div
                  className="flex gap-2"
                  style={{
                    alignItems: "center",
                    color: "#53ECF4",
                  }}
                >
                  <p>Contact us </p>
                  <LiaLongArrowAltRightSolid />
                </div>
              </NavLink>
            </div>
          </div>
          <div className="bg-[#FFF3F2] w-[500px] h-[350px]  p-10 rounded-lg">
            <div className="mb-5">
              <figure>
                <img src={specific} alt="" width={50} />
              </figure>
            </div>
            <div>
              <p className="text-[35px] font-bold mb-6 ">
                Ask Specific Questions
              </p>
              <p className="text-[#757575] text-[14px] mb-8">
                Contact us to schedule a consultation or send us an email. We’re
                here to help you make the most of your data.
              </p>
              <NavLink to="/book a call">
                <div
                  className="flex gap-2"
                  style={{
                    alignItems: "center",
                    color: "#D15A51",
                  }}
                >
                  <p>Contact us </p>
                  <LiaLongArrowAltRightSolid />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
