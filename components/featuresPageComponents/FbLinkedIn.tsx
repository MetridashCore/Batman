import React from 'react'
import LinkedIn from '../../public/platformIcons/linkednHQ.png'
import FacebookIcon from '../../public/platformIcons/facebookHiQ.png'
import Image from 'next/image'
export default function FbLinkedIn() {
  return (
    <div className="flex w-screen  flex-row   bg-[#00062A] ">
                <div className='w-1/2 h-full flex flex-col py-24 px-8'>
                    <div className='flex flex-row self-center'>
                        <Image className='w-8 self-center mr-1 h-8' src={FacebookIcon} alt="youtube"></Image>    
                        <h1 className='text-4xl font-semibold text-white'>Facebook Platform</h1>
                    </div>
                    <h1 className='text-center text-xl mb-4 font-light text-white'>Connect and Convert Your Audience</h1>
                    <div className='flex w-full  flex-col backdrop-blur-md bg-white/10 rounded-3xl'> 
                        <h1 className='text-left mt-10 px-10 text-white'>📰 Facebook Posts: Your message, your way. Engage your audience like never before.</h1>
                        <h1 className='text-left mt-8 px-10 text-white'>💬 Facebook Ad Copy: Turn browsers into buyers with persuasive ad copy.</h1>
                        <h1 className='text-left mt-8 mb-12 px-10 text-white'>📢 Facebook Page Descriptions: Your page's story starts here. Make it memorable.</h1>
                       
                    </div>
                </div>
                <div className='w-1/2 h-full flex flex-col py-24 px-8'>
                    <div className='flex flex-row self-center'>
                        <Image className='w-8 self-center mr-1 h-8' src={LinkedIn} alt="youtube"></Image>    
                        <h1 className='text-center text-4xl font-semibold text-white'>LinkedIn Platform</h1>
                    </div>
                        <h1 className='text-center mb-4 text-xl font-light text-white'>Build Your Professional Brand</h1>
                    <div className='flex w-full flex-col backdrop-blur-md bg-white/10 rounded-3xl'>
                        <h1 className='text-left mt-16 px-10 text-white'>📝 LinkedIn Posts: Share your expertise and inspire your network.</h1>
                        <h1 className='text-left mt-8 mb-32  px-10 text-white'>🧑‍💼 LinkedIn Bio: Craft a compelling professional profile that opens doors.</h1>
                     
                       

                    </div>
                </div>
        </div>
  )
}
