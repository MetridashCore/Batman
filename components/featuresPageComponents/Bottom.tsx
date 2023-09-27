import React from 'react'
import calendar from '../../public/icons/calendar.png'
import Image from 'next/image'
import { auth } from "@/firebase"
import Link from 'next/link'
export default function Bottom() {
    const user = auth.currentUser
  return (
    <div className='flex w-screen flex-col items-center gap-y-2 justify-center py-32 border-b-2 bg-[#3247CF]'>
        <h1 className=' text-center text-4xl font-bold text-white'>Master Your Content Calendar</h1>
        <Image className='self-center w-40 h-40 my-6' src={calendar} alt='calender' ></Image>
        <h1 className='text-xl mb-8 font-thin text-white text-center'>Stay organized and on point with Metridash&apos;s content calendar.<br></br> Plan, schedule, and conquer.</h1>
        <h1 className='text-xl font-light text-white text-center'>Unleash your creative genius and power up your content strategy with Metridash.<br></br> Ready to make content magic? </h1>
        <Link
            href={`${user && user.uid ? "/homepage" : "/auth/signup"}`}
            className="flex  px-4 py-2 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl items-center justify-center"
          >
            <h1 className="text-lg font-semibold text-white">Try for free</h1>
          </Link>
    </div>
  )
}
