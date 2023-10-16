import React from "react";
import { CardPropsType } from "./types";
import Image from "next/image";

// interface CardPropsContainer {
//   cardPropsValues: CardPropsType
// }

export default function Card({ icon, bgColor, titleColor, textColor, title, bgIcon, text }) {
  return (
    <div className={ `${bgColor} rounded-xl` }>
      <div className="flex flex-col items-start p-6 gap-3">
        <div className={ `${bgIcon} w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center` }>
          { icon }
        </div>
        <h4 className={ `${titleColor} font-bold text-xl` }>{ title }</h4>
        <p className={ `${textColor} text-lg` }>{ text }</p>
      </div>
    </div>
  )
}
