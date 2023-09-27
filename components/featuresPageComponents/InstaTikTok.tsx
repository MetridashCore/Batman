import React from 'react'
import TikTokIcon from '../../public/platformIcons/tiktokHQ.png'
import TwitterIcon from '../../public/platformIcons/twitterx2.png'
import Image from 'next/image'
export default function InstaTiktok() {
  return (
    <div className="flex w-screen md:h-[450px]  md:flex-row flex-col   bg-[#00062A] ">
                <div className='md:w-1/2 w-full h-full flex flex-col py-24 px-8'>
                    <div className='flex mb-2  flex-row self-center'>
                        <Image className='w-8 self-center mr-1 h-8' src={TikTokIcon} alt="youtube"></Image>    
                        <h1 className='md:text-4xl text-2xl font-semibold text-white'>TikTok</h1>
                    </div>
                    <h1 className='text-center text-xl mb-4 font-light text-white'> Short and Sweet Creativity</h1>
                    <div className='flex w-full  flex-col backdrop-blur-md bg-white/10 rounded-sm'> 
                        <h1 className='text-left mt-12 px-10 text-white'>🎬 TikTok Video Ideas: Fuel your creativity with video concepts that resonate.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>📌 TikTok Hashtags: Dive into trending challenges and expand your TikTok presence.</h1>
                        <h1 className='text-left mt-8 mb-12 px-10 text-white'>💬 TikTok Captions: Craft witty and engaging captions for your videos.</h1>
                    </div>
                </div>
                <div className='md:w-1/2 w-full h-full flex flex-col py-24 px-8'>
                    <div className='flex mb-2  flex-row self-center'>
                        <Image className='w-8 self-center mr-1 h-8' src={TwitterIcon} alt="youtube"></Image>    
                        <h1 className='text-center md:text-4xl text-2xl font-semibold text-white'>Twitter(X)</h1>
                    </div>
                        <h1 className='text-center mb-4 text-xl font-light text-white'>Craft Tweets That Spark Conversations</h1>
                    <div className='flex w-full  flex-col backdrop-blur-md bg-white/10 rounded-sm'>
                        <h1 className='text-left mt-12 px-10 text-white'>🐦 Twitter(X) Tweets: Whether it's 280 characters or less, you&apos;ll tweet like a pro.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>📣 Twitter(X) Hashtags: Join trending topics and boost your tweet&apos;s visibility.</h1>
                        <h1 className='text-left mt-8 mb-12 px-10 text-white'>🧑‍💼 Twitter(X) Bio: Your Twitter bio is your introduction; make it unforgettable.</h1>
                       

                    </div>
                </div>
        </div>
  )
}
