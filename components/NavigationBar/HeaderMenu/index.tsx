import { FirebaseParameters } from "@/constants/firebaseParameters"
import { getConfigValue } from "@/services/firebase/remoteConfig"
import Image from "next/image"
import Link from "next/link"
import jwt from "jsonwebtoken"
import menu from "../../../public/Images/menu.png"
import { useRouter } from "next/router"
import { Logout } from "../../../auth"
import { Auth } from "firebase/auth"
import { auth } from "@/firebase"
import { firestore } from "firebase-admin"
import { useState, useEffect } from "react"
import LoginNavBar from "@/components/LoginNavBar"
import { BsArrow90DegRight } from "react-icons/bs"
import { BsArrowRightSquare, BsArrowBarRight , BsList} from "react-icons/bs"

import DashBoard from "../../../public/tab-icon.png"
interface Props {
  children: JSX.Element
}

const HeaderMenu = (props: Props) => {
  const router = useRouter()
  const [user, setUser] = useState<null | any>(null)
  const [active, setActive] = useState<string>("0")
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false)
  useEffect(() => {
    ;(async () => {
      await getConfigValue(FirebaseParameters.SHOW_LOGIN, setShowLogin, true)
    })()
  }, [])

  const handleLogout = async () => {
    try {
      await Logout()
      alert("User logged out successfully!")
      router.push("/")
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    console.log("HeaderMenu showlogin", showLogin)
  }, [showLogin])

  const handleClick = (index: number) => {
    setActive(index.toString())
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [user])

  if (auth.currentUser?.uid) {
    const token = jwt.sign(
      { uid: auth.currentUser?.uid! },
      process.env.NEXT_PUBLIC_JWT_SECRET!
    )
    localStorage.setItem("token", token)
  }

  return (
    <>
      {user && user.uid ? (
        <LoginNavBar></LoginNavBar>
      ) : (
        <div className="bg-transparent z-10 absolute flex justify-between pl-[7%] pr-10 items-center h-10 py-10 w-screen">
          <div className="flex flex-row px-2 gap-x-2 items-center">
            <Link href={"/"}>
              <Image className="w-8 h-8" src={DashBoard} alt="DashBoard" />
            </Link>

            <h1 className="md:flex text-transparent hidden font-semibold text-[20px] leading-[23px]  bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200">
              <Link href={"/"}>Metridash</Link>
            </h1>
          </div>
          <ul className=" justify-center gap-x-10 md:flex hidden">
            <li
              className={`cursor-pointer mr-4 text-sm self-center ${
                active === "0" ? "text-transparent  bg-clip-text bg-gradient-to-l from-[#1E9AFE] to-[#60DFCD]" : "text-[#a0a2ae]"
              }`}
              onClick={() => handleClick(0)}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              className={`cursor-pointer mr-4 text-sm self-center ${
                active === "1" ? "text-transparent  bg-clip-text bg-gradient-to-l from-[#1E9AFE] to-[#60DFCD]" : "text-[#a0a2ae]"
              }`}
              onClick={() => handleClick(1)}
            >
              <Link href="/features">Features</Link>
            </li>

            <li
              className={`cursor-pointer mr-4 text-sm self-center ${
                active === "2" ? "text-transparent  bg-clip-text bg-gradient-to-l from-[#1E9AFE] to-[#60DFCD]" : "text-[#a0a2ae]"
              }`}
              onClick={() => handleClick(2)}
            >
              <Link href="/pricing">Pricing</Link>
            </li>

            <li
              className={`cursor-pointer mr-4 text-sm self-center ${
                active === "3" ? "text-transparent  bg-clip-text bg-gradient-to-l from-[#1E9AFE] to-[#60DFCD]" : "text-[#a0a2ae]"
              }`}
              onClick={() => handleClick(3)}
            >
              <Link href="/about">About Us</Link>
            </li>

            {/* <li
              className={`cursor-pointer mr-4 ${
                active === "4" ? "text-[#fff]" : "text-[#8E9CF3]"
              }`}
              onClick={() => handleClick(4)}
            >
              <Link href="/home">Dashboard</Link>
            </li> */}


          </ul>
          <div className="md:flex hidden flex-row gap-x-2">

            <h1
              className={`cursor-pointer mr-4 text-md self-center ${
                active === "4" ? "text-transparent  bg-clip-text bg-gradient-to-l from-[#1E9AFE] to-[#60DFCD]" : "text-[#a0a2ae]"
              }`}
              onClick={() => handleClick(4)}
            >
              <Link href="/auth/signin">Sign in</Link>
            </h1>
            <Link
              href={"/auth/signup"}
              className="flex flex-row items-center justify-center gap-x-1 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
            >
              <h1 className="font-semibold text-white ">Try for free</h1>
            </Link>
          </div>

          <div className="md:hidden flex relative">
            <div className="flex">
              <BsList
                // src={menu}
                className="w-6 h-6"
                // alt="profile"
                
                onClick={() => {
                  setToggleDropdown((prev) => !prev)
                }}
              />
              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/"
                    className="text-white dropdown_link"
                    onClick={() => {
                      setToggleDropdown(false)
                      handleClick(0)
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/features"
                    className="text-white dropdown_link"
                    onClick={() => {
                      setToggleDropdown(false)
                      handleClick(1)
                    }}
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-white dropdown_link"
                    onClick={() => {
                      setToggleDropdown(false)
                      handleClick(2)
                    }}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about"
                    className="text-white dropdown_link"
                    onClick={() => {
                      setToggleDropdown(false)
                      handleClick(3)
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/auth/signin"
                    className="text-white dropdown_link"
                    onClick={() => {
                      setToggleDropdown(false)
                      handleClick(4)
                    }}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="text-white dropdown_link"
                    onClick={() => {
                      setToggleDropdown(false)
                      handleClick(4)
                    }}
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <main>{props.children}</main>
    </>
  )
}

export default HeaderMenu
