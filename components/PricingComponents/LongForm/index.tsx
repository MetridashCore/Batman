"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { AiFillAlert } from "react-icons/ai";
import { set } from "firebase/database";
import {loadStripe, Stripe} from '@stripe/stripe-js';
import { auth } from "@/firebase";
import { useRouter } from "next/router";
import { IoCheckmark } from "react-icons/io5";
function LongForm() {
  const [value, setValue] = useState<number[]>([10000]);
  const [price, setPrice] = useState<number>(19);
  const [words, setWords] = useState<number>(10000);
  const [token, setToken] = useState<number>(100);
  const router = useRouter()
  const handleSliderChange = (value: number | number[]) => {
    handlePriceChange(value);
    if (Array.isArray(value)) {
      setValue(value);
    }
  };

  const makePayment = async () => {
    try{

      const stripe = await loadStripe("pk_test_51JmCDKSG74X9iofA5TPFlDLSImjimmiWFC8m2BKFjaNQxRt8GkTes5n8o99JgGKohkjgkpgOlKdD7VouKr9pks9400gBrxpcM9"); //This key is just for testing and not for final product//
      const data={tokens: token, prices: price, words: words}
      const body = {
        products: data,
      }
      const headers = {
        "Content-Type": "application/json",
      }
      const response = await fetch("http://localhost:8000/stripe-payment", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
  
      const session = await response.json();
  
      if (stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
  
        if (result.error) {
          console.log(result.error);
        }
      }
    }
    catch(e){
      alert(e)
      console.log(e)
    }
  }

  const PaymentHandler=()=>{
      auth.currentUser? makePayment(): router.push('/auth/signup')
  }

  const handlePriceChange = (value: number | number[]) => {
    if (value == 10000) {
      setPrice(19);
      setWords(10000);
      setToken(100);
    } else if (value == 20000) {
      setPrice(79);
      setWords(50000);
      setToken(500);
    } else if (value == 30000) {
      setPrice(149);
      setWords(100000);
      setToken(1000);
    } else if (value == 40000) {
      setPrice(279);
      setWords(200000);
      setToken(2000);
    } else if (value == 50000) {
      setPrice(599);
      setWords(500000);
      setToken(5000);
    }
  };

  const railStyle = {
    backgroundColor: "#e5e7eb",
    height: 5,
  };

  const handleStyle = {
    backgroundColor: "#3d82f4",
    border: "none",
    borderRadius: 20,
    width: 40,
    height: 25,
    marginLeft: -0,
    marginTop: -10,
    zIndex: 100,
    outline: "none",
    "&:focus, &:hover": {
      outline: "none",
    },
  };

  const trackStyle = {
    backgroundColor: "#3d82f4",
    height: 5,
  };

  const styleDot = {
    backgroundColor: "blue",
  };
  return (
    <div className="group flex flex-col w-[400px]  py-10 pb-20 items-center rounded-md border-gray-800 border-2  bg-[#131313] ">
      {/* <div className='flex flex-col h-[100%] py-10 mx-3 my-10 pb-20 items-center rounded-[40px] border-[#6969ee] border-[3px]'> */}
      <div className="flex flex-col w-[100%] items-center ">
        <h1 className="title-style">Pro</h1>
        <p className="font-medium py-2 text-white text-lg px-2 text-center ">
        Take your content creation to the next level
        </p>
        <div className="flex flex-col h-[200px] items-center">

<div className="pt-4 pb-4 flex flex-col gap-y-2">
  <h1 className="text-4xl text-[#3d82f4] font-bold">${price}</h1>
  <p className="text-center text-white font-normal">/month</p>
</div>
{/* <div className='flex text-[#374151] mb-5 text-[20px] gap-x-[180px] font-medium'> */}
<div className="flex text-white mb-5 text-[14px] gap-x-[180px]">
  <p>{words.toLocaleString("en-IN")}</p>
  <p>5,00,000</p>
</div>
<div className="flex w-[90%] items-center justify-center">
  <Slider
    range
    defaultValue={[0]}
    min={10000}
    max={50000}
    step={null}
    railStyle={railStyle}
    handleStyle={[handleStyle, handleStyle]}
    trackStyle={[trackStyle, trackStyle]}
    onChange={handleSliderChange}
    marks={{
      10000: "10k",
      20000: "50k",
      30000: "100k",
      40000: "200k",
      50000: "500k",
    }}
    dotStyle={styleDot}
  />
</div>

<div className="flex items-center gap-x-2 pt-10 flex-col">
  <p className="text-white font-bold text-lg">
    {token.toLocaleString("en-IN")} Tokens/month
  </p>
  <p className="text-white font-bold text-lg">
    {words.toLocaleString("en-IN")} Words/month
  </p>
</div>
</div>
        <p className="w-[85%] text-white text-[22px] pt-20 text-center font-medium">
        Key Features
        </p>
        <div className="flex flex-col gap-y-2 mt-2 px-24 ">
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light text-left"> All features in Starter</h1>
            </div>
            {/* <div className="flex flex-row  gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light text-left"> X Words of Content (changes according to the silder)</h1>
            </div> */}
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light text-left">Scheduler</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light text-left">Insight Engine</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light text-left">Advanced Analytics</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light text-left">Creator Community</h1>
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <IoCheckmark></IoCheckmark>
              <h1 className="text-white font-light text-left">And More</h1>
            </div>
            

          </div>
      
      </div>
      <div onClick={PaymentHandler} className=" cursor-pointer text-[20px] font-bold bg-[#3d82f4] text-white p-5 px-10 rounded-[10px] relative  mt-8 ">
        Upgrade
      </div>
    </div>
  );
}

export default LongForm;
