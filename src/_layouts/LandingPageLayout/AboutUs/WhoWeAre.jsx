import React from "react";

export default function WhoWeAre() {
  return (
    <div className="bg-[#F5FFF0]">
      <p className="text-center pt-10 font-bold text-[25px]">Who we are</p>

      <div className=" flex lg:flex-row flex-col gap-10  p-10">
        <div className=" flex flex-col gap-10 md:px-8 pt-5">
          <div className="">
            <p className="font-semibold text-[17px] mb-3">
              Local Knowledge, Global impact
            </p>
            <p>
              At Infinity Health Africa, we are passionate about transforming
              healthcare across the continent. We understand the complexities of
              African healthcare systems. Our team of seasoned experts brings a
              wealth of experience and local knowledge to the table. This allows
              us to provide actionable data and strategies specifically tailored
              to the African context.
            </p>
          </div>
          {/* <div className="">

          <p>
            At Infinity Health Africa, we are passionate about transforming
            healthcare across the continent. We believe technology is the key to
            unlocking a future where high-quality healthcare is accessible to
            everyone.
          </p>
        </div> */}
        </div>

        <div className="mt-5 flex flex-col gap-8">
          <div className="">
            <p className="font-semibold text-[17px] mb-3">
              Join us in building a healthier Africa
            </p>
            <p>
              Are you a healthcare business poised to make a difference in
              Africa? We invite you to explore how Infinity Health Africa can be
              your partner on the path to success. Contact us today to learn
              more about our solutions and how we can help you navigate the
              exciting opportunities within the African healthcare market.
            </p>
          </div>
          {/* <div className="">
          <p className="font-semibold text-[17px]">
            Join us in building a healthier Africa
          </p>
          <p className="mb-4">
            Are you a healthcare business poised to make a difference in Africa?
            We invite you to explore how Infinity Health Africa can be your
            partner on the path to success. Contact us today to learn more about
            our solutions and how we can help you navigate the exciting
            opportunities within the African healthcare market.
          </p>
          
        </div> */}
        </div>
      </div>
    </div>
  );
}
