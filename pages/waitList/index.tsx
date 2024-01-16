import React, { useState, useEffect } from 'react'
import MainLogo from '../../public/tab-icon.png'
import Image from 'next/image'
import { Button, TextField } from '@mui/material'
import { addToWaitList } from '@/auth'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { motion, AnimatePresence } from 'framer-motion'
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
            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }} className='flex flex-col items-center justify-center h-screen w-full  '>
            <Image
                className="shadow-[0_0_2px_#009FFD,inset_0_0_2px_#2A2A72,0_0_5px_#009FFD,0_0_15px_#2A2A72,0_0_30px_#009FFD]
                w-28 h-28 object-contain mb-8   transition-shadow duration-300 ease-in-out hover:shadow-lg "
                src={MainLogo}
                alt="features"
            ></Image>
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200 text-4xl font-medium tracking-wide  `}>Join our waitlist to</h1>
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-r from-[#00C1D6] to-[#007DC0] text-4xl font-medium tracking-wide mt-4 text-center`}>start your content creation journey.</h1>
                <h1 className='text-sm font-normal mt-6 text-white text-center wrap'>Metridash is currently invite-only.<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]'> Sign up to get early access!</span></h1>
            <div className='w-72 h-10 mt-8  bg-black'>
                <input onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email.' className='w-72 h-full pl-2 py-4  bg-black border-gray-800 border-spacing-14 border-2 rounded '></input>
            </div>
            <motion.h1  initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }} className={`text-transparent bg-clip-text bg-gradient-to-r ${color===`red-500`?`from-[#EE5A24] to-[#EA2027]`:`from-[#A2D240] to-[#1B8B00]`} `}>{alert}</motion.h1>
            <button onClick={()=>addWaitlist()} className='w-72 py-2  mt-8 bg-gradient-to-r from-[#009FFD] to-[#2A2A72] text-white font-medium rounded-full'>Join Waitlist</button>
            </motion.div>
            <div className='mt-2 '>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }} className='flex justify-center gap-x-12 flex-col md:flex-row'>
                    <div className="max-w-sm p-6 bg-gradient-to-r from-[#000000] to-[#000133]  border border-gray-900 rounded-lg shadow mb-4 md:mb-0 ">    
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight title-third "><span className="text-xl text-white">⌚</span> Time Saver</h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-para ">More Time for What You Love</p>
                       
                    </div>

                    <div className="max-w-sm p-6 bg-gradient-to-t from-[#000000] to-[#000133]  border border-gray-800 rounded-lg shadow mb-4 md:mb-0">
                        
                            
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight title-third "><span className="text-xl text-white">💆</span> Endless Content Ideas</h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-para ">Never Run Out of Ideas</p>
                       
                    </div>

                    <div className="max-w-sm p-6 bg-gradient-to-t from-[#000000] to-[#130F40]  border border-gray-800 rounded-lg shadow mb-4 md:mb-0">
                        
                            
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight title-third "><span className="text-xl text-white">🧑🏻‍🤝‍🧑🏼</span> Know Your Audience</h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-para ">Connect on a Deeper Level</p>
                       
                    </div>


                </motion.div>
            </div>

        </div>
    )
}

export default Waitlist

