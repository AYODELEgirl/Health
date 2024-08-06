import React, { useState } from "react";
import publicone from "../../../assets/images/publicone.jpg";
import iconwrap from "../../../assets/images/Iconwrap.png";
// import public3 from "../../../assets/images/public3.jpg";
import public2 from "../../../assets/images/public2.jpg";
import public3 from "../../../assets/images/public3.jpg";
import public5 from "../../../assets/images/public5.jpg";
import public7 from "../../../assets/images/public7.jpg";
import rightarrow from "../../../assets/images/rightarrow.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { public4 } from "../../../assets/images";
export default function publication({ setMorePublication }) {
  const [navTab, setNavTab] = useState("All posts");

  // const [details,setDetails] = useState([])
  const data = [
    {
      id: "1",
      info: " Medical Device Registration",
      image: publicone,
      text: "A medical device is defined as 'An article, in- strument, apparatus or machine that is used in the prevention, diagnosis...",
      link: "/ReadMore",
      type: "Case studies",
    },
    {
      id: "2",
      info: "Global Impact of Unsafe Food",
      image: public2,
      text: "Every day, about 1.6 million people around the world become sick from eating unsafe food, many of them small children. Safe...",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "3",
      info: "Menstrual Hygiene Day 2024",
      image: public4,
      text: "Sanitary pad prices have increased by 40-75%, forcing many to switch to cheaper, less preferred products. This affects...",
      link: "/ReadMore",
      type: "News",
    },
    {
      id: "4",
      info: "Building Sustainable Digital Health Startups in Africa: Infographic Report",
      image: public5,
      text: "The digital health landscape in Africa is on the cusp of significant growth, with projections indicating a market value...",
      link: "/ReadMore",
      type: "case studies",
    },
    {
      id: "5",
      info: "World Hypertension Day 2024",
      image: public7,
      text: "Hypertension is a leading cause of death, globally. Many countries in Sub Saharan Africa have seen little improvement...",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "6",
      info: "Hepatitis in Africa",
      image: public3,
      text: "63% of new hepatitis B infections globally occur in Africa. 10 countries, including Nigeria and Ethiopia, bear nearly...",
      link: "/ReadMore",
      type: "News",
    },
  ];

  const [details, setDetails] = useState(data);
  const handleFilter = (name) => {
    const filtered = details.filter(
      (item) => item.type.toLowerCase() === name.toLowerCase()
    );
    console.log(filtered);
    setDetails(filtered);
    // Now you can do something with the filtered data, like updating the state
    // setDetails(filtered);
  };
  const NavLink = [
    { name: "All posts", click: setDetails, value: data },
    { name: "Case studies", click: handleFilter, value: "Case studies" },
    { name: "Infographics", click: handleFilter, value: "Infographics" },
    { name: "Whitepapers", click: handleFilter, value: "Whitepapers" },
    { name: "Market Reports", click: handleFilter, value: "Market Reports" },
    { name: "Review Articles", click: handleFilter, value: "Review Articles" },
  ];

  return (
    <div className="p-8">
      <div className="p-7">
        <p className=" text-red-400 text-[12px]">Insights and resources</p>
        <h2 className="font-bold md:text-[30px] text-[20px]">
          Latest Publications
        </h2>
        <p className="text-[14px] text-[#667085]">
          We're constantly curating the Insight you need to understand the
          African Healthcare market
        </p>
      </div>
      {/* <div className="hidden flex-row justify-between md:p-3 md:px-8 sm:flex p-1">
        <div className="flex flex-row gap-8 cursor-pointer">
        {NavLink?.map((e) => {
                  return (
                    <div
                      className="text-[14px] "
                      style={{
                        borderBottom:
                          e?.name === navTab ? "2px solid #ccc" : "",
                        color: e?.name === navTab ? "#69BD45" : "#667085",
                      }}
                      onClick={() => {
                        e.click(e.value);
                        setNavTab(e?.name);
                      }}
                    >
                      {e?.name}
                    </div>
                  );
                })}
          <p
            className="text-[14px] text-[#667085]"
            onClick={() => setDetails(data)}
          >
            All posts
          </p>
          <p
            className="text-[14px] text-[#667085]"
            onClick={() => handleFilter("Case studies")}
          >
            Case studies
          </p>
          <p
            className="text-[14px] text-[#667085]"
            onClick={() => handleFilter("Infographics")}
          >
            Infographics
          </p>
          <p
            className="text-[14px] text-[#667085]"
            onClick={() => handleFilter("News")}
          >
            News
          </p>
          <p
            className="text-[14px] text-[#667085]"
            onClick={() => handleFilter("Market report")}
          >
            Market report
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="p-1 px-11  rounded border border-gray-200 text-start sm:flex hidden"
          />
        </div>
      </div> */}
              <div className="hidden flex-row justify-between items-center md:p-3 md:px-8 sm:flex p-1">
              <div className="flex flex-row gap-8 cursor-pointer px-2">
                {NavLink?.map((e) => {
                  return (
                    <div
                      className="text-[14px] "
                      style={{
                        borderBottom:
                          e?.name === navTab ? "2px solid #ccc" : "",
                        color: e?.name === navTab ? "#69BD45" : "#667085",
                      }}
                      onClick={() => {
                        e.click(e.value);
                        setNavTab(e?.name);
                      }}
                    >
                      {e?.name}
                    </div>
                  );
                })}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search by topics or description"
                  className="p-1 px-[.8rem] w-[300px]  rounded border outline-none border-gray-200 text-start sm:flex hidden placeholder:text-[.9rem]"
                  // onChange={handleSearch}
                />
              </div>
            </div>

      <div className="bg-[#F5F6F9] md:p-7 p-4 grid s900:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]">
        {details &&
          details?.map((data) => {
            return (
              <div className="flex lg:flex-row pb-10 flex-col ">
                <div className=" gap-10">
                  <div className=" absolute flex justify-between p-3">
                    <button className="bg-[#FFF6E5]  text-[#667085] p-2 mt-3 font-semibold z-10 backdrop-filter rounded-2xl px-4 text-[12px]">
                      {/* Case Studies */}
                      {data?.type}
                    </button>
                  </div>
                  <div className="">
                    <figure className="w-full h-[300px]">
                      <img
                        src={data?.image}
                        alt=""
                        className="mb-5 w-full h-full"
                      />
                    </figure>
                    <div className="flex flex-row gap-1">
                      <div className="flex jusify-between">
                        <p className="font-bold text-lg md:text-[24px] mb-3">
                          {data.info}
                        </p>
                        <MdOutlineArrowOutward
                          style={{ color: "black" }}
                          size={20}
                        />
                      </div>
                    </div>
                    <p className="text-[13px]">
                    {data.text}
                    </p>
                    <div className="flex flex-row  gap-4 mt-7 items-center">
                      <p className="text-red-400">Read more</p>
                      <MdOutlineArrowOutward style={{ color: "#FF784B" }} />
                    </div>
                  </div>

                  {/* <div>
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
                  <figure>
                    <img src={iconwrap} alt="" />
                  </figure> 
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
              </div> */}

                  {/* <div>
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
              </div> */}
                </div>
              </div>
            );
          })}

        {/* <div className="flex lg:flex-row pb-10 flex-col gap-6">
          
        <div className="grid lg:grid-cols-3 gap-10">

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
                <p className="font-bold text-lg md:text-[24px] mb-3">
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

          {/* <div>
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
              <figure>
                <img src={iconwrap} alt="" />
              </figure> 
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
          </div> */}

        {/* <div>
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
          </div> */}
      </div>

      {/* </div> */}
      {/* <div className="grid lg:grid-cols-3 gap-10">
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
                <p className="font-bold text-lg md:text-[24px] mb-3">
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

          {/* <div>
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
               <figure>
                <img src={iconwrap} alt="" />
              </figure> 
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
          </div> */}

      {/* <div>
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
             </div> */}
      <div className="bg-[#F5F6F9] pb-10 flex justify-center">
        <button
          className="px-9 py-2 flex items-center rounded-md text-red-400 border border-red-400"
          onClick={() => {
            setMorePublication(true);
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top of the page
          }}
        >
          See More Publications
          <img src={rightarrow} alt="" />
        </button>
      </div>
    </div>
    // </div>
  );
}
