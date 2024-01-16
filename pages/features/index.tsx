import Image from 'next/image'
import Head from 'next/head'
import idea from '../../public/icons/idea.png'
import caption from '../../public/icons/caption.png'
import hashtag from '../../public/icons/hashtag.png'
import thumbnail from '../../public/icons/thumbnail.png'
import magic from '../../public/icons/magic.png'
import React, { useEffect,useState } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import classes from './features.module.css'
import featues from '../../public/icons/features.png'
import YoutubeComp from '@/components/featuresPageComponents/youtube'
import FbLinkedIn from '@/components/featuresPageComponents/FbLinkedIn'
import InstaTiktok from '@/components/featuresPageComponents/InstaTikTok'
import Contents from '@/components/featuresPageComponents/Content'
import Copy from '@/components/featuresPageComponents/Copy'
import Bottom from '@/components/featuresPageComponents/Bottom'
import featuresbg from '../../public/Images/festuresbg.png'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '@/components/Footer'
import AllFeatures from '@/components/featuresPageComponents/allFeatures/AllFeatures'
import { waitList } from '@/auth'

const Features = () => {
    const [email, setEmail] = useState<any>(null)
    const [color, setColor] = useState('red-500')
    const [alert, setAlert] = useState<any>(null)
    const textScrollVariants = {
        visible: { opacity: 1, top: 0 },
        hidden: { opacity: 0 },
    }

    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])
 
       


        // Initialize Cloud Firestore and get a reference to the service
        const addWaitlist = async () => {

            if (email == null) {
                setAlert("Please enter your email")
                return
            }
            console.log("*****************" + email)
            await waitList(email).then((res) => { console.log("data added" + res) }).catch((err) => { console.log(err) })
            setColor('green-600')
            setAlert("You have been added to the waitlist")
        }

      console.log(email)

    return (
        <>
            <Head>
                <title>Metridash - Featured</title>
            </Head>
            <div className="flex w-screen flex-col overflow-x-hidden bg-black">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }}
                    className="flex w-full transition-all duration-1000 ease-in-out flex-col items-center justify-center md:gap-y-0 gap-y-4"
                >
                    <Image
                        className="w-[900px] object-contain mb-4"
                        src={featuresbg}
                        alt="features"
                    ></Image>
                    <h1 className="text-center font-normal text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-widest ">
                        FEATURES
                    </h1>
                    <h1 className=" mt-2 text-center font-bold text-4xl title-style">
                        Elevate Your Content Creation with<br></br> Metridash
                    </h1>
                    <h1 className="text-center font-semibold text-3xl title-style">
                        {' '}
                        Where Imagination Meets Strategy
                    </h1>
                    <h1 className="mt-4 text-white font-thin text-center">
                        Welcome to the future of content creation.<br></br>{' '}
                        Metridash is your all-in-one toolkit designed to fuel
                        your creativity and revolutionize your content strategy.
                        <br></br> Let&apos;s dive into the world of
                        possibilities
                    </h1>
                </motion.div>
              
                <AllFeatures />
                <div className='flex flex-col items-center justify-center py-12'>
                    <div className='w-72 h-10 mt-8  bg-black'>
                        <input onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email.' className='w-72 h-full pl-2 py-4  bg-black border-gray-800 border-spacing-14 border-2 rounded '></input>
                    </div>
                    <h1 className={`text-${color}`}>{alert}</h1>
                    <button onClick={() => addWaitlist()} className='w-72 py-2  mt-8 bg-gradient-to-r from-[#009FFD] to-[#2A2A72] text-white font-medium rounded-full'>Join Waitlist</button>
                </div>
                <Bottom></Bottom>
            </div>
        </>
    )
}

export default Features
