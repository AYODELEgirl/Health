import React from "react";

export default function WhoWeAre() {
  return (
    <div className="bg-[#F5FFF0] flex lg:flex-row flex-col gap-10 lg:h-[480px] p-10">
      <div className=" flex flex-col gap-10">
        <div className="">
          <p className="font-bold text-[27px] mb-5">Who we are</p>
          <p>
            At Infinity Health Africa, we are passionate about transforming
            healthcare across the continent. We believe technology is the key to
            unlocking a future where high-quality healthcare is accessible to
            everyone.
          </p>
        </div>
        <div className="">
          <p className="font-semibold text-[17px]">
            Local Knowledge,Global impact
          </p>
          <p>
            We understand the complexities of African healthcare systems. Our
            team of seasoned experts brings a wealth of experience and local
            knowledge to the table. This allows us to provide actionable data
            and strategies specifically tailored to the African context.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col  gap-8">
        <div className="">
          <p className="font-semibold text-[17px]">
            More than Data, we're a partner
          </p>
          <p>
            Are you a healthcare business poised to make a difference in Africa?
            We invite you to explore how Infinity Health Africa can be your
            partner on the path to success. Contact us today to learn more about
            our solutions and how we can help you navigate the exciting
            opportunities within the African healthcare market.
          </p>
        </div>
        <div className="">
          <p className="font-semibold text-[17px]">
            Join us in building a healtheir Africa
          </p>
          <p className="mb-4">
            Are you a healthcare business poised to make a difference in Africa?
            We invite you to explore how Infinity Health Africa can be your
            partner on the path to success. Contact us today to learn more about
            our solutions and how we can help you navigate the exciting
            opportunities within the African healthcare market.
          </p>
          <p>
            {" "}
            Join us as embark on this transformative journey to redefine access
            to quality healthcare in Africa. Together, we can make a difference
            and forge a brighter, healthier future for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}
