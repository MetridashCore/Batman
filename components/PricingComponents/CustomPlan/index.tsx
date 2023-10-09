import React from "react"
import { BsHandbag } from "react-icons/bs"
import classes from "./CustomPlan.module.css"
import Link from "next/link"
import { IoCheckmark } from "react-icons/io5"
import { AiOutlineTeam } from "react-icons/ai"
function CustomPlan() {
  return (
    // <div className='flex flex-col w-[500px] py-0 items-center '>
    <div className={`${classes.free_trial} w-[400px]  group flex flex-col py-6 bg-[#131313] hover:bg-[#3d82f4] items-center border-gray-800 border-2  rounded-lg `}>
      <div className="flex flex-col w-[100%] py-10 items-center ">
        <h1 className="text-white font-bold text-3xl">Teams</h1>
        <p className="font-semibold py-2 text-white text-[23px] w-[100%] text-center ">
        When you really mean business  
        </p>
        <AiOutlineTeam className="w-14 h-14 "></AiOutlineTeam>
        <div className="flex flex-col  items-center">
          {/* <h1 className="py-20 text-5xl text-white font-bold">$0</h1> */}
          <p className=" text-white text-[22px] text-center font-medium">
            Key Features
          </p>
          <div className="flex flex-col gap-y-2 mt-2 ">
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="font-light">  All features in Pro</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="font-light">Custom Words of Content</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="font-light">Custom Models</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="font-light">Team Collaboration</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="font-light">Customized Reporting</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="font-light">Custom Workflows</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="font-light">And More</h1>
            </div>

          </div>
          </div>
        {/* <div className="flex items-center justify-center">
          <BsHandbag className="w-20 h-28 mt-4 text-white" />
        </div> */}
      </div>
      <div className="border-[#3d82f4] cursor-pointer text-[20px] group-hover:bg-white bg-[#131313] group-hover:text-[#3d82f4] text-white font-bold border-2 p-5 px-10 rounded-[10px] ">
        <Link href="/contact">Contact Sales</Link>
      </div>
    </div>
  )
}

export default CustomPlan
