import Image from "next/image"
import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import PreviewImg from "../../../../public/Images/idea.png"
import RPreviewImg from "../../../../public/Images/idea.png"
import Check from "../../../../public/icons/check.png"
import First from '../../../../public/Images/1.png'
import { Chrono } from "react-chrono";
const Preview = () => {
  const textScrollVariants = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  }
  

 
  const controls = useAnimation()
  const [jef, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <div className="bg-cover bg-center backdrop-blur-lg  flex px-3 md:px-16 items-center justify-center pb-20 md:mr-[3%]">
      <motion.div
        ref={jef}
        variants={textScrollVariants}
        initial="hidden"
        className="md:w-[100%] flex flex-col gap-y-5 items-center justify-center relative md:right-[-50px] transition-all duration-1000 ease-in-out"
        animate={controls}
      >
       <ol className="list-none relative border-l-2 border-gray-800">               
    <li className=" mb-10 ml-20">
        <div className="absolute w-10 h-10 bg-[#2e80fb] rounded-full mt-1.5 -left-5  items-center justify-center flex "><h1 className="text-lg">1</h1></div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Step 1: Input Your Ideas</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Share your content ideas and preferences with Metridash.</p>
        <Image className="w-[600px] h-[360px] " src={First} alt="step 1"></Image>
    </li>
    <li className="mb-10 ml-20">
        <div className="absolute w-10 h-10 bg-[#2e80fb] rounded-full mt-1.5 -left-5  items-center justify-center flex  "><h1 className="text-lg">2</h1></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Step 2: Get Inspired</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Metridash generates personalized content ideas and suggestions for you.</p>
        <Image className="w-[600px] h-[360px] " src={First} alt="step 1"></Image>
    </li>
    <li className="ml-20">
        <div className="absolute w-10 h-10 bg-[#2e80fb] rounded-full mt-1.5 -left-5 items-center justify-center flex   "><h1 className="text-lg">3</h1></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Step 3: Create and Post</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Use Metridash's ideas and optimization tips to create and schedule content easily.</p>
        <Image className="w-[600px] h-[360px] " src={First} alt="step 1"></Image>
    </li>
</ol>


        {/* <div className=" flex flex-col gap-x-9 items-center justify-center  h-screen">

          <div className="bg-gray-500 w-1 h-full gap-y-4"></div>

          
          <div className=" absolute top-0 bg-[#2d82ff] rounded-full w-16 h-16 items-center justify-center flex"  > <h1 className="text-white text-md font-semibold">Step 1</h1></div>
          <div className="absolute bg-[#2d82ff] rounded-full w-16 h-16  items-center justify-center flex"  >  <h1 className="text-white text-md font-semibold">Step 2</h1></div>
          <div className="relative bg-[#2d82ff] rounded-full w-16 h-16 items-center justify-center flex"  > <h1 className="text-white text-md font-semibold">Step 3</h1></div>

         <div className="absolute top-0 right-10 flex w-40 h-20"><h1 className="text-lg font-bold text-white">Input Your Ideas</h1></div>
         <div className="place-self-start  right-10 flex w-40 h-20"><h1 className="text-lg font-bold text-white">Input Your Ideas</h1></div>
         <div className="relative right-10 flex w-40 h-20"><h1 className="text-lg font-bold text-white">Input Your Ideas</h1></div>
        </div> */}
        {/* <motion.div
          ref={jef}
          variants={textScrollVariants}
          initial="hidden"
          className="w-[100%] h-[100%] mt-[5%] relative md:right-[-50px] transition-all duration-1000 ease-in-out"
          animate={controls}
        >
          <Image
            src={RPreviewImg}
            alt="Preview"
            className="sm:hidden flex object-contain"
           
          />
        </motion.div> */}
        {/* <h1 className="text-[#1E1E1E]  md:text-[48px] text-[40px] font-semibold leading-[48px] md:w-[300px] ">
        Personalized Content Ideas
        </h1> */}
        {/* <p className="font-md md:text-[20px] text-[16px] leading-relaxed text-justify text-[#494949]">
          <div className="flex flex-row">

        <Image className="flex w-6 h-6 md:self-center mr-1" src={Check} alt="tick"></Image> Tired of hitting that creative wall? Metridash is your secret weapon!<br/>
          </div>
        <div className="flex flex-row">
        <Image className="flex w-6 h-6 self-center mr-1" src={Check} alt="tick"></Image> Spark your creativity with personalized ideas.<br/>
        </div>
        <div className="flex flex-row">
        <Image className="flex w-6 h-6 self-center mr-1" src={Check} alt="tick"></Image> Tailored to your unique style.<br/>
        </div>
        <div className="flex flex-row">
        <Image className="flex w-6 h-6 self-center mr-1" src={Check} alt="tick"></Image> Targeted for your specific audience.<br/>
        </div>

        </p> */}
      </motion.div>
      {/* <motion.div
        ref={jef}
        variants={textScrollVariants}
        initial="hidden"
        className="md:w-[50%] mt-[5%] relative md:right-[-50px] transition-all duration-1000 ease-in-out"
        animate={controls}
      >
        <Image src={PreviewImg} alt="Preview" className="sm:flex hidden object-contain" />
      </motion.div> */}
    </div>
  )
}

export default Preview
