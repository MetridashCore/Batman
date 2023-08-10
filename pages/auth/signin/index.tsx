import { useState, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "@/firebase";
import { signInWithEmail } from "../../../auth";
import Typewriter from 'typewriter-effect';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<null | any>(null);

  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user && user.uid) {
        window.location.href = "/homepage";
      }
    });
  }, [user]);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmail(email, password);
      setMessage("User signed in successfully");
      router.push("/homepage");
    } catch (error) {
      setMessage(`Error signing in: ${error}`);
    }
  };

  return (
    <div className="flex-row flex items-center justify-center h-screen w-screen">
      <div
        className=" flex-col w-full md:w-1/2 h-full items-center justify-center  md:flex hidden"
        style={{
          backgroundImage:
            "url('https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtbWlzYzE0LWFkajAwODU1LWFkai1hXzEuanBn.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
         <div className="flex w-full h-20 flex-col mt-80 px-10 items-center">
          <h1 className="text-white font-mono text-2xl font-extrabold">
            Metridash is live!
          </h1>
          </div>
        <div className="flex justify-start items-start h-screen flex-col px-10">
          
          <h1 className="text-white font-mono text-xl font-light  w-full text-center">
            <Typewriter
              options={{
                strings: ['Providing automated social media analytics to creators.',
                 'We help you track Twitter, Instagram, Youtube, and Facebook #hashtags, keywords, @accounts, and URLs with ease.'],
                autoStart: true,
                loop: true,
                deleteSpeed:2,
                delay:40


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
          className="text-black mb-6 px-4 py-2 w-full rounded-md"
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
          className="text-black mb-6 px-4 py-2 w-full rounded-md"
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
        {message && <p className="text-white">{message}</p>}
        <p className="text-white">
          Don&apos;t have an account?{" "}
          <Link
            className="text-white "
            href="/auth/signup"
            style={{ textDecoration: "underline" }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
