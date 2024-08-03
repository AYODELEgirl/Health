import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Read from "../../../assets/images/Read.png";
import { NavLink } from "react-router-dom";

export default function TopicAndImage() {
  return (
    <div className="md:p-14 p-6 items-center text-center">
      <div className="flex flex-row gap-3 items-center">
        <FaArrowLeftLong />
        <NavLink to="/products">
          <p>Back</p>
        </NavLink>
      </div>
      <div>
        <p className="font-bold md:text-[30px] text-[20px] mb-5">
          Why choose Infinity Healthcare ?
        </p>
      </div>
      <div>
        <figure>
          <img src={Read} alt="Reading" className="mx-auto mb-8" width={1000} />
        </figure>
      </div>
      <div>
        <p className="text-[#757575] ">
          Imagine a future where Africa thrives, not just in economic strength 
          but in the vibrant health of its communities. At Infinity Health <br />
          Africa, We see the potential for a vibrant continent where everyone 
          has access to quality care despite the systemic challenges. That is <br />
          the driving force for all we do. .
        </p>
        <p className="md:text-[23px] text-[19px] font-bold mt-8 mb-8">
          Here’s why you should choose us:
        </p>

        <ul className="list-disc pl-5 text-left inline-block">
          <li className="mb-4">
            <span className="font-medium">Deep Local Expertise:</span> We are
            rooted in Africa, with an intimate understanding of its healthcare
            systems, cultures, and challenges. Our <br /> insights are grounded
            in local knowledge, giving you an edge in making informed decisions.
          </li>

          <li className="mb-4">
            <span className="font-medium">Comprehensive Solutions:</span>{" "}
            Whether you’re entering the market, scaling your business, or
            seeking regulatory compliance, we offer a <br /> one-stop solution.
            Our suite of services covers every aspect of your journey, from data
            analytics to business support.
          </li>

          <li className="mb-4">
            <span className="font-medium">Proven Track Record:</span> We’ve
            helped numerous healthcare businesses succeed in Africa. Our success
            stories demonstrate our <br />
            commitment to delivering results and our ability to transform
            challenges into opportunities.
          </li>

          <li className="mb-4">
            <span className="font-medium">Tailored Support:</span> Every
            healthcare business is unique. We offer customized solutions that
            fit your specific needs, ensuring you get <br />
            the right support to achieve your goals. Our team works closely with
            you to understand your vision and craft a strategy that aligns{" "}
            <br />
            with it.
          </li>

          <li className="mb-4">
            <span className="font-medium">Commitment to Impacts:</span> We
            believe that access to quality healthcare is a human right. By
            supporting businesses like yours, we’re <br />
            contributing to a healthier Africa. When you partner with us, you’re
            not just growing your business - you’re part of a larger mission{" "}
            <br />
            to improve lives across the continents.
          </li>

          <li className="mb-4">
            <span className="font-medium">Strong Network:</span> Infinity health
            connects you with a network of healthcare professionals, industry
            leaders, and regulatory experts. <br />
            This access to key stakeholders helps you to build valuable
            partnerships and accelerate your growth.
          </li>

          <li className="mb-4">
            <span className="font-medium">Reliable and Transparent:</span> We
            value integrity and transparency. With Infinity Health, you can
            expect clear communications, honest <br />
            advice, and a partnership built on trust. We guide you through the
            complexities of the healthcare market with straightforward <br />
            solutions and actionable insights.
          </li>
        </ul>

        <p className="text-[#757575]  text-[16px] mt-2">
          Choose Infinity Health, and let’s work together to unlock your
          healthcare business’s full <br /> potential in Africa. With our
          expertise and your ambitions, the possibilities are infinite. <br />{" "}
          Reach out to us today, and let’s embark on this journey together.
        </p>
      </div>
    </div>
  );
}
