import React, { useState, useEffect } from 'react'
import MainLogo from '../../public/tab-icon.png'
import Image from 'next/image'
import { Button, TextField } from '@mui/material'
import { addToWaitList } from '@/auth'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { motion, AnimatePresence } from 'framer-motion'
import { waitList } from '@/auth'
const Waitlist = () => {
    const [email, setEmail] = useState<any>(null)
    const [color, setColor] = useState('red-500')
    const [alert, setAlert] = useState<any>(null)

    // Initialize Cloud Firestore and get a reference to the service
    const addWaitlist = async () => {
        if (email == null) {
            setAlert('Please enter your email')
            return
        }
        console.log('*****************' + email)
        await waitList(email)
            .then((res) => {
                console.log('data added' + res)
            })
            .catch((err) => {
                console.log(err)
            })
        setColor('green-600')
        setAlert('You have been added to the waitlist')
    }

    console.log(email)
    return (
        <div className="flex flex-col items-center pb-20 justify-center h-full w-screen   bg-black">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-col items-center justify-center p-20 mt-20 h-full w-full  "
            >
                <Image
                    className="shadow-[0_0_2px_#009FFD,inset_0_0_2px_#2A2A72,0_0_5px_#009FFD,0_0_15px_#2A2A72,0_0_30px_#009FFD]
                w-28 h-28 object-contain mb-8   transition-shadow duration-300 ease-in-out hover:shadow-lg "
                    src={MainLogo}
                    alt="features"
                ></Image>
                <h1
                    className={`text-center text-transparent bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200 text-4xl font-medium tracking-wide  `}
                >
                    Join our waitlist to
                </h1>
                <h1
                    className={`text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00C1D6] to-[#007DC0] md:text-4xl font-medium tracking-wide mt-4 text-center`}
                >
                    start your content creation journey.
                </h1>
                <h1 className="text-sm font-normal mt-6 text-white text-center wrap">
                    Metridash is currently invite-only.
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]">
                        {' '}
                        Sign up to get early access!
                    </span>
                </h1>
                <div className="w-72 h-10 mt-8  bg-black">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email."
                        className="w-72 h-full pl-2 py-4  bg-black border-gray-800 border-spacing-14 border-2 rounded "
                    ></input>
                </div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }}
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${
                        color === `red-500`
                            ? `from-[#EE5A24] to-[#EA2027]`
                            : `from-[#A2D240] to-[#1B8B00]`
                    } `}
                >
                    {alert}
                </motion.h1>
                <button
                    onClick={() => addWaitlist()}
                    className="w-72 py-2  mt-8 bg-gradient-to-r from-[#009FFD] to-[#2A2A72] text-white font-medium rounded-full"
                >
                    Join Waitlist
                </button>
            </motion.div>
            <div className="mt-2 ">
                <h1 className="m-10 font-semibold md:text-[48px] text-4xl leading-[54px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#009FFD] to-[#2A2A72] ">
                    Why Creators love Metridash?
                </h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }}
                    className="flex justify-center items-center gap-x-12 flex-col md:flex-row md:px-0 px-10"
                >
                    <div className="w-full max-w-sm p-6 py-6 md:py-9 bg-gradient-to-r from-[#000000] to-[#000133]  border border-gray-900 rounded-lg shadow mb-4 md:mb-0 ">
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight title-third ">
                                <span className="text-xl text-white">⌚</span>{' '}
                                Time Saver
                            </h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-para ">
                            More Time for What You Love
                        </p>
                    </div>

                    <div className="w-full max-w-sm p-6 bg-gradient-to-t from-[#000000] to-[#000133]  border border-gray-800 rounded-lg shadow mb-4 md:mb-0">
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight title-third ">
                                <span className="text-xl text-white">💆</span>{' '}
                                Endless Content Ideas
                            </h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-para ">
                            Never Run Out of Ideas
                        </p>
                    </div>

                    <div className="w-full max-w-sm p-6 bg-gradient-to-t from-[#000000] to-[#130F40]  border border-gray-800 rounded-lg shadow mb-4 md:mb-0">
                        <a href="#">
                            <h5 className="mb-2 text-lg font-normal tracking-tight title-third ">
                                <span className="text-xl text-white">🧑🏻‍🤝‍🧑🏼</span>{' '}
                                Know Your Audience
                            </h5>
                        </a>
                        <p className="mb-3 font-medium text-sm text-para ">
                            Connect on a Deeper Level
                        </p>
                    </div>
                </motion.div>
                <motion.div>
                    <div className='flex items-center justify-center flex-col px-20 gap-3 py-10 mt-20'>
                        <h1 className='hero-third'>What's Inside:</h1>
                        <h1 className="md:px-32 px-0   text-lg font-light leading-8 mt-6 text-center text-transparent  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">Get ready to access a treasure trove of premium content designed to fuel your growth and elevate your influence. From insider strategies and expert insights to actionable tips and tutorials, our curated collection covers every aspect of social media success.</h1>
                    </div>
                    <div className='flex items-center justify-center flex-col px-20 gap-3 py-10'>
                        <h1 className='hero-third'>Why Wait?</h1>
                        <p className="md:px-32 px-0   text-lg font-light leading-8 mt-6 text-center text-transparent  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">By joining our waitlist, you'll secure early access to our exclusive content library before it's available to the public. Plus, you'll be first in line for special offers, discounts, and events reserved exclusively for our waitlist members.</p>
                    </div>
                    <div className='flex items-center justify-center flex-col px-20 gap-3 py-10'>
                        <h1 className='hero-third'>Who's It For:</h1>
                        <h1 className="md:px-32 px-0   text-lg font-light leading-8 mt-6 text-center text-transparent  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">Whether you're an aspiring influencer, a content creator looking to expand your reach, or a business owner aiming to harness the power of social media, our platform is tailor-made for you. No matter where you are on your journey, we're here to support you every step of the way.</h1>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Waitlist
