import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import checkUser from '@/utils/checkUser'
import Image from 'next/image'
import Logo from '../../public/tab-icon.png'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion'
import { waitList } from '@/auth'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

export default function About() {
    const user: any = checkUser()
    const textScrollVariants = {
        visible: { opacity: 1, top: 0 },
        hidden: { opacity: 0 },
    }
    const [email, setEmail] = useState<any>(null)
    const controls = useAnimation()
    const [color, setColor] = useState('red-500')
    const [alert, setAlert] = useState<any>(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    const JoinWaitingSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
    });
    // Initialize Cloud Firestore and get a reference to the service

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Head>
                <title>Metridash - About Us</title>
            </Head>
            <div className="flex w-screen  items-center  flex-col justify-center bg-[#000000] ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }}
                    className="transition-all duration-1000  ease-in-out gap-y-4 flex w-full border-b-2  border-gray-800 pt-44 pb-20  md:px-60 px-10 items-center justify-center flex-col"
                >
                    <h1 className="text-7xl text-transparent mb-1  font-semibold  bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]">
                        Metridash
                    </h1>
                    <h1 className="text-5xl pb-2  font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                        We exist to help creators grow{' '}
                    </h1>

                    <p className="md:px-32 px-0   text-lg font-md leading-8 mt-4 text-left text-transparent  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">
                        Born from a deep understanding of the challenges that
                        social media creators face, we are on a mission to
                        transform the way content is conceptualized, crafted,
                        and shared.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }}
                    className="flex transition-all duration-1000  ease-in-out w-screen  md:px-60 px-6 items-center gap-y-4 py-20 flex-col"
                >
                    <h1 className="text-xl text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]">
                        Our Vision
                    </h1>
                    <p className="md:px-32 px-0   text-lg font-light leading-8 mt-6 text-left text-transparent  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">
                        Metridash is the brainchild of a team of creators who
                        share a common passion: helping fellow creators maximize
                        their reach and engagement. In an era where the digital
                        landscape is evolving at an unprecedented pace, we
                        recognized that content creators were grappling with a
                        multitude of issues, from time constraints to creative
                        blocks, and the daunting task of optimizing content for
                        different platforms. We saw an opportunity to provide a
                        comprehensive solution that simplifies the content
                        creation journey and empowers creators to make
                        data-driven decisions.
                    </p>
                    <h1 className="text-xl text-transparent font-semibold mt-8 bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]">
                        One Dashboard to Rule Them All
                    </h1>
                    <p className="md:px-32 px-0 mb-4  text-lg font-light leading-8 mt-6 text-left text-transparent  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">
                        Imagine a world where creators can manage their entire
                        content creation journey from one centralized platform—a
                        dashboard that serves as a hub for inspiration,
                        creation, insights, analytics, distribution, and
                        scheduling. Metridash aspires to be that singular
                        destination, offering an integrated suite of tools and
                        resources tailored to creators of all stages—whether
                        you're starting from zero, aiming for your first 10,000
                        followers, or setting your sights on reaching 1 million.{' '}
                    </p>

                    <h1 className="text-xl text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]">
                        Empowering Every Creator
                    </h1>
                    <p className="md:px-32 px-0   text-lg font-light leading-8 mt-6 text-left text-transparent  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">
                        Our commitment is to ensure that every creator,
                        regardless of their background or experience, has access
                        to the tools and resources needed to level the playing
                        field. Content creation is undoubtedly challenging, and
                        we're here to make it easier.{' '}
                    </p>
                    <h1 className="text-xl text-transparent font-semibold mt-8 bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]">
                        We're Here for You
                    </h1>
                    <p className="md:px-32 px-0   text-lg font-light leading-8 mt-6 text-left text-transparent  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">
                        If you're a creator who's ever felt overwhelmed, unsure,
                        or in need of support, Metridash is here with open arms
                        to say, "We've got your back." Our platform is driven by
                        creators, for creators, and we're dedicated to helping
                        you succeed in every way possible. Our vision isn't just
                        about creating a business; it's about creating a
                        community of creators who support and uplift each other.{' '}
                    </p>

                    <h1 className="text-xl text-transparent mt-8 font-semibold  bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]">
                        Challenging the Status Quo
                    </h1>
                    <p className="md:px-32 px-0   text-lg font-light leading-8 mt-6 text-left text-transparent  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">
                        Metridash isn't just another tool in the content
                        creation toolbox; it's a movement aimed at challenging
                        the status quo and empowering creators to focus on what
                        they do best. No more worrying about branding, SEO, or
                        other complexities. With Metridash, creators can regain
                        their creative freedom.{' '}
                    </p>
                    <h1 className="text-xl text-transparent font-semibold mt-8 bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]">
                        Join Us on This Journey
                    </h1>
                    <p className="md:px-32 px-0   text-lg font-light leading-8 mt-6 text-left text-transparent  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">
                        Metridash is more than a platform; it's a passionate
                        team of creators on a mission. We're driven by a vision
                        to revolutionize content creation, and we invite you to
                        join us on this remarkable journey. Together, we'll
                        build a future where every creator can thrive, innovate,
                        and inspire. Welcome to Metridash—the future of content
                        creation is yours to explore.
                    </p>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }}
                    className="transition-all duration-1000 ease-in-out flex border-t-2 border-gray-800   w-screen py-32 md:px-60 px-6 items-center pt-20 flex-col"
                >
                    <h1 className="text-xl text-center text-transparent font-semibold  bg-clip-text bg-gradient-to-l from-gray-500 to-gray-200">
                        Join us on this exciting journey to content mastery.
                        Let's redefine what's possible in content creation, one
                        inspired idea at a time. Your audience awaits—step into
                        the world of Metridash and own your content like never
                        before.
                    </h1>
                    <h1 className="text-xl text-transparent font-semibold mt-8 bg-clip-text bg-gradient-to-r from-[#1E9AFE] to-[#60DFCD]">
                        Ready to Master Your Content?
                    </h1>
                    <h1 className="title-style mt-10">Join the Waitlist</h1>
                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        validationSchema={JoinWaitingSchema}
                        onSubmit={values => {
                            console.log("*****************" + values.email)
                            waitList(values.email).then((res) => { console.log("data added" + res) }).catch((err) => { console.log(err) })
                            setColor('green-600')
                            setAlert("You have been added to the waitlist")
                            setIsModalOpen(true);
                        }}
                    >
                        <Form>
                            <div className='w-72 h-10 mt-8  bg-black' >
                                <Field name="email" type="text" placeholder='Enter your email.' className='w-72 h-full pl-2 py-4  bg-black border-gray-800 border-spacing-14 border-2 rounded text-white' />
                            </div>
                            <div className='flex flex-col items-center justify-center text-[#E02424]'>
                                <ErrorMessage name="email" />
                            </div>
                            <button type='submit' className='w-72 py-2  mt-8 bg-gradient-to-r from-[#009FFD] to-[#2A2A72] text-white font-medium rounded-full'>Join Waitlist</button>
                        </Form>
                        {/* )} */}
                    </Formik>
                    {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
                            <div className="bg-white p-6 rounded-md">
                                <h1 className={`text-transparent bg-clip-text bg-gradient-to-r from-[#00C1D6] to-[#007DC0] text-4xl font-medium tracking-wide mt-4 text-center`}>Welcome to Metridash Waitlist</h1>
                                <p className="mt-4 text-black font-thin text-center break-words">Exciting news! You've secured your spot on the Metridash Waitlist. <br />To join our vibrant community, connect on Discord now:</p>
                                <div className='flex justify-center'>
                                    <Link href='https://discord.gg/2fmn7AnRuZ' target='_blank' className="mt-4 bg-blue-500 text-white px-8 py-3 rounded-md ">
                                        Join
                                    </Link>
                                </div>
                                <p className="mt-4 text-black font-thin text-center break-words">Let the anticipation begin! We can't wait to share the Metridash journey with you. See you there! </p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </>
    )
}
