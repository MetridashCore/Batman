import { useState, ChangeEvent, useEffect } from "react"
import Link from "next/link"
import { useRouter, redirect } from "next/navigation"
import { auth } from "@/firebase"
import { createUserWithEmail, signInWithGoogle } from "../../../auth"
import Typewriter from "typewriter-effect"
import classes from "./signup.module.css"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [user, setUser] = useState<null | any>(null)

  const router = useRouter()

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSignUp = async () => {
    try {
      await createUserWithEmail(email, password)

      setMessage("User signed up successfully")
      router.push("/homepage")
    } catch (error) {
      setMessage(`Error signing up: ${error}`)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      setMessage("User signed in with Google successfully")
      window.location.href = "/homepage"
    } catch (error) {
      setMessage(`Error signing in with Google: ${error}`)
    }
  }

  return (
    <div className="flex-row flex items-center justify-center h-screen w-full">
      <div
        className="md:flex hidden absolute inset-0 w-full h-full blur-sm"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/coworkers-office-with-photo-cameras-computer_329181-12002.jpg?w=2000&t=st=1694872346~exp=1694872946~hmac=218f45abed30e19f7aafbd878df73d4b6ff924a3033b3d4b594a088780b49352')",
          backgroundSize: "cover",
          backdropFilter: "blur(10px)",
          zIndex: -1,
        }}
      ></div>
      <div className="md:flex hidden w-1/2 h-full flex-col z-10  mt-96 pt-20">
        <div className="bg-transparent ">
          <h1 className="font-mono text-2xl font-extrabold w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7EE8FA] to-[#EEC0C6]">
            Metridash: Your Ultimate Content Creation Companion
          </h1>
        </div>
        <div className="flex justify-start items-start h-screen flex-col px-10">
          <h1 className="text-white font-mono text-xl font-light w-full text-center">
            <Typewriter
              options={{
                strings: [
                  "Fuel Your Creativity",
                  "Metridash empowers creators with powerful content creation tools, igniting your creative spark like never before.",
                  "Craft, Share, and Thrive",
                  "Unleash your content potential effortlessly with Metridash – from creation to sharing, we've got you covered.",
                  "Join the Creator Revolution",
                  "Ready to revolutionize your content? Join the Metridash community today and watch your creative journey soar.",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 2,
                delay: 40,
              }}
            />
          </h1>
        </div>
      </div>
      <div className=" bg-gradient-to-t from-[#0C0C0C] to-[#090947] flex flex-col items-center justify-center h-full md:px-28 px-10 w-full md:w-1/2">
        <h1 className="text-center font-sans mb-10 font-semibold text-[30px] leading-[23px] text-white self-start">
          👋 Create Account
        </h1>
        <form
          className="flex flex-col w-full "
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-row items-start justify-start self-start mb-2">
            <h1 className="self-start text-white ">📧 Email</h1>
            <h1 className="text-pink text-blue-500">*</h1>
          </div>

          <input
            className=" mb-6 px-4 py-2 w-full rounded-md "
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="flex flex-row items-start justify-start self-start mb-2">
            <h1 className="self-start text-white">🔑 Password</h1>
            <h1 className="text-pink text-blue-500">*</h1>
          </div>
          <input
            className=" mb-6 px-4 py-2 w-full rounded-md"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="bg-blue-500 rounded-md px-4 py-2 mb-6 text-white"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button className="text-white" onClick={handleGoogleSignIn}>
            Sign Up with Google
          </button>
        </form>
        {message && <p className="text-white">{message}</p>}
        <p className="text-white">
          Already have an account?{" "}
          <Link
            className="text-white"
            href="/auth/signin"
            style={{ textDecoration: "underline" }}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
