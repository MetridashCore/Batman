import React from "react";
interface CardPropsType {
  icon: string;
  title: string;
  text: string;
  bgColor: string;
  titleColor: string;
  textColor: string
  bgIcon: string
}

export default function Card({ icon, bgColor, titleColor, textColor, title, bgIcon, text }: CardPropsType) {
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
