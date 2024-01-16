import React, { useState, useEffect } from 'react'
import MainLogo from '../../public/tab-icon.png'
import Image from 'next/image'
import { Button, TextField } from '@mui/material'
import { addToWaitList } from '@/auth'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase"

const Waitlist = () => {
    const [email, setEmail] = useState<any>('')


    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen, bg-black">
            <Image
                className="shadow-[0_0_2px_#dbf26e,inset_0_0_2px_#dbf26e,0_0_5px_#1cfdd6,0_0_15px_#1cfdd6,0_0_30px_#1cfdd6]
                w-32 h-32 object-contain mb-8  transition-shadow duration-300 ease-in-out hover:shadow-lg "
                src={MainLogo}
                alt="features"
            ></Image>
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200 text-4xl font-medium tracking-wide  `}>Join our waitlist to</h1>
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-r from-[#dbf26e] via-[#61fa74] to-[#1cfdd6] text-4xl font-medium tracking-wide mt-4`}>start your content creation journey.</h1>
            <h1 className='text-sm font-normal mt-6'>Metridash is currently invite-only.<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]'> Sign up to get early access!</span></h1>
            <div className='w-72 h-10 mt-8  bg-black'>
                <input onChange={(e)=>setEmail(e)} placeholder='email' className='w-72 h-full pl-2  bg-black border-gray-800 border-spacing-14 border-2 rounded '></input>
            </div>
            
            <button className='w-72 h-10 mt-8 bg-gradient-to-r from-[#A2D240]  to-[#1B8B00] text-black font-medium rounded-full'>Join Waitlist</button>
            <div className='mt-24'>
                <div className='flex justify-center justify-between gap-x-12'>
                    <div className="max-w-sm p-6 bg-black border border-grey-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200">
                        <svg className="w-7 h-7 bg-gradient-to-r from-[#dbf26e] via-[#61fa74] to-[#1cfdd6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                        </svg>
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight text-white dark:text-white">Need a help in Claim?</h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-white dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                        <a href="#" className="inline-flex items-center text-white hover:underline">
                            See our guideline
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>

                    <div className="max-w-sm p-6 bg-black border border-grey-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200">
                        <svg className="w-7 h-7 bg-gradient-to-r from-[#dbf26e] via-[#61fa74] to-[#1cfdd6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                        </svg>
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight text-white dark:text-white">Need a help in Claim?</h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-white dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                        <a href="#" className="inline-flex items-center text-white hover:underline">
                            See our guideline
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>

                    <div className="max-w-sm p-6 bg-black border border-grey-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200">
                        <svg className="w-7 h-7 bg-gradient-to-r from-[#dbf26e] via-[#61fa74] to-[#1cfdd6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                        </svg>
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight text-white dark:text-white">Need a help in Claim?</h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-white dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                        <a href="#" className="inline-flex items-center text-white hover:underline">
                            See our guideline
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Waitlist

