import React from 'react'
import TikTokIcon from '../../public/platformIcons/tiktokHQ.png'
import TwitterIcon from '../../public/platformIcons/twitterX2.png'
import Image from 'next/image'
export default function InstaTiktok() {
  return (
    <div className="flex w-screen  flex-row   bg-[#00062A] ">
                <div className='w-1/2 h-full flex flex-col py-24 px-8'>
                    <div className='flex flex-row self-center'>
                        <Image className='w-8 self-center mr-1 h-8' src={TikTokIcon} alt="youtube"></Image>    
                        <h1 className='text-4xl font-semibold text-white'>TikTok Platform</h1>
                    </div>
                    <h1 className='text-center text-xl mb-4 font-light text-white'> Short and Sweet Creativity</h1>
                    <div className='flex w-full  flex-col backdrop-blur-md bg-white/10 rounded-3xl'> 
                        <h1 className='text-left mt-12 px-10 text-white'>🎬 TikTok Video Ideas: Fuel your creativity with video concepts that resonate.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>📌 TikTok Hashtags: Dive into trending challenges and expand your TikTok presence.</h1>
                        <h1 className='text-left mt-8 mb-12 px-10 text-white'>💬 TikTok Captions: Craft witty and engaging captions for your videos.</h1>
                    </div>
                </div>
                <div className='w-1/2 h-full flex flex-col py-24 px-8'>
                    <div className='flex flex-row self-center'>
                        <Image className='w-8 self-center mr-1 h-8' src={TwitterIcon} alt="youtube"></Image>    
                        <h1 className='text-center text-4xl font-semibold text-white'>Twitter(X) Platform</h1>
                    </div>
                        <h1 className='text-center mb-4 text-xl font-light text-white'>Craft Tweets That Spark Conversations</h1>
                    <div className='flex w-full  flex-col backdrop-blur-md bg-white/10 rounded-3xl'>
                        <h1 className='text-left mt-12 px-10 text-white'>🐦 Twitter(X) Tweets: Whether it's 280 characters or less, you'll tweet like a pro.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>📣 Twitter(X) Hashtags: Join trending topics and boost your tweet's visibility.</h1>
                        <h1 className='text-left mt-8 mb-12 px-10 text-white'>🧑‍💼 Twitter(X) Bio: Your Twitter bio is your introduction; make it unforgettable.</h1>
                       

                    </div>
                </div>
        </div>
  )
}
