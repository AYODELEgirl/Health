import React from "react";
import cloud from "../../../assets/images/cloud.png";
import Localexpertise from "../../../assets/images/Localexpertise.png"
import actionn from "../../../assets/images/actionn.png"
import research from "../../../assets/images/research.png"

export default function MarketAccess() {
  return (
    <div className="bg-[#F9F9F9] mt-0 ">
        <div >
            <p className="font-bold md:text-[30px] text-[17px] text-center mt-5 ">Market Access and Data Insights tailored to your <br />  healthcare business needs</p>
        </div>
    <div className="flex md:flex-row gap-5 mt-16 p-8 justify-center items-center flex-col ">
      <div className="bg-white h-[230px] flex flex-col  gap-4 w-auto rounded-xl p-5">
        <div>
          <figure>
          <img src={Localexpertise} alt="" width={40} />
          </figure>
        </div>
        <div>
          <p className="font-bold text-[24px]">Improved Forecasting</p>
          <p className="text-[#667085] text-12px mt-5">
            Lorem Ipsum Lorem Ipsum Lorem <br /> Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum
          </p>
        </div>
      </div>

      <div className="bg-white h-[230px] flex flex-col gap-4 w-auto rounded-xl p-5">
        <div>
          <figure>
          <img src={research} alt="" width={40} />
          </figure>
        </div>
        <div>
          <p className="font-bold text-[24px]">Launch Planning</p>
          <p className="text-[#667085] text-12px mt-5">
            Lorem Ipsum Lorem Ipsum Lorem <br /> Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum
          </p>
        </div>
      </div>
      <div className="bg-white h-[230px] flex flex-col gap-4 w-auto rounded-xl p-5">
        <div>
          <figure>
          <img src={actionn} alt="" width={40} />
          </figure>
        </div>
        <div>
          <p className="font-bold text-[24px]">Growth and Research</p>
          <p className="text-[#667085] text-12px mt-5">
            Lorem Ipsum Lorem Ipsum Lorem <br /> Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
