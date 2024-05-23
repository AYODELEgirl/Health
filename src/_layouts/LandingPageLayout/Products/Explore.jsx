import React from "react";
import insightaction from "../../../assets/images/insightaction.png";
import growthreserach from "../../../assets/images/growthreserach.png";
import Localexpertise from "../../../assets/images/Localexpertise.png";

export default function ExploreSection() {
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="font-bold text-[2rem] mb-3">
          Explore Our Services
        </h1>
        <p className="">
          Discover how ONBOARD can support your business in achieving regulatory <br />
          compliance and unlocking new opportunities for growth. We tackle the
          challenges  <br /> of doing business in Africa by
        </p>
      </div>
      <div className="flex flex-row gap-8 p-10">
        <section className="bg-[#69BD450A] rounded-3xl w-[424px] h-[382px]  items-center justify-center  flex flex-col gap-6 ">
          <div className="">
            <figure>
              <img src={Localexpertise} alt="" />
            </figure>
          </div>
          <div className="justify-center text-center">
            <h1 className="text-[28px] font-medium">Insightful action</h1>
            <p className="text-[12px] text-[#757575]">
              We distill complex data into clear, <br /> actionable strategies
              tailored for <br /> Africa's healthcare challenges
            </p>
          </div>
        </section>
        <section className="bg-[#69BD450A] rounded-3xl w-[424px] h-[382px]  items-center justify-center  flex flex-col gap-6 ">
          <div className="">
            <figure>
              <img src={Localexpertise} alt="" />
            </figure>
          </div>
          <div className="justify-center text-center">
            <h1 className="text-[28px] font-medium">Local expertise</h1>
            <p className="text-[12px] text-[#757575]">
              Through education and <br /> collaboration, we build local <br />{" "}
              expertise to sustainably advance <br /> healthcare systems in
              Africa
            </p>
          </div>
        </section>
        <section className="bg-[#69BD450A] rounded-3xl w-[424px] h-[382px]  items-center justify-center  flex flex-col gap-6 ">
          <div className="">
            <figure>
              <img src={Localexpertise} alt="" />
            </figure>
          </div>
          <div className="justify-center text-center">
            <h1 className="text-[28px] font-medium">Local expertise</h1>
            <p className="text-[12px] text-[#757575]">
              We're committed to helping <br /> healthcare businesses expand
              their <br />
              reach, ensuring quality healthcare is <br /> more accesible across
              the <br />
              continent
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
