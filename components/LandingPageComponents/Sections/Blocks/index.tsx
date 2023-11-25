import Image from "next/image"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase"
import DashBoard from "../../../../public/Images/Desktop.png"
import checkUser from "@/utils/checkUser"
import google from "@/public/icons/google-play.png"
import apple from "@/public/icons/apple-logo.png"
const Blocks = () => {
  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  }
  const [email, setEmail] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [response, setResponse] = useState("")
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const user: any = checkUser()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="bg-cover  bg-center h-screen backdrop-blur-lg flex md:px-0 px-3 md:pb-5 pb-0 w-full md:flex-row flex-col items-center justify-center">
      <motion.div
        ref={ref}
        variants={textScrollVariants}
        initial="hidden"
        className="flex flex-col gap-y-8 md:mt-16 mt-20  justify-center relative top-[-20px] transition-all duration-1000 w-full ease-in-out"
        animate={controls}
      >
        <h1 className="font-semibold text-center text-[48px] md:text-[64px] leading-[90%] md:w-full text-transparent  bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#57E964] mt-0 pb-4 pt-1 md:pt-0 md:pl-14">
          Never Face Creative Blocks Again!
        </h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200 md:px-44 text-center md:w-full font-normal text-[20px] leading-[28px] ">
          Are you tired of staring at a blank screen, struggling to come up with<br></br>
          content ideas for your social media?<br></br> Look no further! <br></br> Metridash is
          here to revolutionise your creative process.
        </p>
        <div className="btn-hero  flex items-center  justify-center flex-col gap-y-2  w-full">
          <div className="flex inline-flex justify-center items-center gap-x-3  ">
            <Link href="/" className="inline-flex items-center px-4 py-2 mt-2 button-gradient text-xl text-white">
              <Image src={google} alt="google play logo" width={20} height={20} />
              Download on Google Play
            </Link>
            <Link href="/" className="inline-flex items-center px-4 py-2 mt-2 button-gradient text-xl text-white">
              <Image src={apple} alt="google play logo" width={20} height={20} />
              Download on Apple Store
            </Link>
        </div>
        </div>
      </motion.div>
      {/* <div
        ref={ref}
        className="w-full mt-36 relative top-[-50px] transition-all duration-1000 ease-in-out"
      >
        <Image
          className="lg:flex hidden w-full object-cover"
          src={DashBoard}
          alt="DashBoard"
        />
      </div> */}
    </div>
  )
}

export default Blocks
