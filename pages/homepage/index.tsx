import React from 'react'
import SideBar from '@/components/SideBarComponent'
export default function HomePage() {
  return (
    <div className='flex flex-row w-screen h-screen'>
        <div className='flex w-7/12 h-full'>
          <SideBar></SideBar>
          {/* <h1>Hello World</h1> */}
        </div>
    </div>
  )
}

