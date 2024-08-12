import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import publicone from "../../assets/images/publicone.jpg";
import public2 from "../../assets/images/public2.jpg";
import public3 from "../../assets/images/public3.jpg";
import public4 from "../../assets/images/public4.jpg";
import public5 from "../../assets/images/public5.jpg";
import public7 from "../../assets/images/public7.jpg";
import rightarrow from "../../assets/images/rightarrow.png";
import publications from "../../assets/images/publications.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
import PublicationDetails from "./PublicationDetails";
import { LiaTimesSolid } from "react-icons/lia";
import share from "../../assets/images/share.png";
import download from "../../assets/images/download.png";
import NavBar3 from "./Navbar3";

function MorePublication({ setMorePublication }) {
  //
  const [publicationDetails, setPublicationDetails] = useState(false);
  const PPublicationdata = [
    {
      id: "1",
      info: "Medical Device Registration",
      image: publicone,
      text: "A medical device is defined as 'An article, in- strument, apparatus or machine that is used in the prevention, diagnosis or treatment of illness or disease  or for detecting, measuring",
      text2:
        "This paper examines the issue of data paucity and its profound impact on market access within the African healthcare sector. In Africa, the scarcity of comprehensive and high-quality health data has far-reaching implications for decision-making, healthcare investments, and the entry of healthcare companies into the market. The continent, burdened by high disease prevalence and under-resourced healthcare systems, faces challenges in understanding health trends and efficiently allocating resources due to a lack of reliable data.",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "2",
      info: "Global Impact of Unsafe Food",
      image: public2,
      text: "Africa's population is growing at a rapid pace, outstripping the development of healthcare infrastructure. Nigeria Five countries.",
      text2:
        "Across the African continent, a paradigm shift is underway, driven by a growing recognition that sustainable progress in health outcomes cannot be achieved through a one-size-fits-all approach imposed from the outside. For too long, the African healthcare landscape has been shaped by external influences, from the legacies of colonialism to the importation of foreign technologies and interventions that fail to adequately address the nuanced contexts and challenges diverse populations face. This top-down approach has perpetuated dependency on foreign aid and expertise, hindering the cultivation of self-reliance and local ownership. In response, there is an urgent need to nurture and scale homegrown solutions",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "3",
      info: "Building Sustainable Digital Health Startups in Africa: Infographic Report",
      image: public5,
      text: "Technology has emerged as a powerful catalyst for transforming .",
      text2:
        "Technology has emerged as a powerful catalyst for transforming healthcare systems worldwide, offering innovative solutions to address longstanding challenges. In Africa, adopting technology in healthcare has the potential to bridge the gaps in access, affordability, and quality of care. By leveraging technological advancements, African nations can leapfrog traditional barriers and accelerate progress toward achieving universal health coverage and the Sustainable Development Goals (SDGs) related to health.",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "4",
      info: "Menstrual Hygiene Day 2024",
      image: public4,
      text: "Sanitary pad prices have increased by 40-75%, forcing many to switch to cheaper, less preferred products. This affects the dignity and health of women and girls across Africa.",
      text2:
        "The digital health landscape in Africa is on the cusp of significant growth, with projections indicating a market value of $6.93 billion by 2029. Digital health, broadly defined as the use of information and communication technologies to improve healthcare delivery and outcomes, encompasses a wide range of solutions from telemedicine to health informatics and wearable devices. This paper aims to understand the current state of Africa's digital health market, comparing it to global trends and analyzing the economic factors influencing its development. We'll examine the unique challenges confronting African health tech startups",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "5",
      info: "The Importance of Vaccination in Preventing Hepatitis in Nigeria",
      image: public3,
      text: "World Hepatitis Week serves as a critical reminder of the  global fight against hepatitis, a group of viral infections  that pose",
      text2:
        "The digital health landscape in Africa is on the cusp of significant growth, with projections indicating a market value of $6.93 billion by 2029. This report highlights the current state of Africa's digital health market, comparing it to global trends and analyzing the economic factors influencing its development as well as the unique challenges confronting African health tech startups.",
      link: "/ReadMore",
      type: "Review Articles",
    },
    {
      id: "6",
      info: "World Hypertension Day 2024",
      image: public7,
      text: "Hypertension is a leading cause of death, globally. Many countries in Sub Saharan Africa have seen little improvement in hypertension detection, treatment, and control over the past 30 .",
      text2:
        "In Nigeria, Small and Medium-sized Enterprises (SMEs) have been identified as vital catalysts for sustained economic development, rapid industrialization, poverty alleviation, and job creation (Central Bank of Nigeria, 2015). These entities not only contribute significantly to the Gross Domestic Product (GDP), making up 48% of Nigeria's GDP, but also employ more than 80% of the workforce, showcasing their pivotal role in the nation's economy (Nosike and Udekwesili, 2022; This Day, 2023). SMEs are instrumental in fostering self-reliant industrialization using local raw materials, enhancing employment, ensuring an equitable distribution of industrial development, and facilitating the expansion of non-oil exports. Despite their critical role, the sector faces considerable challenges. A decline from 41 million SMEs in 2017 to 39 million in 2021",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "7",
      info: "Impact of Data Paucity on Market Access in Healthcare ",
      image: public3,
      text: "This paper examines the issue of data paucity and its profound impact on market access within the African healthcare sector.",
      text2:
        "This paper examines the issue of data paucity and its profound impact on market access within the African healthcare sector. In Africa, the scarcity of comprehensive and high-quality health data has far-reaching implications for decision-making, healthcare investments, and the entry of healthcare companies into the market. The continent, burdened by high disease prevalence and under-resourced healthcare systems, faces challenges in understanding health trends and efficiently allocating resources due to a lack of reliable data.",
      link: "/ReadMore",
      type: "Whitepapers",
    },
    {
      id: "8",
      info: "The Rise of Digital Health in Africa and Regulatory Considerations",
      image: publicone,
      text: "The digital health revolution is transforming healthcare  systems.",
      text2:
        "The digital health revolution is transforming healthcare  systems globally, and Africa is no exception. As the continent  grapples with challenges like limited access to healthcare, a  shortage of healthcare professionals, and a high burden of  infectious diseases, digital health solutions offer innovative  ways to bridge gaps and improve health outcomes. This surge  in innovation, however, presents a unique challenge: how to  ensure these digital tools are safe, effective, and meet the  specific needs of African contexts. This article explores the  rise of digital health in Africa, its transformative impact, and  the crucial regulatory considerations that accompany this  technological evolution. ",
      link: "/ReadMore",
      type: "Whitepapers",
    },
    {
      id: "9",
      info: "Cholera Outbreak in Nigeria: A Case for Urgent Action and Sustainable Solutions",
      image: publicone,
      text: "Nigeria is in the middle of a cholera crisis. As of June 24.",
      text2:
        "Nigeria is in the middle of a cholera crisis. As of June 24, 2024, the Nigeria Centre for Disease Control and Prevention (NCDC) declared a national cholera emergency (1). According to the NCDC, 1,528 suspected cases and 53 deaths have been recorded across 31 states and 107 local government areas with a case fatality rate of 3.5 per cent since the beginning of the year (1). with over 1,528 suspected cases reported across 31 states. Lagos State, the country's commercial hub, has been notably impacted, recording 579 suspected cases and 29 deaths",
      link: "/ReadMore",
      type: "Review Articles",
    },
    {
      id: "10",
      info: "Repositioning Nigerian SMEs for Regulatory Compliance and Business Success",
      image: publicone,
      text: "In Nigeria, Small and Medium-sized Enterprises (SMEs) have been identified as vital catalysts for sustained economic development.",
      text2:
        "In Nigeria, Small and Medium-sized Enterprises (SMEs) have been identified as vital catalysts for sustained economic development, rapid industrialization, poverty alleviation, and job creation (Central Bank of Nigeria, 2015). These entities not only contribute significantly to the Gross Domestic Product (GDP), making up 48% of Nigeria's GDP, but also employ more than 80% of the workforce, showcasing their pivotal role in the nation's economy (Nosike and Udekwesili, 2022; This Day, 2023). SMEs are instrumental in fostering self-reliant industrialization using local raw materials, enhancing employment, ensuring an equitable distribution of industrial development, and facilitating the expansion of non-oil exports.Despite their critical role, the sector faces considerable challenges. A decline from 41 million SMEs in 2017 to 39 million in 2021",
      link: "/ReadMore",
      type: "Whitepapers",
    },
    {
      id: "11",
      info: "Building Sustainable Digital Health Startups in Africa: A Case for Data and Regulatory Support",
      image: publicone,
      text: "The digital health landscape in Africa is on the cusp of significant growth, with projections indicating a market value of $6.93 billion by 2029.",
      text2:
        "The digital health landscape in Africa is on the cusp of significant growth, with projections indicating a market value of $6.93 billion by 2029. Digital health, broadly defined as the use of information and communication technologies to improve healthcare delivery and outcomes, encompasses a wide range of solutions from telemedicine to health informatics and wearable devices.This paper aims to understand the current state of Africa's digital health market, comparing it to global trends and analyzing the economic factors influencing its development. We'll examine the unique challenges confronting African health tech startups",
      link: "/ReadMore",
      type: "Whitepapers",
    },
    {
      id: "12",
      info: "Hepatitis in Africa",
      image: publicone,
      text: " 63% of new hepatitis B infections globally occur in Africa. 10 countries, including Nigeria and Ethiopia, bear nearly two-thirds of the hepatitis burden in Africa. 4 million children under five .",
      text2:
        "63% of new hepatitis B infections globally occur in Africa. 10 countries, including Nigeria and Ethiopia, bear nearly two-thirds of the hepatitis burden in Africa. 4 million children under five with hepatitis B in Sub-Saharan Africa.",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "13",
      info: "Access to Healthcare in Africa vs population growth",
      image: publicone,
      text: "Africa's population is growing at a rapid pace, outstripping the development of healthcare infrastructure. Nigeria Five countries.",
      text2:
        "Africa's population is growing at a rapid pace, outstripping the development of healthcare infrastructure. Nigeria Five countries—Nigeria, Ethiopia, Democratic Republic of Congo, Tanzania, and South Africa—account for 45% of Africa's population, presenting unique healthcare challenges.",
      link: "/ReadMore",
      type: "Infographics",
    },
    {
      id: "14",
      info: "Harnessing Technology to Transform African Healthcare: The Top 5 Impactful Innovations",
      image: publicone,
      text: "Technology has emerged as a powerful catalyst for transforming healthcare systems worldwide, offering innovative solutions to address longstanding challenges.",
      text2:
        "Technology has emerged as a powerful catalyst for transforming healthcare systems worldwide, offering innovative solutions to address longstanding challenges. In Africa, adopting technology in healthcare has the potential to bridge the gaps in access, affordability, and quality of care. By leveraging technological advancements, African nations can leapfrog traditional barriers and accelerate progress toward achieving universal health coverage and the Sustainable Development Goals (SDGs) related to health.",
      link: "/ReadMore",
      type: "Case Studies",
    },
    {
      id: "15",
      info: "Catalyzing Transformation: The Imperative of Homegrown Innovation in Africa",
      image: publicone,
      text: "The digital health landscape in Africa is on the cusp of significant growth, with projections indicating a market value of $6.93 billion by 2029.",
      text2:
        "The digital health langnificant growth, with projecea s, encompalth informatics and wearable devices.This paper aims to understand the current state of Africa's digital health market, comparing it to global trends and analyzing the economic factors influencing its development. We'll examine the unique challenges confronting African health tech startups.",
      link: "/ReadMore",
      type: "Whitepapers",
    },
    {
      id: "16",
      info: "Breaking Down the Barriers: Overcoming Challenges to Breastfeeding",
      image: publicone,
      text: "Many women still encounter significant challenges when trying to initiate or continue breastfeeding.",
      text2:
        "Many women still encounter significant challenges when trying to initiate or continue breastfeeding. In sub-Saharan Africa, where malnutrition is prevalent, exclusive breastfeeding is under 37%. In Nigeria, exclusive breastfeeding is around 17%. These figures are lower than the minimum 60% coverage recommended by UNICEF and WHO. In this article, we will discuss the barriers to exclusive breastfeeding in Nigeria, and recommend strategies that mothers, healthcare professionals, and policymakers can adopt to address these barriers.",
      link: "/ReadMore",
      type: "Case studies",
    },
  ];

  const [details, setDetails] = useState(PPublicationdata);

  const [navTab, setNavTab] = useState("All posts");

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [itemValue, setItemValue] = useState("");

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
    { name: "News", click: handleFilter, value: "News" },
  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    const filtered = PPublicationdata.filter((item) =>
      item.info.toLowerCase().includes(value.toLowerCase())
    );
    setDetails(filtered);
  };

  console.log(details);

  console.log(itemValue);

  return (
    <div>
      {publicationDetails ? (
        <PublicationDetails />
      ) : (
        <>
          <NavBar3 />
          <div>
            <div className="flex flex-row gap-x-96">
              <div className="p-7">
                <p className=" text-red-400 text-[12px] mt-20">
                  Insights and resources
                </p>
                <h2 className="font-bold md:text-[30px] text-[20px]">
                  Latest Publications
                </h2>
                <p className="text-[14px] text-[#667085]">
                  We're constantly curating the insight you need to understand
                  the African Healthcare market
                </p>
              </div>

              <div>
                <p
                  className="flex items-center pl-6 gap-4 cursor-pointer mt-36"
                  onClick={() => {
                    setMorePublication(false);
                  }}
                >
                  {" "}
                  <p>Back to Insights</p>
                  <AiOutlineArrowRight />
                </p>
              </div>
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
                              <figure className="w-full h-[300px]">
                                <img
                                  src={p?.image}
                                  alt=""
                                  // width={400}
                                  className="mb-5 w-full h-full"
                                />
                              </figure>
                              <div className="flex flex-row gap-1">
                                <div className="flex jusify-between">
                                  <p className="font-bold text-lg md:text-[24px] mt-4">
                                    {p.info}
                                  </p>
                                  {/* <MdOutlineArrowOutward
                                    style={{ color: "black" }}
                                    size={20}
                                    className="mt-5"
                                  /> */}
                                </div>
                              </div>
                              <p className="text-[13px]">
                                {p.text?.slice(0, 50)}...
                              </p>
                              <div className="flex flex-row  gap-4 mt-4 items-center">
                                <p className="text-red-400 cursor-pointer">Read more</p>
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
                  <section className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-20 mt-10">
                    <div className="bg-white p-[1rem] px-10 w-[82%] ">
                      <div
                        onClick={() => setOpenModal(false)}
                        className="cursor-pointer flex justify-end"
                      >
                        <LiaTimesSolid size={25}/>
                      </div>
                      <section className="flex justify-center gap-[2rem]">
                        <aside className="w-[40%]">
                          <div>
                            <img
                              src={itemValue.image}
                              width={1000}
                              className="mt-12"
                            />
                          </div>
                        </aside>
                        <aside className="w-[60%]">
                          <div className="font-semibold text-[1.8rem] mt-9 mb-4">
                            {itemValue.info}
                          </div>
                          <div>{itemValue.text2}</div>
                        </aside>
                      </section>
                      <aside className="flex justify-center pl-11">
                        {/* <div className="">
                          <img src={share} alt="" width={40} />
                          <p className="text-[#667085]">Share</p>
                        </div> */}
                        <div className=" mb-12 mt-5 ">
                          <a
                            href="https://drive.google.com/file/d/1oiy-p2nmrQBIvL9hlb-QvApHj_53gJfm/view"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={download} alt="" width={40} className="inline-block mr-6 " />
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
