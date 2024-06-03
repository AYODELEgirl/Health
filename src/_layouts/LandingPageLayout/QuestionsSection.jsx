import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
// import minus from "../../assets/images/minus.png";

export default function QuestionsSection() {
  const [answer, setAnswer] = useState(null);
  const Question = [
    {
      name: "1. what sets infinity health apart from other healthcare companies",
      ans: "Infinity Health stands out for its deep understanding of the African healthcare landscape and its commitment to delivering practical, actionable solutions. We combine local insights with global expertise to drive meaningful impacts.  ",
    },
    {
      name: "2. How can Infinity Health help my healthcare business? ",
      ans: "Our tailored service address key challenges such as regulatory hurdles, market entry strategies, and sales optimisation. Whether you're a startup or an established enterprise , we provide the support needed to thrive in this dynamic market .",
    },
    {
      name: "3.What are the pricing options for Infinity Health's services? ",
      ans: "We offer flexible pricing packages to accommodate businesses of all sizes. From complimentary business reviews to comprehensive market analysis and sales strategy development, we have a solution to fit your needs and budget.",
    },
    {
      name: "4. How can Infinity Health help my healthcare business? ",
      ans: "Our tailored service address key challenges such as regulatory hurdles, market entry strategies, and sales optimisation. Whether you're a startup or an established enterprise , we provide the support needed to thrive in this dynamic market .",
    },
    {
      name: "5. What are the pricing options for Infinity Health's services? ",
      ans: "We offer flexible pricing packages to accommodate businesses of all sizes. From complimentary business reviews to comprehensive market analysis and sales strategy development, we have a solution to fit your needs and budget.",
    },
   

  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-20">
        <p className="text-red-500 text-[12px] mb-11">FAQ</p>
        <p className="text-[25px] font-bold mb-5">Frequently asked questions</p>
        <p className="text-[15px] text-[#757575] text-center">
          Answers to question you may have. We're here to help you make an{" "}
          <br className="hidden md:block"/> informed decision
        </p>
      </div>
      <div className="flex items-start px-5 lg:px-28 py-20 gap-10 flex-col lg:flex-row">
      <div className="grid grid-cols-1 lg:w-1/2  w-full gap-10">
        {Question.slice(0,3).map((d, index) => {
          return (
            <div className="gap-40  border-solid border-2 border-gainsboro-100 p-5 rounded-lg">
              <div className="flex justify-between gap-5">
                <h2 className="text-[16px] font-medium pb-3">{d.name}</h2>
                <AiOutlineDown
                  style={{ cursor: "pointer" }}
                  size={19}
                  onClick={() => setAnswer(answer === index ? !index : index)}
                />
              </div>
              {answer === index && (
                <h2  className=" leading-6 w-[80%] text-[15px] text-[#667085]">{d.ans}</h2>
              )}
            </div>
          );
        })}
      </div>

      <div className=" grid grid-cols-1 gap-10 lg:w-1/2 w-full">
        {Question.slice(3,6).map((d, index) => {
          return (
            <div className="gap-40  border-solid border-2 border-gainsboro-100 p-5 rounded-lg">
              <div className="flex justify-between gap-5">
                <h2 className="text-[16px] font-medium pb-3">{d.name}</h2>
                <AiOutlineDown
                  style={{ cursor: "pointer" }}
                  size={19}
                  onClick={() => setAnswer(d.name)}
                />
              </div>
              {answer === d.name && (
                <h2  className=" leading-6 w-[80%] text-[15px] text-[#667085]">{d.ans}</h2>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
