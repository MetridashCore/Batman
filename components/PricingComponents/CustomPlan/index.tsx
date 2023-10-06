import React from "react"
import { BsHandbag } from "react-icons/bs"
import classes from "./CustomPlan.module.css"
import Link from "next/link"

function CustomPlan() {
  return (
    // <div className='flex flex-col w-[500px] py-0 items-center '>
    <div className={`${classes.free_trial} group flex flex-col py-8 bg-[#131313] hover:bg-[#3d82f4] items-center border-gray-800 border-2  rounded-lg `}>
      <div className="flex flex-col w-[100%] py-10 items-center ">
        <h1 className="text-white font-bold text-3xl">Custom Plan</h1>
        <p className="font-semibold py-2 text-white text-[23px] w-[100%] text-center ">
          For teams and businesses
        </p>
        <p className="w-[65%] text-white text-[20px] text-center font-medium">
          Take your business to the next level with custom packages, custom AI
          model development, onboarding, and support.
        </p>
        <div className="flex items-center justify-center">
          <BsHandbag className="w-20 h-28 mt-4 text-white" />
        </div>
      </div>
      <div className="border-[#3d82f4] cursor-pointer text-[20px] group-hover:bg-white bg-[#131313] group-hover:text-[#3d82f4] text-white font-bold border-2 p-5 px-10 rounded-[10px] ">
        <Link href="/contact">Contact Sales</Link>
      </div>
    </div>
  )
}

export default CustomPlan
