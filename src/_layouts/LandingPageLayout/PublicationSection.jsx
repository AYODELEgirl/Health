import React from "react";
import iconwrap from "../../assets/images/Iconwrap.png";
import publicone from "../../assets/images/publicone.jpg";
import public3 from "../../assets/images/public3.jpg";
import public2 from "../../assets/images/public2.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";

// import iconn from "../../assets/images/iconn.png"
export default function PublicationSection() {
  return (
    <div className="pt-5 px-8">
      <div className="p-7">
        <p className=" text-red-400 text-[12px]">What's new</p>
        <h2 className="font-bold text-[30px]">Recent Publications</h2>
        <p className="text-[14px] text-[#667085]">
          We're constantly curating the insights you need to understand the
          African Healthcare market
        </p>
      </div>

      <div className="p-7">
        <div className="grid lg:grid-cols-3 gap-10 ">
          <div className=" absolute flex justify-between p-3">
            <button className="bg-[#FFF6E5]  text-[#667085] p-2 mt-3 font-semibold z-10 backdrop-filter rounded-2xl px-4 text-[12px]">
              Case Studies
            </button>
          </div>
          <div className="">
            <figure>
              <img src={publicone} alt="" width={350} className="mb-5 w-full" />
            </figure>
            <div className="flex flex-row gap-1">
              <div className="flex jusify-between">
                <p className="font-bold text-xl md:text-[24px] mb-3">
                  We want to redefine access to quality healthcare
                </p>
            <MdOutlineArrowOutward style={{color:"black"}} size={20}/>
              </div>
               
            </div>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Minus nemo laudantium nostrum modi quis! em quidem.
            </p>
            <div className="flex flex-row  gap-4 mt-4 items-center">
              <p className="text-red-400">Learn more</p>
              <MdOutlineArrowOutward style={{ color: "#FF784B" }} />
            </div>
          </div>

          <div>
            <div className=" absolute flex justify-between p-3">
              <button className="bg-[#D6FFC4]  text-[#667085] p-2 mt-3 font-semibold z-10 backdrop-filter rounded-2xl px-4 text-[12px]">
                Infographics
              </button>
            </div>
            <figure className="flex">
              <img src={public2} alt="" width={350} className="mb-5 w-full" />
            </figure>
            <div className="flex justify-between">
              <p className="font-bold md:text-[24px] text-lg mb-3">
                We want to redefine access to quality healthcare
              </p>
              <MdOutlineArrowOutward style={{color:"black"}} size={20}/>
              {/* <figure>
                <img src={iconwrap} alt="" />
              </figure> */}
            </div>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Minus nemo laudantium nostrum modi quis! em quidem.
            </p>
            <div className="flex flex-row mt-4  gap-4 items-center">
              <p className="text-red-400 ">Learn more</p>
              <MdOutlineArrowOutward style={{ color: "#FF784B" }} />
              <figure></figure>
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
                <img src={public3} alt="" width={350} className="mb-5 w-full" />
              </figure>
              <div className="flex justify-between">
                <p className="font-bold md:text-[24px] text-lg mb-3">
                  We want to redefine access to quality healthcare
                </p>
                <MdOutlineArrowOutward style={{color:"black"}} size={20}/>
               
              </div>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Minus nemo laudantium nostrum modi quis! em quidem.
              </p>
              <div className="flex flex-row gap-4 items-center mt-4">
                <p className="text-red-400">Learn more</p>
                <MdOutlineArrowOutward style={{ color: "#FF784B" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
