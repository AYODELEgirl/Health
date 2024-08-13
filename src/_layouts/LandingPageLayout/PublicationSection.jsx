import React, { useState } from "react";
import iconwrap from "../../assets/images/Iconwrap.png";
import publicone from "../../assets/images/publicone.jpg";
import public2 from "../../assets/images/public2.jpg";
// import public4 from "../../assets/images/public4.jpg";
import public4 from "../../assets/images/public4.jpg";
import public5 from "../../assets/images/public5.jpg";
import { LiaTimesSolid } from "react-icons/lia";
// import public6 from "../../assets/images/public6.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";
import download from "../../assets/images/download.png";

// import iconn from "../../assets/images/iconn.png"
export default function PublicationSection() {
  const [openModal1, setOpenModal1] = useState();
  const [openModal2, setOpenModal2] = useState();
  const [openModal3, setOpenModal3] = useState();

  return (
    <>
      {openModal1 && (
        <div>
          <section className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-20 ">
            <div className="bg-white p-[1rem] px-10 w-[82%] ">
              <div
                onClick={() => setOpenModal1(false)}
                className="cursor-pointer flex justify-end"
              >
                <LiaTimesSolid size={25} />
              </div>
              <section className="flex justify-center gap-[2rem]">
                <aside className="w-[40%]">
                  <div>
                    <img src={publicone} width={1000} className="mt-12" />
                  </div>
                </aside>
                <aside className="w-[60%]">
                  <div className="font-semibold text-[1.8rem] mt-9 mb-4">
                    Medical Device Registration
                  </div>
                  <div>
                    This paper examines the issue of data paucity and its
                    profound impact on market access within the African
                    healthcare sector. In Africa, the scarcity of comprehensive
                    and high-quality health data has far-reaching implications
                    for decision-making, healthcare investments, and the entry
                    of healthcare companies into the market. The continent,
                    burdened by high disease prevalence and under-resourced
                    healthcare systems, faces challenges in understanding health
                    trends and efficiently allocating resources due to a lack of
                    reliable data.
                  </div>
                </aside>
              </section>
              <aside className="flex justify-center pl-11">
                {/* <div className="">
                          <img src={share} alt="" width={40} />
                          <p className="text-[#667085]">Share</p>
                        </div> */}
                <div className=" mb-12 pr-20 ">
                  <a
                    href="https://drive.google.com/file/d/1iuKBg75zWyx7XVFpykL3dwkpvybcdchO/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=""
                      alt=""
                      width={40}
                      className="inline-block mr-6 "
                    />
                    <img
                      src={download}
                      alt=""
                      width={40}
                      className="inline-block mr-6 "
                    />
                    <p className="text-[#FF784B] inline-block">
                      Download Full Report
                    </p>
                  </a>
                </div>
              </aside>
            </div>
          </section>
        </div>
      )}

      {openModal2 && (
        <div>
          <section className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-20 ">
            <div className="bg-white p-[1rem] px-10 w-[82%] ">
              <div
                onClick={() => setOpenModal2(false)}
                className="cursor-pointer flex justify-end"
              >
                <LiaTimesSolid size={25} />
              </div>
              <section className="flex justify-center gap-[2rem]">
                <aside className="w-[40%]">
                  <div>
                    <img src={public2} width={1000} className="mt-12" />
                  </div>
                </aside>
                <aside className="w-[60%]">
                  <div className="font-semibold text-[1.8rem] mt-9 mb-4">
                    Global Impact Of Unsafe Food.
                  </div>
                  <div>
                    Every day, about 1.6 million people around the world become
                    sick from eating unsafe food, many of them small children.
                    Safe food is critical for public health and requires global
                    attention and action.
                  </div>
                </aside>
              </section>
              <aside className="flex justify-center pl-11">
                {/* <div className="">
                          <img src={share} alt="" width={40} />
                          <p className="text-[#667085]">Share</p>
                        </div> */}
                <div className=" mb-12 pr-20 ">
                  <a
                    href="https://drive.google.com/file/d/15j-uY50dFmbcAfK4dgap3J7hQN0-KYOB/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=""
                      alt=""
                      width={40}
                      className="inline-block mr-6 "
                    />
                    <img
                      src={download}
                      alt=""
                      width={40}
                      className="inline-block mr-6 "
                    />
                    <p className="text-[#FF784B] inline-block">
                      Download Full Report
                    </p>
                  </a>
                </div>
              </aside>
            </div>
          </section>
        </div>
      )}

      {openModal3 && (
        <div>
          <section className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-20 ">
            <div className="bg-white p-[1rem] px-10 w-[82%] ">
              <div
                onClick={() => setOpenModal3(false)}
                className="cursor-pointer flex justify-end"
              >
                <LiaTimesSolid size={25} />
              </div>
              <section className="flex justify-center gap-[2rem]">
                <aside className="w-[40%]">
                  <div>
                    <img src={public4} width={1000} className="mt-12" />
                  </div>
                </aside>
                <aside className="w-[60%]">
                  <div className="font-semibold text-[1.8rem] mt-9 mb-4">
                    Menstrual Hygiene Day.
                  </div>
                  <div>
                    Sanitary pad prices have increased by 40-75%, forcing many
                    to switch to cheaper, less preferred products. This affects
                    the dignity and health of women and girls across Africa.
                  </div>
                </aside>
              </section>
              <aside className="flex justify-center pl-11">
                {/* <div className="">
                          <img src={share} alt="" width={40} />
                          <p className="text-[#667085]">Share</p>
                        </div> */}
                <div className=" mb-12 pr-20 ">
                  <a
                    href="https://drive.google.com/file/d/1KNXLAo9SB1-kBYSS4BmZ98rM1ejaw3yX/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=""
                      alt=""
                      width={40}
                      className="inline-block mr-6 "
                    />
                    <img
                      src={download}
                      alt=""
                      width={40}
                      className="inline-block mr-6 "
                    />
                    <p className="text-[#FF784B] inline-block">
                      Download Full Report
                    </p>
                  </a>
                </div>
              </aside>
            </div>
          </section>
        </div>
      )}

      <div className="pt-5 px-8 pb-10">
        <div className="p-1">
          <p className=" text-red-400 text-[12px]">What's new</p>
          <h2 className="font-bold text-[30px]">Recent Publications</h2>
          <p className="text-[14px] text-[#667085]">
            We're constantly curating the insights you need to understand the
            African Healthcare market
          </p>
        </div>
        <div className="p-1">
          <div className="grid lg:grid-cols-3 gap-10 ">
            <div className=" absolute flex justify-between p-3">
              <button className="bg-[#FFF6E5]  text-[#667085] p-2 mt-3 font-semibold z-10 backdrop-filter rounded-2xl px-4 text-[12px]">
                Case Studies
              </button>
            </div>
            <div
              className=""
              onClick={() => {
                setOpenModal1(true);
              }}
            >
              <figure>
                <img
                  src={publicone}
                  alt=""
                  width={350}
                  className="mb-5 w-full"
                />
              </figure>
              <div className="flex flex-row gap-1">
                <div className="flex jusify-between">
                  <p className="font-bold text-xl md:text-[24px] mb-3">
                    Medical Device Registration
                  </p>
                  {/* <MdOutlineArrowOutward style={{ color: "black" }} size={20} /> */}
                </div>
              </div>
              <p className="text-[13px]">
                A medical device is defined as 'An article, in- strument,
                apparatus or machine that is used in the prevention, diagnosis
                or treatment...
              </p>
              <div className="flex flex-row  gap-4 mt-4 items-center">
                <p className="text-red-400 cursor-pointer">Read more</p>
                <MdOutlineArrowOutward style={{ color: "#FF784B" }} size={20} />
              </div>
            </div>

            <div>
              <div className=" absolute flex justify-between p-3">
                <button className="bg-[#D6FFC4]  text-[#667085] p-2 mt-3 font-semibold z-10 backdrop-filter rounded-2xl px-4 text-[12px]">
                  Infographics
                </button>
              </div>
              <div
                className=""
                onClick={() => {
                  setOpenModal2(true);
                }}
              >
                <figure className="flex">
                  <img
                    src={public2}
                    alt=""
                    width={350}
                    className="mb-5 w-full"
                  />
                </figure>
                <div className="flex justify-between">
                  <p className="font-bold md:text-[24px] text-lg mb-3">
                    Global Impact of Unsafe Food
                  </p>
                  {/* <MdOutlineArrowOutward style={{ color: "black" }} size={20} /> */}
                  {/* <figure>
                <img src={iconwrap} alt="" />
              </figure> */}
                </div>
                <p className="text-[13px]">
                  Every day, about 1.6 million people around the world become
                  sick from eating unsafe food, many of them small children.
                  Safe...
                </p>
                <div className="flex flex-row mt-4 gap-4 items-center">
                  <p className="text-red-400 cursor-pointer ">Read more</p>
                  <MdOutlineArrowOutward style={{ color: "#FF784B" }} />
                  <figure></figure>
                </div>
              </div>
            </div>

            <div>
              <div className=" absolute flex justify-between p-3">
                <button className="bg-[#FFF6E5]  text-[#667085] p-2 mt-3 font-semibold z-10 backdrop-filter rounded-2xl px-4 text-[12px]">
                  News
                </button>
              </div>
              <div>
                <div
                  className=""
                  onClick={() => {
                    setOpenModal3(true);
                  }}
                >
                  <figure>
                    <img
                      src={public4}
                      alt=""
                      width={350}
                      className="mb-5 w-full"
                    />
                  </figure>
                  <div className="flex justify-between">
                    <p className="font-bold md:text-[24px] text-lg mb-3">
                      Menstrual Hygiene Day 2024
                    </p>
                    {/* <MdOutlineArrowOutward style={{ color: "black" }} size={20} /> */}
                  </div>
                  <p className="text-[13px]">
                    Sanitary pad prices have increased by 40-75%, forcing many
                    to switch to cheaper, less preferred products. This affects
                    the dignity...
                  </p>
                  <div className="flex flex-row gap-4 items-center mt-4">
                    <p className="text-red-400 cursor-pointer">Read more</p>
                    <MdOutlineArrowOutward style={{ color: "#FF784B" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
