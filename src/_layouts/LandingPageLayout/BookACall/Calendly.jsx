import React from "react";
import elicon from "../../../assets/images/elicon.png";

export default function Calendly() {
  return (
    <div className="flex justify-center">
      <div className="bg-[#E8FFDE] h-[170px] rounded-md mb-5 w-[80%] p-10">
        <div>
          <figure>
            <img src={elicon} alt="" width={30} className="mb-3" />
          </figure>
          <p className="text-[18px] font-medium">Chat with infinity health</p>
          <p className="mb-1">
            We’re here to help. Please let us know your inquiry.
          </p>
          <p className="text-[#69BD45] text-[10px] underline">
            Book A Call with us on Calendly Now!
          </p>
        </div>
      </div>
    </div>
  );
}
