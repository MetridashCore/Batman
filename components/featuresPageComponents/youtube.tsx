import React from 'react'
import Youtubeicon from '../../public/platformIcons/youtubeHQ.png'
import InstaIcon from '../../public/platformIcons/instagramHiQ.png'
import Image from 'next/image'
export default function YoutubeComp() {
  return (
    <div className="flex w-screen  flex-row  bg-[#00062A] ">
                <div className='w-1/2 h-full flex flex-col py-24 px-8'>
                    <div className='flex flex-row self-center'>
                        <Image className='w-8 self-center mr-1 h-8' src={Youtubeicon} alt="youtube"></Image>    
                        <h1 className='text-4xl font-semibold text-white'>YouTube Platform</h1>
                    </div>
                    <h1 className='text-center text-xl mb-4 font-light text-white'>Your Video Empire Starts Here</h1>
                    <div className='flex w-full h-full flex-col backdrop-blur-md bg-white/10 rounded-3xl'> 
                        <h1 className='text-left mt-12 px-10 text-white'>🎥 YouTube Video Ideas: Break free from content block with fresh video concepts tailored to your audience.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>🚀 YouTube Shorts Ideas: Ride the short-form content wave with captivating ideas.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>📝 YouTube Titles and Descriptions: Craft compelling titles and descriptions that turn viewers into fans.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>🏷️ YouTube Tags: Unlock the secrets of discoverability with the perfect video tags.</h1>
                        <h1 className='text-left mt-8  mb-10 px-10 text-white'>📸 YouTube Thumbnail Ideas: Stand out in the crowd with striking thumbnail concepts.</h1>
                    </div>
                </div>
                <div className='w-1/2 h-full flex flex-col py-24 px-8'>
                    <div className='flex flex-row self-center'>
                        <Image className='w-8 self-center mr-1 h-8' src={InstaIcon} alt="youtube"></Image>    
                        <h1 className='text-center text-4xl font-semibold text-white'>Instagram Platform</h1>
                    </div>
                        <h1 className='text-center mb-4 text-xl font-light text-white'>Share Visual Stories That Shine</h1>
                    <div className='flex w-full h-full flex-col backdrop-blur-md bg-white/10 rounded-3xl'>
                        <h1 className='text-left mt-16 px-10 text-white'>📸 Instagram Reels Ideas: Create Reels that keep your followers tapping for more.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>✍️ Instagram Captions: Craft captions that strike a chord and deepen engagement.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>📌 Instagram Hashtags: Elevate your reach with the right set of hashtags.</h1>
                        <h1 className='text-left mt-8 mb-32 px-10 text-white'>🧍 Instagram Bio: Tell your story and connect with your audience through your bio.</h1>

                    </div>
                </div>
        </div>
  )
}
