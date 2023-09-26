import Image from "next/image"
import idea from "../../public/icons/idea.png"
import caption from "../../public/icons/caption.png"
import hashtag from "../../public/icons/hashtag.png"
import thumbnail from "../../public/icons/thumbnail.png"
import magic from "../../public/icons/magic.png"
import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import classes from "./features.module.css"
import featues from '../../public/icons/features.png'
import YoutubeComp from "@/components/featuresPageComponents/youtube"
import FbLinkedIn from "@/components/featuresPageComponents/FbLinkedIn"
import InstaTiktok from "@/components/featuresPageComponents/InstaTikTok"
import Contents from "@/components/featuresPageComponents/Content"
import Copy from "@/components/featuresPageComponents/Copy"
import Bottom from "@/components/featuresPageComponents/Bottom"
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
    <div className="flex   flex-col  ">
        <div className="flex w-screen h-screen bg-gradient-to-t from-[#00062A] to-[#3247CF] flex-col items-center justify-center">

        <Image className="w-96 object-contain mb-4" src={featues} alt="features"></Image>
        <h1 className="text-center font-normal text-md text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-widest ">FEATURES</h1>
        <h1 className=" mt-2 text-center font-bold text-4xl text-white">Elevate Your Content Creation with<br></br> Metridash</h1>
        <h1 className="text-center font-semibold text-3xl text-white"> Where Imagination Meets Strategy</h1>
        <h1 className="mt-4 text-white font-thin text-center">Welcome to the future of content creation.<br></br> Metridash is your all-in-one toolkit designed to fuel your creativity and revolutionize your content strategy.<br></br> Let's dive into the world of possibilities:</h1>
        </div>
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
