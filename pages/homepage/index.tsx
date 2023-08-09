import React from 'react'
import SideBar from '@/components/SideBarComponent'
import GPTResponse from '@/components/GPTRespone'
export default function HomePage() {
  return (
    <div className='flex flex-row w-screen h-screen'>
        <div className='flex w-6/12 h-full'>
          <SideBar></SideBar>
        </div>
        <div className='flex w-6/12 h-full'>

          <GPTResponse></GPTResponse>
        </div>
    </div>
  )
}

