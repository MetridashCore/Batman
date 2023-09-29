import Image from "next/image"
import idea from "../../public/icons/idea.png"
import caption from "../../public/icons/caption.png"
import hashtag from "../../public/icons/hashtag.png"
import thumbnail from "../../public/icons/thumbnail.png"
import magic from "../../public/icons/magic.png"
import React, { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import classes from "./features.module.css"
import featues from '../../public/icons/features.png'
import YoutubeComp from "@/components/featuresPageComponents/youtube"
import FbLinkedIn from "@/components/featuresPageComponents/FbLinkedIn"
import InstaTiktok from "@/components/featuresPageComponents/InstaTikTok"
import Contents from "@/components/featuresPageComponents/Content"
import Copy from "@/components/featuresPageComponents/Copy"
import Bottom from "@/components/featuresPageComponents/Bottom"
import featuresbg from '../../public/Images/festuresbg.png'
import { motion, AnimatePresence } from "framer-motion"
import Footer from "@/components/Footer"
const Features = () => {
  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  }

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="flex w-screen   flex-col  ">
      <motion.div 
      initial={{ opacity: 0}} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0}} 
      transition={{ delay: 0.25 }} 
      className="flex w-full h-screen bg-gradient-to-t from-[#00062A] to-[#3247CF]  transition-all duration-1000 ease-in-out flex-col items-center  md:pt-24 pt-20 md:gap-y-0 gap-y-4">

        <Image className="w-[900px] object-contain mb-4" src={featuresbg} alt="features"></Image>
        <h1 className="text-center font-normal text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-widest ">FEATURES</h1>
        <h1 className=" mt-2 text-center font-bold text-4xl text-white ">Elevate Your Content Creation with<br></br> Metridash</h1>
        <h1 className="text-center font-semibold text-3xl text-white"> Where Imagination Meets Strategy</h1>
        <h1 className="mt-4 text-white font-thin text-center">Welcome to the future of content creation.<br></br> Metridash is your all-in-one toolkit designed to fuel your creativity and revolutionize your content strategy.<br></br> Let&apos;s dive into the world of possibilities</h1>
      </motion.div>
      <YoutubeComp></YoutubeComp>
      <FbLinkedIn></FbLinkedIn>
      <InstaTiktok></InstaTiktok>
      <Contents></Contents>
      <Copy></Copy>
      <Bottom></Bottom>

    </div>
  )
}

export default Features
