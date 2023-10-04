import React from 'react'
import Link from 'next/link'
import checkUser from "@/utils/checkUser"

export default function About() {
    const user: any = checkUser()
  return (
    <div className='flex w-screen  items-center backdrop-filter bg-opacity-30 backdrop-blur-lg  flex-col justify-center bg-[#000000] '>
        <div className='pb-32 flex w-full border-b-2  border-gray-800 pt-16 mt-36 px-60 items-center justify-center flex-col'>

        <h1 className='text-5xl  font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>We exist to help creators grow </h1>
        <h1 className='text-xl text-transparent font-semibold mt-8 bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]'>About Metridash</h1>
        <p className='px-32   text-lg font-light leading-6 mt-6 text-left'>At Metridash, our journey is fueled by a vision that we hold dear: to empower creators and revolutionize the world of content creation. Born from a deep understanding of the challenges that social media creators face, we are on a mission to transform the way content is conceptualized, crafted, and shared.</p>
        </div>
        <div className='flex border-b-2  border-gray-800 w-screen py-32 px-60 items-center pt-20 flex-col'>
        <h1 className='text-xl text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]'>Our Vision</h1>
        <p className='px-32   text-lg font-light leading-8 mt-6 text-left'>Metridash is the brainchild of a team of creators who share a common passion: helping fellow creators maximize their reach and engagement. In an era where the digital landscape is evolving at an unprecedented pace, we recognized that content creators were grappling with a multitude of issues, from time constraints to creative blocks, and the daunting task of optimizing content for different platforms. We saw an opportunity to provide a comprehensive solution that simplifies the content creation journey and empowers creators to make data-driven decisions.</p>
        <h1 className='text-xl text-transparent font-semibold mt-8 bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]'>One Dashboard to Rule Them All</h1>
        <p className='px-32   text-lg font-light leading-8 mt-6 text-left'>Imagine a world where creators can manage their entire content creation journey from one centralized platform—a dashboard that serves as a hub for inspiration, creation, insights, analytics, distribution, and scheduling. Metridash aspires to be that singular destination, offering an integrated suite of tools and resources tailored to creators of all stages—whether you're starting from zero, aiming for your first 10,000 followers, or setting your sights on reaching 1 million. </p>
        </div>
        <div className='flex border-b-2  border-gray-800 w-screen py-32 px-60 items-center pt-20 flex-col'>
        <h1 className='text-xl text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]'>Empowering Every Creator</h1>
        <p className='px-32   text-lg font-light leading-8 mt-6 text-left'>Our commitment is to ensure that every creator, regardless of their background or experience, has access to the tools and resources needed to level the playing field. Content creation is undoubtedly challenging, and we're here to make it easier. </p>
        <h1 className='text-xl text-transparent font-semibold mt-8 bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]'>We're Here for You</h1>
        <p className='px-32   text-lg font-light leading-8 mt-6 text-left'>If you're a creator who's ever felt overwhelmed, unsure, or in need of support, Metridash is here with open arms to say, "We've got your back." Our platform is driven by creators, for creators, and we're dedicated to helping you succeed in every way possible. Our vision isn't just about creating a business; it's about creating a community of creators who support and uplift each other. </p>
        </div>
        <div className='flex border-b-2  border-gray-800 w-screen py-32 px-60 items-center pt-20 flex-col'>
        <h1 className='text-xl text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]'>Challenging the Status Quo</h1>
        <p className='px-32   text-lg font-light leading-8 mt-6 text-left'>Metridash isn't just another tool in the content creation toolbox; it's a movement aimed at challenging the status quo and empowering creators to focus on what they do best. No more worrying about branding, SEO, or other complexities. With Metridash, creators can regain their creative freedom. </p>
        <h1 className='text-xl text-transparent font-semibold mt-8 bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]'>Join Us on This Journey</h1>
        <p className='px-32   text-lg font-light leading-8 mt-6 text-left'>Metridash is more than a platform; it's a passionate team of creators on a mission. We're driven by a vision to revolutionize content creation, and we invite you to join us on this remarkable journey. Together, we'll build a future where every creator can thrive, innovate, and inspire. Welcome to Metridash—the future of content creation is yours to explore.</p>
        </div>
        <div className='flex border-b-2  border-gray-800 w-screen py-32 px-60 items-center pt-20 flex-col'>
        <h1 className='text-xl text-center text-transparent font-semibold  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200'>Join us on this exciting journey to content mastery. Let's redefine what's possible in content creation, one inspired idea at a time. Your audience awaits—step into the world of Metridash and own your content like never before.</h1>
        <h1 className='text-xl text-transparent font-semibold mt-8 bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]'>Ready to Master Your Content?</h1>
        <Link
            href={`${user && user.uid ? "/homepage" : "/auth/signup"}`}
            className="flex  px-4 py-2 mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl items-center justify-center"
          >
            <h1 className="text-lg font-semibold text-white">Explore Metridash Today</h1>
          </Link>
        </div>
        
    </div>
  )
}
