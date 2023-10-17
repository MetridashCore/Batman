import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Growing = () => {
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
    <motion.div
      ref={ref}
      variants={textScrollVariants}
      initial="hidden"
      className="flex flex-col justify-center items-center backdrop-blur-lg  py-10 relative top-[100px] transition-all duration-1000 ease-in-out bg-cover bg-center"
      animate={controls}
    >
      <h1 className="font-semibold text-[48px] leading-[54px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#009FFD] to-[#2A2A72] ">
        Why Creators love Metridash?
      </h1>
      <div className="flex md:flex-row flex-col w-full h-40  items-center justify-center gap-x-24">
          <div className="flex flex-col h-full px-2 items-center justify-center">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400 "><span className="text-xl text-white">⌚</span> Time Saver</h1>
                <h2 className="text-sm font-light text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400">More Time for What You Love </h2>
          </div>
          <div className="flex flex-col h-full px-2 items-center justify-center">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400 "><span className="text-xl text-white">💆</span> Endless Content Ideas </h1>
                <h2 className="text-sm font-light text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400"> Never Run Out of Ideas</h2>
          </div>
          <div className="flex flex-col h-full px-2 items-center justify-center">
                <h1 className="text-xl font-bold  text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400"> <span className="text-xl text-white">🧑🏻‍🤝‍🧑🏼</span> Know Your Audience</h1>
                <h2 className="text-sm font-light text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400"> Connect on a Deeper Level</h2>
          </div>
      </div>
    </motion.div>
  )
}

export default Growing
