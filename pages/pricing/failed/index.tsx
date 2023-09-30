import React, { useEffect } from 'react'
import failed from '../../../public/icons/failed.png'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from "@/firebase"
export default function Failed() {
    const user = auth?.currentUser
   
  return (
    <div className="flex w-screen h-screen  items-center  flex-col">
        <div className='flex px-10 py-20 bg-gray-200 mt-40 flex-col items-center rounded-md justify-center'>

        <Image className='w-28 h-28' src={failed} alt='success'></Image>
        <h1 className='mt-6 text-xl text-red-500 font-semibold'>Your Payment has failed. Please try again.</h1>
        <h3 className='text-gray-600'>Click on the button to be redirected to the Home Page.</h3>
        <Link href={'/homepage'} className='flex px-4 py-2 mt-4 rounded-md bg-blue-300'>
            <h1 className='text-white font-semibold'>Home page</h1>
        </Link>
        </div>
    </div>
  )
}
