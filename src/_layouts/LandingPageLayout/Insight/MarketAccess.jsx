import React from "react";
import cloud from "../../../assets/images/cloud.png";

export default function MarketAccess() {
  return (
    <div className="bg-[#F9F9F9] h-[500px] mt-0">
        <div >
            <p className="font-bold text-[30px] text-center mt-5 ">Market Access and Data Insights tailored to your <br />  healthcare business needs</p>
        </div>
    <div className="flex flex-row gap-5 mt-16 p-8 justify-center items-center  ">
      <div className="bg-white h-[230px] flex flex-col gap-4 w-auto rounded-xl p-5">
        <div>
          <figure>
            <img src={cloud} alt="" width={50} />
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
            <img src={cloud} alt="" width={50} />
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
            <img src={cloud} alt="" width={50} />
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
    </div>
    </div>
  );
}
