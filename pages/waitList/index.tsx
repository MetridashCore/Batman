import React, { useState, useEffect } from 'react'
import MainLogo from '../../public/tab-icon.png'
import Image from 'next/image'
import { Button, TextField } from '@mui/material'
import { addToWaitList } from '@/auth'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

import { waitList } from '@/auth'
const Waitlist = () => {
    const [email, setEmail] = useState<any>(null)
    const [color, setColor] = useState('red-500')
    const[alert, setAlert] = useState<any>(null)


// Initialize Cloud Firestore and get a reference to the service
    const addWaitlist=async()=>{

        if (email==null){
            setAlert("Please enter your email")
            return
        }
        console.log("*****************"+email)
            await waitList(email).then((res)=>{console.log("data added"+res)}).catch((err)=>{console.log(err)})
            setColor('green-600')
            setAlert("You have been added to the waitlist")
    }

    console.log(email)
    return (
        <div className="flex flex-col items-center pb-20 justify-center h-full w-screen   bg-black">
            <div className='flex flex-col items-center justify-center h-screen w-full  '>
            <Image
                className="shadow-[0_0_2px_#009FFD,inset_0_0_2px_#2A2A72,0_0_5px_#009FFD,0_0_15px_#2A2A72,0_0_30px_#009FFD]
                w-32 h-32 object-contain mb-8   transition-shadow duration-300 ease-in-out hover:shadow-lg "
                src={MainLogo}
                alt="features"
            ></Image>
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200 text-4xl font-medium tracking-wide  `}>Join our waitlist to</h1>
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-r from-[#00C1D6] to-[#007DC0] text-4xl font-medium tracking-wide mt-4`}>start your content creation journey.</h1>
            <h1 className='text-sm font-normal mt-6'>Metridash is currently invite-only.<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]'> Sign up to get early access!</span></h1>
            <div className='w-72 h-10 mt-8  bg-black'>
                <input onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email.' className='w-72 h-full pl-2 py-4  bg-black border-gray-800 border-spacing-14 border-2 rounded '></input>
            </div>
            <h1 className={`text-${color}`}>{alert}</h1>
            <button onClick={()=>addWaitlist()} className='w-72 py-2  mt-8 bg-gradient-to-r from-[#009FFD] to-[#2A2A72] text-white font-medium rounded-full'>Join Waitlist</button>
            </div>
            <div className='mt-2 '>
                <div className='flex justify-center  gap-x-12'>
                    <div className="max-w-sm p-6 bg-gradient-to-r from-[#000000] to-[#000133]  border border-gray-900 rounded-lg shadow ">
                        
                            
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight title-third "><span className="text-xl text-white">⌚</span> Time Saver</h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-para ">More Time for What You Love</p>
                        <a href="#" className="inline-flex items-center text-white hover:underline">
                            See our guideline
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>

                    <div className="max-w-sm p-6 bg-gradient-to-t from-[#000000] to-[#000133]  border border-gray-800 rounded-lg shadow ">
                        
                            
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight title-third "><span className="text-xl text-white">💆</span> Endless Content Ideas</h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-para ">Never Run Out of Ideas</p>
                        <a href="#" className="inline-flex items-center text-white hover:underline">
                            See our guideline
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>

                    <div className="max-w-sm p-6 bg-gradient-to-t from-[#000000] to-[#130F40]  border border-gray-800 rounded-lg shadow ">
                        
                            
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight title-third "><span className="text-xl text-white">🧑🏻‍🤝‍🧑🏼</span> Know Your Audience</h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-para ">Connect on a Deeper Level</p>
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

