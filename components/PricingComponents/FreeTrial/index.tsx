import React from "react"
import classes from "./FreeTrial.module.css"
import Link from "next/link"
import { auth } from "@/firebase"
import { IoCheckmark } from "react-icons/io5"
function FreeTrial() {
  return (
    <div className={`group flex flex-col py-12 w-[400px] items-center md:hover:bg-[#3d82f4] bg-[#131313] border-2 border-gray-800 rounded-lg `}>
      <div className="flex flex-col  w-[100%] py-6 items-center  ">
        <h1 className="title-style group-hover:text-white">Starter</h1>
        <p className="font-medium py-2 text-white text-[23px]  text-center ">
        Perfect for trying out Metridash
        </p>
        <p className="group-hover:text-white w-[65%]  text-[40px] text-center font-medium text-[#3d82f4]">
        Free
        </p>
        <div className="flex flex-col  items-center">
          {/* <h1 className="py-20 text-5xl text-white font-bold">$0</h1> */}
          <p className=" text-white text-[22px] text-center font-medium">
            Key Features
          </p>
          <div className="flex flex-col gap-y-2 mt-4 ">
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light"> 10,000 Words of Content</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light">AI Content Ideas</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light">Content Calendar</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light">Basic Analytics</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light">Creator Community</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light">And More</h1>
            </div>
            

          </div>
          </div>
          
      </div>
      {/* <div className='border-gray-200 cursor-pointer text-[20px] text-[#a99efa] font-bold border-[1px] p-5 px-10 rounded-[10px] '> */}
      {
        auth.currentUser?<h1 className="text-[#705cf6] font-semibold mb-4 text-xl">You are currently using the free trial</h1>:
      <button
        className={`border-[#3d82f4] cursor-pointer text-[20px]  text-white group-hover:text-[#3d82f4] group-hover:bg-white font-bold border-2 p-5 px-10 rounded-[10px]`}
      >
        <Link href="/auth/signup">Get Started Free</Link>
      </button>
      }
    </div>
  )
}

export default FreeTrial
