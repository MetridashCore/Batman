import React from 'react'
import calendar from '../../public/icons/calendar.png'
import Image from 'next/image'
export default function Bottom() {
  return (
    <div className='flex w-screen flex-col items-center gap-y-2 justify-center py-32 border-b-2 bg-[#3247CF]'>
        <h1 className='text-4xl font-bold text-white'>Master Your Content Calendar</h1>
        <Image className='self-center w-40 h-40 my-6' src={calendar} alt='calender' ></Image>
        <h1 className='text-xl mb-8 font-thin text-white text-center'>Stay organized and on point with Metridash's content calendar.<br></br> Plan, schedule, and conquer.</h1>
        <h1 className='text-xl font-light text-white text-center'>Unleash your creative genius and power up your content strategy with Metridash.<br></br> Ready to make content magic? </h1>
    </div>
  )
}
