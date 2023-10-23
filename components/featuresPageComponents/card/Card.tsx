import React, { ReactNode } from "react";

interface CardPropsType {
  icon?: ReactNode;
  title?: string;
  text?: ReactNode;
}

export default function Card({ icon, title, text }: CardPropsType) {
  return (
    <div className="bg-[#131313] border-gray-800 border-1 rounded-md">
      <div className="flex flex-col items-start p-6 gap-3">
        <div className="w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center">
          { icon }
        </div>
        <h4 className="title-third font-bold text-xl">{ title }</h4>
        <p className="text-para text-lg">{ text }</p>
      </div>
    </div>
  )
}
