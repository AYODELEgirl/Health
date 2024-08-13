import React from "react";
import choleraPicture from "../../../assets/images/choleraPicture.png";

export default function TextAndImage() {
  return (
    <div className="flex flex-row p-24">
      <div className="w-[50%]">
        <ul className="leading-7">
          <li className="list-disc">
            Cholera is caused by the ingestion of food or water contaminated <br />
            with Vibrio cholerae.
          </li>
          <li className="list-disc">
            Faeces infected with Vibrio cholerae are the major  source of   <br /> cholera
            infections in Nigeria.
          </li>
          <li className="list-disc">
            Infected individuals with no symptoms can still spread the    <br />bacteria
            through their faeces.
          </li>
          <li className="list-disc">
            Cholera can cause sudden watery diarrhoea, leading to death  <br /> within
            hours if untreated.
          </li>
          <li className="list-disc">
            Oral cholera vaccines have proven to be effective in preventing  <br />
            cholera.
          </li>
          <li className="list-disc">
            The vaccines are most effective when given as two  doses 2–4   <br />weeks
            apart.
          </li>
        </ul>
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <img
          src={choleraPicture}
          alt="Cholera"
          className="h-[350px]"
        />
      </div>
    </div>
  );
}
