import React from "react";
import form from "../../../assets/images/form.png";
import LabelInput from "../LabelInput";

export default function FormSection() {
  return (
    <div>
      <div className="flex flex-row gap-20 p-10">
        <div className="w-[50%] flex flex-col gap-5">
          <LabelInput title="Name" placeholder="Your name" />
          <LabelInput title="Email" placeholder="you@company.com" />
          <LabelInput title="Phone Number" placeholder="0909227392" />
          <div className="flex flex-col gap-3">
            <label>Appointment Date</label>
            <input
              type="date"
              className="outline-none border border-gainsboro-500 placeholder:p-3 rounded-md p-1"
            />
          </div>
          <LabelInput title="Name" placeholder="Enter name" />
          <button className="bg-[#69BD45] w-24 text-white p-2 px-5 text-[14px] rounded mt-5 ">
                Submit
              </button>
        </div>
        
        <div className="w-[50%]">
          <figure>
            <img src={form} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
