import React from 'react'
import Youtubeicon from '../../public/platformIcons/youtubeHQ.png'
import Image from 'next/image'
export default function YoutubeComp() {
  return (
    <div className="flex w-screen  flex-row  h-screen bg-[#00062A] ">
                <div className='w-1/2 h-full flex flex-col py-24 px-8'>
                    <div className='flex flex-row self-center'>
                        <Image className='w-8 self-center mr-1 h-8' src={Youtubeicon} alt="youtube"></Image>    
                        <h1 className='text-2xl font-semibold text-white'>YouTube Platform</h1>
                    </div>
                    <h1 className='text-center text-2xl font-semibold text-white'>Your Video Empire Starts Here</h1>
                    <h1 className='text-left mt-12 px-10 text-white'>🎥 YouTube Video Ideas: Break free from content block with fresh video concepts tailored to your audience.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>🚀 YouTube Shorts Ideas: Ride the short-form content wave with captivating ideas.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>📝 YouTube Titles and Descriptions: Craft compelling titles and descriptions that turn viewers into fans.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>🏷️ YouTube Tags: Unlock the secrets of discoverability with the perfect video tags.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>📸 YouTube Thumbnail Ideas: Stand out in the crowd with striking thumbnail concepts.</h1>
                </div>
                <div className='w-1/2 h-full flex flex-col py-24 px-8'>
                    <div className='flex flex-row self-center'>
                        <Image className='w-8 self-center mr-1 h-8' src={Youtubeicon} alt="youtube"></Image>    
                        <h1 className='text-center text-2xl font-semibold text-white'>YouTube Platform</h1>
                    </div>
                        <h1 className='text-center text-2xl font-semibold text-white'>Your Video Empire Starts Here</h1>
                        <h1 className='text-left mt-12 px-10 text-white'>🎥 YouTube Video Ideas: Break free from content block with fresh video concepts tailored to your audience.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>🚀 YouTube Shorts Ideas: Ride the short-form content wave with captivating ideas.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>📝 YouTube Titles and Descriptions: Craft compelling titles and descriptions that turn viewers into fans.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>🏷️ YouTube Tags: Unlock the secrets of discoverability with the perfect video tags.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>📸 YouTube Thumbnail Ideas: Stand out in the crowd with striking thumbnail concepts.</h1>
                </div>
        </div>
  )
}
