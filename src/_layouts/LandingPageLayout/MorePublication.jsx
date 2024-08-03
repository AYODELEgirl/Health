import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import publicone from "../../assets/images/publicone.jpg";
import public2 from "../../assets/images/public2.jpg";
import public3 from "../../assets/images/public3.jpg";
import rightarrow from "../../assets/images/rightarrow.png";
import publications from "../../assets/images/publications.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
import PublicationDetails from "./PublicationDetails";
import { LiaTimesSolid } from "react-icons/lia";

function MorePublication({ setMorePublication }) {
  const [publicationDetails, setPublicationDetails] = useState(false);
  const PPublicationdata = [
    {
      id: "1",
      info: "Impact of Data Paucity on Market Access in Healthcare",
      image: publicone,
      text: "This paper examines the issue of data paucity and its profound impact on market access within the African healthcare sector.",
      text2:
        "This paper examines the issue of data paucity and its profound impact on market access within the African healthcare sector. In Africa, the scarcity of comprehensive and high-quality health data has far-reaching implications for decision-making, healthcare investments, and the entry of healthcare companies into the market. The continent, burdened by high disease prevalence and under-resourced healthcare systems, faces challenges in understanding health trends and efficiently allocating resources due to a lack of reliable data.",
      link: "/ReadMore",
      type: "Whitepapers",
    },
    {
      id: "2",
      info: "Catalyzing Transformation: The Imperative of Homegrown Innovation in Africa",
      image: public2,
      text: "Across the African continent, a paradigm shift is underway, .",
      link: "/ReadMore",
      type: "Whitepapers",
    },
    {
      id: "3",
      info: "Harnessing Technology to Transform African Healthcare: The Top 5 Impactful Innovations",
      image: public3,
      text: "Technology has emerged as a powerful catalyst for transforming .",
      link: "/ReadMore",
      type: "Case studies",
    },
    {
      id: "4",
      info: "Building Sustainable Digital Health Startups in Africa: A Case for Data and Regulatory Support",
      image: publicone,
      text: "The digital health landscape in Africa is on the cusp of",
      link: "/ReadMore",
      type: "Whitepapers",
    },
    {
      id: "5",
      info: "Building Sustainable Digital Health Startups in Africa: Infographic Report",
      image: public2,
      text: "The digital health landscape in Africa is on the cusp of.",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "6",
      info: "Repositioning Nigerian SMEs for Regulatory Compliance and Business Success",
      image: public3,
      text: "In Nigeria, Small and Medium-sized Enterprises (SMEs) have.",
      link: "/ReadMore",
      type: "Whitepapers",
    },
    {
      id: "7",
      info: "The Importance of Vaccination in Preventing Hepatitis in Nigeria",
      image: public3,
      text: "World Hepatitis Week serves as a critical reminder of the  global fight against hepatitis, a group of viral infections  that pose",
      link: "/ReadMore",
      type: "Case studies",
    },
    {
      id: "8",
      info: "The Rise of Digital Health in Africa and Regulatory Considerations",
      image: public3,
      text: "The digital health revolution is transforming healthcare  systems.",
      link: "/ReadMore",
      type: "Whitepapers",
    },
    {
      id: "9",
      info: "Cholera Outbreak in Nigeria: A Case for Urgent Action and Sustainable Solutions",
      image: public3,
      text: "Nigeria is in the middle of a cholera crisis. As of June 24.",
      link: "/ReadMore",
      type: "Case studies",
    },
    {
      id: "10",
      info: "World Hypertension Day 2024",
      image: public3,
      text: "Hypertension is a leading cause of death, globally. Many countries in Sub Saharan Africa have seen little improvement in hypertension detection, treatment, and control over the past 30 .",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "11",
      info: "Menstrual Hygiene Day 2024",
      image: public3,
      text: "Sanitary pad prices have increased by 40-75%, forcing many to switch to cheaper, less preferred products. This affects the dignity and health of women and girls across Africa.",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "12",
      info: "Hepatitis in Africa",
      image: public3,
      text: " 63% of new hepatitis B infections globally occur in Africa. 10 countries, including Nigeria and Ethiopia, bear nearly two-thirds of the hepatitis burden in Africa. 4 million children under five .",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "13",
      info: "Access to Healthcare in Africa vs population growth",
      image: public3,
      text: "Africa's population is growing at a rapid pace, outstripping the development of healthcare infrastructure. Nigeria Five countries.",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "14",
      info: "Global Impact of Unsafe Food",
      image: public3,
      text: "Africa's population is growing at a rapid pace, outstripping the development of healthcare infrastructure. Nigeria Five countries.",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "15",
      info: "Medical Device Registration",
      image: public3,
      text: "A medical device is defined as 'An article, in- strument, apparatus or machine that is used in the prevention, diagnosis or treatment of illness or disease  or for detecting, measuring.",
      link: "/ReadMore",
      type: "News",
    },
    {
      id: "16",
      info: "We want to redefine access to quality healthcare",
      image: public3,
      text: "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget?.",
      link: "/ReadMore",
      type: "Case studies",
    },
  ];

  const [details, setDetails] = useState(PPublicationdata);

  const [navTab, setNavTab] = useState("All posts");

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [itemValue, setItemValue] = useState("");

  console.log(itemValue);

  const handleFilter = (name) => {
    const filtered = PPublicationdata.filter(
      (item) => item.type.toLowerCase() === name.toLowerCase()
    );
    console.log(filtered);
    setDetails(filtered);
  };

  const NavLink = [
    { name: "All posts", click: setDetails, value: PPublicationdata },
    { name: "Case studies", click: handleFilter, value: "Case studies" },
    { name: "Infographics", click: handleFilter, value: "Infographics" },
    { name: "Whitepapers", click: handleFilter, value: "Whitepapers" },
    { name: "Market Reports", click: handleFilter, value: "Market Reports" },
    { name: "Review Articles", click: handleFilter, value: "Review Articles" },
  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    const filtered = PPublicationdata.filter((item) =>
      item.info.toLowerCase().includes(value.toLowerCase())
    );
    setDetails(filtered);
  };

  return (
    <div>
      {publicationDetails ? (
        <PublicationDetails />
      ) : (
        <>
          <NavBar2 />
          <div className="p-8">
            <p
              className="flex items-center pl-6 gap-4 cursor-pointer"
              onClick={() => {
                setMorePublication(false);
              }}
            >
              {" "}
              <p>Back to insight</p>
              <AiOutlineArrowRight />
            </p>
            <div className="p-7">
              <p className=" text-red-400 text-[12px]">
                Insights and resources
              </p>
              <h2 className="font-bold md:text-[30px] text-[20px]">
                Latest Publications
              </h2>
              <p className="text-[14px] text-[#667085]">
                We're constantly curating the insight you need to understand the
                African Healthcare market
              </p>
            </div>
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
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="bg-[#F5F6F9] md:p-7 p-4 gap-[2rem]">
              {details?.length === 0 ? (
                <div className="text-center">No Data</div>
              ) : (
                <div className="md:p-7 p-4 grid s900:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]">
                  {details &&
                    details?.map((p) => {
                      return (
                        <div
                          className="flex lg:flex-row pb-10 flex-col "
                          onClick={() => {
                            setItemValue(p);
                            setOpenModal(true);
                          }}
                        >
                          <div className=" gap-10">
                            <div className=" absolute flex justify-between p-3">
                              <button className="bg-[#FFF6E5]  text-[#667085] p-2 mt-3 font-semibold z-10 backdrop-filter rounded-2xl px-4 text-[12px]">
                                {/* Case Studies */}
                                {p?.type}
                              </button>
                            </div>
                            <div className="">
                              <figure>
                                <img
                                  src={p?.image}
                                  alt=""
                                  width={400}
                                  className="mb-5 w-full"
                                />
                              </figure>
                              <div className="flex flex-row gap-1">
                                <div className="flex jusify-between">
                                  <p className="font-bold text-lg md:text-[24px] mb-3">
                                    {p.info}
                                  </p>
                                  <MdOutlineArrowOutward
                                    style={{ color: "black" }}
                                    size={20}
                                  />
                                </div>
                              </div>
                              <p className="text-[13px]">{p.text}</p>
                              <div className="flex flex-row  gap-4 mt-4 items-center">
                                <p className="text-red-400">Learn more</p>
                                <MdOutlineArrowOutward
                                  style={{ color: "#FF784B" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}

              {openModal && (
                <div>
                  <section className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-20">
                    <div className="bg-white p-[2rem] w-[60%] ">
                      <div
                        onClick={() => setOpenModal(false)}
                        className="cursor-pointer flex justify-end"
                      >
                        <LiaTimesSolid />
                      </div>
                      <section className="flex justify-between gap-[2rem]">
                        <aside className="w-[40%]">
                          <div>
                            <img src={itemValue.zzzzzzzz} alt="" width={"100%"} />
                           
                          </div>
                        </aside>
                        <aside className="w-[60%]">
                          <div className="font-semibold text-[1.8rem]">
                            {itemValue.info}
                          </div>
                          <div className="bg-[red]">{itemValue.text2}</div>
                        </aside>
                      </section>
                    </div>
                  </section>
                </div>
              )}

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
            {/* <div className="bg-[#F5F6F9] pb-10 flex justify-center">
        <button
          className="px-9 py-2 flex items-center rounded-md text-red-400 border border-red-400"
          onClick={() => {
            setMorePublication(true);
          }}
        >
          See More Publications
          <img src={rightarrow} alt="" />
        </button>
      </div> */}
          </div>
        </>
      )}
    </div>
  );
}

export default MorePublication;
