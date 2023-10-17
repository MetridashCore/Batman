import Image from "next/image"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useAnimation, motion } from "framer-motion"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase"
import { useInView } from "react-intersection-observer"
import Image7 from "../../../../public/Images/7.png"
import Image8 from "../../../../public/Images/8.png"
import Image9 from "../../../../public/Images/9.png"
import Image10 from "../../../../public/Images/10.png"
import Rocket from "../../../../public/homepageIcons/rocket.png"
import TwitterImage from '../../../../public/platformIcons/twitter.png'
import InstaImage from '../../../../public/platformIcons/instagram.png'
import DiscordImage from '../../../../public/platformIcons/discord.png'
import LinkedinImage from '../../../../public/platformIcons/linkedin.png'
import FacebookImage from '../../../../public/platformIcons/facebook.png'

const Journey = () => {
  const [email, setEmail] = useState("")
  const [response, setResponse] = useState("")
  const [disabled, setDisabled] = useState(false)

  const year = new Date().getFullYear()

  const textScrollVariants = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  }

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const subscribe = async (e: any) => {
    e.preventDefault()
    if (email.length === 0) return
    try {
      setDisabled(true)
      await addDoc(collection(db, "waitList"), {
        email,
        createdAt: serverTimestamp(),
      })
      setDisabled(false)
      setEmail("")
      setResponse("Thank you! You have successfully submitted your email.")
      setTimeout(() => {
        setResponse("")
      }, 5000)
    } catch (ex) {
      setEmail("")
      setResponse("Sorry, something went wrong.")
      setTimeout(() => {
        setResponse("")
      }, 5000)
    }
  }
  return (
    <>
      <div className=" w-screen  h-[737px] bg-cover backdrop-blur-lg bg-center flex flex-col gap-y-6 justify-center items-center">
        <motion.h1
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="font-semibold text-[48px] leading-[54px] text-center text-transparent bg-clip-text bg-gradient-to-t from-gray-300 to-gray-700 pb-2 ease-in-out mt-12"
          animate={controls}
        >
          Where we're going
        </motion.h1>
        <motion.div
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className=" relative transition-all  bg-pack-train bg-contain duration-1000 ease-in-out flex w-60 h-40 bg-center"
          animate={controls}
        >

        </motion.div>
        <motion.p
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="text-md leading-6 font-light text-transparent bg-clip-text bg-gradient-to-l from-gray-400 to-gray-600  mt-6 w-full md:px-80 px-4 text-center relative  transition-all duration-1000 ease-in-out"
          animate={controls}
        >
          Metridash is more than a platform; it's a vision for the future of content creation. We're committed to pushing boundaries, harnessing the power of AI to not only meet your needs today but anticipate and exceed them tomorrow. From visual and video AI to the ultimate scheduler and insight engine, Metridash is your all-in-one social media hub. Our journey is one of continuous improvement, embracing advanced AI features, and striving to be the best. Join us in revolutionizing content creation, simplifying social media management, and unlocking limitless possibilities for creators and businesses worldwide. The future is bright with Metridash.

        </motion.p>
        {response && <p className="text-center">{response}</p>}
        <motion.div
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="flex gap-x-5 relative md:right-[-50px] transition-all duration-1000 ease-in-out md:flex-row flex-col"
          animate={controls}
        >

          <Link href={'/auth/signup'}

            className={`w-full  px-4 py-2  button-gradient   rounded-lg mt-5 `}
            type="submit"
          >
            <p className=" text-xl text-white font-semibold  ">
              Try for free
            </p>
          </Link>

        </motion.div>
        <div className="flex w-screen h-20 flex-row gap-x-4 my-10 justify-center ">
          <a href="https://twitter.com/metridash" target="_blank" className="flex w-10 h-10 bg-gray-600 rounded-lg items-center justify-center">
            <Image src={TwitterImage} alt="Twitter"></Image>

          </a >
          <a href="https://www.instagram.com/metridash/" target="_blank" className="flex w-10 h-10 bg-gray-600 rounded-full items-center justify-center">
            <Image src={InstaImage} alt="Instagram"></Image>

          </a >
          <a href="https://discord.gg/btNneYZH" target="_blank" className="flex w-10 h-10 bg-gray-600 rounded-full items-center justify-center">
            <Image src={DiscordImage} alt="Discord"></Image>
            
          </a >
          <a href="https://www.linkedin.com/company/metridash/mycompany/" target="_black" className="flex w-10 h-10 bg-gray-600 rounded-full items-center justify-center">
            <Image src={LinkedinImage} alt="LinkedIn"></Image>

          </a >
          <a href="https://www.facebook.com/people/Metridash/61551354080600/" target="_black" className="flex w-8 h-8 bg-gray-600 rounded-full items-center justify-center">
            <Image src={FacebookImage} alt="LinkedIn"></Image>

          </a >
        </div>
      </div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-5">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {year}{" "}
            <Link href="/" className="hover:underline">
              Metridash
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="mr-4 hover:underline md:mr-6">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Journey
