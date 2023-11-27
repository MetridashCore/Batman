import {
    Blocks,
    Growing,
    Journey,
    Preview,
    Prompts,
    Questions,
    Testimonials,
} from '@/components/LandingPageComponents/Sections'
import { auth } from '@/firebase'
import React, { useEffect } from 'react'

const Home = () => {
    const theme = localStorage.getItem('theme')
    if (!theme || theme === 'system') {
        localStorage.setItem('theme', 'light')
    }
    return (
        <>
            <Blocks />
            <Growing />
            <Preview />
            <Prompts />
            <Testimonials />
            <Questions />
            <Journey />
        </>
    )
}

export default Home
