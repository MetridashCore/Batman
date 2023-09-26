import React from 'react'
import content from '../../public/icons/content.png'
import Image from 'next/image'
export default function Contents() {
  return (
    <div className='flex w-screen flex-col items-center justify-center py-32  border-gray-800  bg-gradient-to-t from-[#3247CF] to-[#00062A] '>
            <h1 className='text-4xl font-bold text-white '>Content, Personalized Just for You</h1>
            <Image className='w-40 h-40 my-6' src={content} alt='image'></Image>
            <h1 className='text-md font-light mt-4 text-white text-center'>Metridash takes your input—topics, tone, keywords, and target audience <br></br>and serves up content ideas that align with your brand and vision.</h1>
    </div>
  )
}
