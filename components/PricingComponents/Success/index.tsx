import React, { useEffect, useState } from 'react'
import success from "../assets/success.png"
import { auth } from "@/firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  const [sessionId, setSessionId] = useState("");


  console.log(sessionId)

  const handlePaymentSuccess = () => {
    fetch("http://localhost:8000/api/stripe/payment-success", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({sessionId: sessionId, firebaseId: auth.currentUser?.uid })
    })
    .then(res => {
      if(res.ok) return res.json();
      return res.json().then(json => Promise.reject(json));
    })
    .then(data => {
      console.log(data.message);
      router.push("/")
    })
    .catch(e => {
      console.log(e.error);
    });
  }


  return (
    <div className='m-0 p-0'>
      <div className='w-full min-h-[80vh] flex flex-col justify-center items-center'>
        <div className='my-10 text-green-600 text-2xl mx-auto flex flex-col justify-center items-center'>
          <Image src={success} alt="" width={220} height={220}/>
          <h3 className='text-4xl pt-20 lg:pt-0 font-bold text-center text-slate-700'>
            Payment Successful
          </h3>
          <button onClick={() => handlePaymentSuccess()}
          className='w-40 uppercase bg-[#009C96] text-white text-xl my-16 px-2 py-2 rounded'
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  )
}

export default Success