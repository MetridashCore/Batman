import {
  Blocks,
  Growing,
  Journey,
  Preview,
  Prompts,
  Questions,
  Testimonials
} from "@/components/LandingPageComponents/Sections"
import { auth } from "@/firebase"
import React, { useEffect } from "react"
import Waitlist from "./waitList"
const Home = () => {



  return (
    // <div className="bg-black flex flex-col bg-cover bg-center">
    //   <Blocks />
    //   <Growing />
    //   <Preview />
    //   <Prompts />
    //   <Questions/>
    //   <Journey />
    // </div>
    <Waitlist></Waitlist>
  )
}

export default Home
