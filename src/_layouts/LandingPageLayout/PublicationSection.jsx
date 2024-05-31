import React from "react";
import iconwrap from "../../assets/images/Iconwrap.png";
import publicone from "../../assets/images/publicone.jpg";
import public3 from "../../assets/images/public3.jpg";
import public2 from "../../assets/images/public2.jpg";
export default function PublicationSection() {
  return (
    <div>
      <div className="p-7">
        <p className=" text-red-400 text-[12px]">What's new</p>
        <h2 className="font-bold text-[30px]">Recent Publications</h2>
        <p className="text-[14px] text-[#667085]">
          We're constantly curating the insight you need to understand the
          African Healthcare market
        </p>
      </div>

      <div className="p-7">
        <div className="flex lg:flex-row flex-col gap-6">
          <div className=" absolute flex justify-between p-3">
            <button className="bg-[#FFF6E5]  text-[#667085] p-2 mt-3 font-semibold z-10 backdrop-filter rounded-2xl px-4 text-[12px]">
              Case Studies
            </button>
          </div>
          <div>
            <figure>
              <img src={publicone} alt="" width={400} className="mb-5" />
            </figure>
            <div className="flex flex-row gap-10">
              <p className="font-bold text-[24px] mb-3">
                We want to redefine access to quality healthcare
              </p>
              <figure>
                <img src={iconwrap} alt="" />
              </figure>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nemo laudantium nostrum modi quis! em quidem unde.
            </p>
            <div className="flex flex-row">
              <p className="text-red-400">Learn more</p>
              <figure>
                <img src={iconwrap} alt="" />
              </figure>
            </div>
          </div>

          <div>
            <div className=" absolute flex justify-between p-3">
              <button className="bg-[#D6FFC4]  text-[#667085] p-2 mt-3 font-semibold z-10 backdrop-filter rounded-2xl px-4 text-[12px]">
                Infographics
              </button>
            </div>
            <figure>
              <img src={public2} alt="" width={400} className="mb-5" />
            </figure>
            <div className="flex flex-row gap-10">
              <p className="font-bold text-[24px] mb-3">
                We want to redefine access to <br />
                quality healthcare
              </p>
              <figure>
                <img src={iconwrap} alt="" />
              </figure>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nemo laudantium nostrum modi quis! em quidem unde.
            </p>
            <div className="flex flex-row">
              <p className="text-red-400">Learn more</p>
              <figure>
                <img src={iconwrap} alt="" />
              </figure>
            </div>
          </div>

          <div>
            <div className=" absolute flex justify-between p-3">
              <button className="bg-[#FFF6E5]  text-[#667085] p-2 mt-3 font-semibold z-10 backdrop-filter rounded-2xl px-4 text-[12px]">
                News
              </button>
            </div>
            <div>
              <figure>
                <img src={public3} alt="" width={400} className="mb-5" />
              </figure>
              <div className="flex flex-row gap-10">
                <p className="font-bold text-[24px] mb-3">
                  We want to redefine access to <br />
                  quality healthcare
                </p>
                <figure>
                  <img src={iconwrap} alt="" />
                </figure>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                nemo laudantium nostrum modi quis! em quidem unde.
              </p>
              <div className="flex flex-row">
                <p className="text-red-400">Learn more</p>
                <figure>
                  <img src={iconwrap} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
