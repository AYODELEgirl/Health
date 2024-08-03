import React, { useState } from "react";
import publicone from "../../../assets/images/publicone.jpg";
import iconwrap from "../../../assets/images/Iconwrap.png";
import public3 from "../../../assets/images/public3.jpg";
import public2 from "../../../assets/images/public2.jpg";
import rightarrow from "../../../assets/images/rightarrow.png";
import { MdOutlineArrowOutward } from "react-icons/md";
export default function publication({setMorePublication}) {
  // const [details,setDetails] = useState([])
  const data = [
    {
      id:"1",
      info:"We want to redefine access to quality healthcare",
      image:publicone,
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Minus nemo laudantium nostrum modi quis! em quidem.",
      link:"/ReadMore",
      type:"Case studies",
    },
    {
      id:"2",
      info:"We want to redefine access to quality healthcare",
      image:public2,
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Minus nemo laudantium nostrum modi quis! em quidem.",
      link:"/ReadMore",
      type:"Infographics",
    },
    {
      id:"3",
      info:"We want to redefine access to quality healthcare",
      image:public3,
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Minus nemo laudantium nostrum modi quis! em quidem.",
      link:"/ReadMore",
      type:"News",
    },
    {
      id:"4",
      info:"We want to redefine access to quality healthcare",
      image:publicone,
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Minus nemo laudantium nostrum modi quis! em quidem.",
      link:"/ReadMore",
      type:"case studies",
    },
    {
      id:"5",
      info:"We want to redefine access to quality healthcare",
      image:public2,
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Minus nemo laudantium nostrum modi quis! em quidem.",
      link:"/ReadMore",
      type:"Infographics",
    },
    {
      id:"6",
      info:"We want to redefine access to quality healthcare",
      image:public3,
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Minus nemo laudantium nostrum modi quis! em quidem.",
      link:"/ReadMore",
      type:"News",
    },
    
  ]

  const [details,setDetails] = useState(data)
  const handleFilter = (name) => {
    const filtered = details.filter(item => item.type.toLowerCase() === name.toLowerCase());
    console.log(filtered);
    setDetails(filtered)
    // Now you can do something with the filtered data, like updating the state
    // setDetails(filtered);
}

  return (

    <div className="p-8">
      <div className="p-7">
        <p className=" text-red-400 text-[12px]">Insights and resources</p>
        <h2 className="font-bold md:text-[30px] text-[20px]">Latest Publications</h2>
        <p className="text-[14px] text-[#667085]">
          We're constantly curating the insight you need to understand the
          African Healthcare market
        </p>
      </div>
      <div className="hidden flex-row justify-between md:p-3 md:px-8 sm:flex p-1">
        <div className="flex flex-row gap-8 cursor-pointer">
          <p className="text-[14px] text-[#667085]" onClick={() => setDetails(data)}>All posts</p>
          <p className="text-[14px] text-[#667085]" onClick={ () => handleFilter("Case studies")}>Case studies</p>
          <p className="text-[14px] text-[#667085]" onClick={ () => handleFilter("Infographics")} >Infographics</p>
          <p className="text-[14px] text-[#667085]" onClick={() => handleFilter("News")}>News</p>
          <p className="text-[14px] text-[#667085]" onClick={() => handleFilter("Market report")}>Market report</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="p-1 px-11  rounded border border-gray-200 text-start sm:flex hidden"
          />
        </div>
      </div>
   
      <div className="bg-[#F5F6F9] md:p-7 p-4 grid s900:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]">

      
         {details && details?.map(data => {
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
                <figure>
                  <img src={data?.image} alt="" width={400} className="mb-5 w-full" />
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
    

            
          </div>
          )
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

<button className="px-9 py-2 flex items-center rounded-md text-red-400 border border-red-400" onClick={()=>{
  setMorePublication(true)
}}>See More Publications 

  <img src={rightarrow} alt=""/>
</button>

</div>
        </div>
    // </div>
  );
}
