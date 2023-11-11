import { useState, ChangeEvent, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '@/firebase'
import { signInWithEmail } from '../../../auth'
import Typewriter from 'typewriter-effect'
import LeftImage from '../../../public/Images/LeftImage.jpeg'
import checkUser from '@/utils/checkUser'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const router = useRouter()

  const user: any = checkUser()

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSignIn = async () => {
    try {
      await signInWithEmail(email, password)
      setMessage('User signed in successfully')
      window.location.href = '/homepage'
    } catch (error) {
      setMessage(`Error signing in: ${error}`)
    }
  }

  if (user && user.uid) {
    window.location.href = '/homepage'
  }

  return (
    <div className="flex-row flex items-center justify-center h-screen w-full relative">
      <div
        className=" md:flex hidden absolute inset-0 w-full h-full blur-md"
        style={{
          backgroundImage:
            // "url('https://c4.wallpaperflare.com/wallpaper/707/220/899/gradient-blue-pink-abstract-art-wallpaper-preview.jpg')",
            // "url('https://c4.wallpaperflare.com/wallpaper/29/995/620/digital-art-abstract-blue-yellow-wallpaper-preview.jpg')",
            "url('https://c4.wallpaperflare.com/wallpaper/448/699/737/abstract-digital-art-3d-abstract-lines-wallpaper-preview.jpg')",

          // "url('https://c4.wallpaperflare.com/wallpaper/428/477/203/digital-art-render-abstract-wallpaper-preview.jpg')",
          backgroundSize: 'cover',
          backdropFilter: 'blur(10px)',
          zIndex: -1,
        }}
      ></div>
      <div className=" md:flex hidden w-1/2 h-full flex-col z-10 justify-center">
        <div className="bg-transparent ">
          <h1 className="font-mono text-2xl font-extrabold w-full text-center text-white">
            Metridash: Your Ultimate Content Creation Companion
          </h1>
        </div>
        <div>
          <h1 className="text-white mt-8 font-mono text-xl font-light w-full text-center">
            <Typewriter
              options={{
                strings: [
                  'Fuel Your Creativity',
                  'Metridash empowers creators with powerful content creation tools, igniting your creative spark like never before.',
                  'Craft, Share, and Thrive',
                  "Unleash your content potential effortlessly with Metridash – from creation to sharing, we've got you covered.",
                  'Join the Creator Revolution',
                  'Ready to revolutionize your content? Join the Metridash community today and watch your creative journey soar.',
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

      <div className=" bg-gradient-to-t from-[#0C0C0C] to-[#090947] flex flex-col items-center justify-center md:px-28 px-10 w-full  md:w-1/2 h-full">
        <h1 className="text-left font-sans mb-10 font-semibold text-[30px] leading-[23px] text-white self-start">
          🙌 Welcome Back!
        </h1>
        <div className="flex flex-row items-start justify-start self-start mb-2">
          <h1 className="self-start text-white ">📧 Email</h1>
          <h1 className="text-pink text-blue-500">*</h1>
        </div>
        <input
          className=" mb-6 px-4 py-2 w-full rounded-md"
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
          className="bg-gradient-to-l from-[#009FFD] to-[#2A2A72] rounded-md px-4 py-2 mb-6 text-white w-full"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        {message && <p className="text-white text-center">{message}</p>}
        <p className="text-white">
          Don&apos;t have an account?{' '}
          <Link
            className="text-white "
            href="/auth/signup"
            style={{ textDecoration: 'underline' }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
