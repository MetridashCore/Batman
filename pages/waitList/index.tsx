import React, { useState, useEffect } from 'react'
import MainLogo from '../../public/tab-icon.png'
import Image from 'next/image'
import { TextField } from '@mui/material'
const Waitlist = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen, bg-black">
            <Image
                className="shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] w-32 h-32 object-contain mb-8  transition-shadow duration-300 ease-in-out hover:shadow-lg "
                src={MainLogo}
                alt="features"
            ></Image>
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200 text-4xl font-medium tracking-wide  `}>Join our waitlist to</h1>
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-r from-[#dbf26e] via-[#61fa74] to-[#1cfdd6] text-4xl font-medium tracking-wide mt-4`}>start your content creation journey.</h1>
            <h1 className='text-sm font-normal mt-6'>Metridash is currently invite-only.<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]'> Sign up to get early access!</span></h1>
            <div className='w-72 h-20 mt-8  bg-black'>
                <input placeholder='email' className='w-72 h-1/2 pl-2  bg-black border-white border-2 rounded '></input>
            </div>

        </div>
    )
}

export default Waitlist

