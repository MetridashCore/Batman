import Image from "next/image"
import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image1 from "../../../../public/Images/post.png"
import RImage1 from "../../../../public/Images/post.png"
import Image2 from "../../../../public/Images/4.png"
import Image3 from "../../../../public/Images/ai.png"
import Image4 from "../../../../public/Images/calender.png"
import RImage5 from "../../../../public/Images/calender.png"
import Check from '../../../../public/icons/check.png'
import Ideas from '../../../../public/featureIcons/social-media.png'
import schedule from '../../../../public/featureIcons/schedule.png'
import insights2 from '../../../../public/featureIcons/insights.png'
import auto from '../../../../public/featureIcons/automation.png'
import cal from '../../../../public/featureIcons/calendar.png'
import insight from '../../../../public/featureIcons/insight2.png'
import audience from '../../../../public/featureIcons/audience.png'
import Link from "next/link"
const Prompts = () => {
  const textScrollVariants = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  }

  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [ref3, inView3] = useInView()
  const controls2 = useAnimation()
  const [ref2, inView2] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  useEffect(() => {
    if (inView2) {
      controls2.start("visible")
    }
  }, [controls2, inView2])
  useEffect(() => {
    if (inView3) {
      controls2.start("visible")
    }
  }, [controls2, inView3])
  return (
    <div className="pb-10 bg-cover bg-center w-screen backdrop-blur-lg">
      <div className=" md:h-[600px] flex md:pl-[7%] md:mr-[3%] md:flex-row flex-col">


        <motion.div
          ref={ref3}
          variants={textScrollVariants}
          initial="hidden"
          className="md:w-[50%] flex flex-col md:gap-y-5 gap-y-0 md:items-start items-center justify-center relative md:right-[-50px] transition-all duration-1000 ease-in-out px-3"
          animate={controls2}
        >
         
          <h1 className="text-transparent bg-clip-text md:text-left text-center bg-gradient-to-t from-gray-500 to-gray-200 font-semibold md:text-[48px] text-[40px] leading-[48px] mt-20 md:mt-0 md:mb-0 mb-4">
          Tailored for your<br></br> use case.
          </h1>
         <p className="text-sm md:text-left text-center md:mb-0 mb-4  text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 w-full leading-6">At Metridash, we're your creative canvas, ready to adapt to your wildest ideas. We get it – every creator is one-of-a-kind, and so is your journey. Hook into the power of Metridash, where you call the shots and we provide the tools. No matter your passion, we've got the hooks to turn your dreams into reality. It's your story, your way with Metridash!.</p>
        <Link href={'/features'} className="w-40  flex  button-gradient shadow-lg ">
              <h1 className="text-lg font-medium px-2 py-2">More Features</h1>
        </Link>
        </motion.div>
        <div className="flex w-full h-full md:flex-row flex-col gap-2 items-center justify-center">
              <div className="flex flex-col  bg-black gap-2 ">
                <div className="flex flex-col w-60 h-56  px-6 gap-y-2  py-4 bg-gradient-to-t from-gray-900 shadow-lg  to-black  rounded-md items-center justify-center">
                    <Image className="w-20 h-20" src={Ideas} alt="idea"></Image>
                    <h1 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200 text-center"> Content Ideas</h1>
                    <p className="text-xs font-light text-gray-400 text-center"> Break free from content block with fresh content concepts tailored to your audience.</p>
                </div>
                <div className="flex flex-col w-60 h-56  px-6 gap-y-2  py-4 bg-gradient-to-b from-gray-900 shadow-lg to-black rounded-md items-center justify-center">
                    <Image className="w-20 h-20" src={auto} alt="idea"></Image>
                    <h1 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200 text-center"> Automated Captioning</h1>
                    <p className="text-xs font-light text-gray-400 text-center">Simplify caption writing with AI-powered suggestions.</p>
                </div>
              </div>
              <div className="flex flex-col  bg-black gap-2">
                <div className="flex flex-col w-60 h-56  px-6 gap-y-2  py-4 bg-gradient-to-t from-gray-900 shadow-lg to-black rounded-md items-center justify-center">
                    <Image className="w-20 h-20" src={insight} alt="idea"></Image>
                    <h1 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200 text-center"> Industry Insights</h1>
                    <p className="text-xs font-light text-gray-400 text-center">Stay ahead with real-time data-driven content recommendations.</p>
                </div>
                <div className="flex flex-col w-60 h-56  px-6 gap-y-2  py-4 bg-gradient-to-b from-gray-900 shadow-lg to-black rounded-md items-center justify-center">
                    <Image className="w-20 h-20" src={audience} alt="idea"></Image>  
                    <h1 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200 text-center"> Audience Behavior Analysis</h1>
                    <p className="text-xs font-light text-gray-400 text-center">Understand your audience like never before.</p>
                </div>
              </div>
              <div className="flex flex-col  bg-black gap-2">
                <div className="flex flex-col w-60 h-56  px-6 gap-y-2  py-4 bg-gradient-to-t from-gray-900 to-black rounded-md items-center justify-center">
                    <Image className="w-20 h-20" src={insights2} alt="idea"></Image>
                    <h1 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200 text-center"> Detailed Performance Metrics</h1>
                    <p className="text-xs font-light text-gray-400 text-center">Dive deep into your content's performance.</p>
                </div>
                <div className="flex flex-col w-60 h-56   px-6 gap-y-2  py-4 bg-gradient-to-b from-gray-900 shadow-lg to-black rounded-md items-center justify-center">
                    <Image className="w-20 h-20" src={schedule} alt="idea"></Image>
                    <h1 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200 text-center"> Content Scheduling</h1>
                    <p className="text-xs font-light text-gray-400 text-center">Plan, schedule, and conquer with our powerful scheduler.</p>
                </div>
              </div>
        </div>
      </div>
      {/* <div className="bg-white md:h-[500px] flex  md:px-16 md:mr-[3%]">
      <motion.div
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="md:w-[50%] flex flex-col gap-y-5 justify-center relative md:right-[-50px] transition-all duration-1000 ease-in-out px-3"
          animate={controls}
        >
          <div className="md:hidden flex justify-center  ">
            <Image
              className="  w-[249px] h-[249px] self-center  "
              src={RImage1}
              alt="Preview"
            />
          </div>
          <h1 className="text-[#1E1E1E] font-semibold md:text-[48px] text-[40px] leading-[48px] ">
          Seamless Multichannel Publishing
          </h1>
          <p className="font-normal text-[16px] md:text-[20px] leading-relaxed text-justify text-[#494949] ">
          <div className="flex flex-row">
          <Image className="flex w-6 h-6 self-center mr-1" src={Check} alt="tick"></Image>Your content, their screens—everywhere!<br/>
          </div>
          <div className="flex flex-row">
          <Image className="flex w-6 h-6 md:self-center mr-1" src={Check} alt="tick"></Image>Simplify content creation across platforms.<br/>
          </div>
          <div className="flex flex-row">
          <Image className="flex w-6 h-6 md:self-center mr-1" src={Check} alt="tick"></Image>Instagram to YouTube—Metridash has you covered.<br/>
          </div>
          <div className="flex flex-row">
          <Image className="flex w-6 h-6 md:self-center mr-1" src={Check} alt="tick"></Image>Reach and resonate, wherever your audience thrives.
          </div>

          </p>
        </motion.div> 
        <motion.div
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="md:w-[50%] mt-[5%] flex relative justify-center md:mr-10 md:right-[50px] transition-all duration-1000 ease-in-out"
          animate={controls}
        >
          <Image
            className="absolute md:w-[329px] h-[333px] md:flex hidden object-contain"
            src={Image1}
            alt="Preview"
          />
         
        </motion.div>
      
      </div>  */}
      {/* <div className="bg-white md:h-[500px] flex md:pl-[7%] md:mr-[3%] md:flex-row flex-col">
        <motion.div
          ref={ref2}
          variants={textScrollVariants}
          initial="hidden"
          className="md:w-[50%] mt-[5%]  relative md:right-[-50px] transition-all duration-1000 ease-in-out md:flex hidden"
          animate={controls2}
        >
          <Image
            className="absolute w-[329px] h-[333px] object-contain"
            src={Image4}
            alt="Preview"
          />
         
        </motion.div>

        <motion.div
          ref={ref2}
          variants={textScrollVariants}
          initial="hidden"
          className="md:w-[50%] flex flex-col gap-y-5 justify-center relative md:right-[-50px] transition-all duration-1000 ease-in-out px-3"
          animate={controls2}
        >
          <Image
            className=" md:w-[278px] w-[249px] h-[249px] self-center  mt-[11.8%] md:hidden flex"
            src={RImage5}
            alt="Preview"
          />
          <h1 className="text-[#1E1E1E] font-semibold md:text-[48px] text-[40px] leading-[48px] mt-10 md:mt-0">
          Content Calendar & Analytics
          </h1>
          <p className="font-normal text-[16px] md:text-[20px] leading-relaxed text-justify text-[#494949] align-center my-8 md:my-0">
          <div className="flex flex-row">
          <Image className="flex w-6 h-6 self-center mr-1" src={Check} alt="tick"></Image>Master your content like a pro!<br/>
          </div>
          <div className="flex flex-row">
          <Image className="flex w-6 h-6 self-center mr-1" src={Check} alt="tick"></Image>Plan, schedule, and optimize effortlessly.<br/>
          </div>
          <div className="flex flex-row">
          <Image className="flex w-6 h-6 self-center mr-1" src={Check} alt="tick"></Image>Real-time analytics for actionable insights.<br/>
          </div>
          <div className="flex flex-row">
          <Image className="flex w-6 h-6 self-center mr-1" src={Check} alt="tick"></Image>Chart your growth journey with Metridash!
           </div>
          </p>
        </motion.div>
      </div> */}
    
    </div>
  )
}

export default Prompts
