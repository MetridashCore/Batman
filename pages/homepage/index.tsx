import React from 'react'
import Head from 'next/head'
import SideBar from '@/components/SideBarComponent'
import GPTResponse from '@/components/GPTRespone'
import { platformAtom } from '@/utils/store'
import { useAtom } from 'jotai'
import checkUser from '@/utils/checkUser'
import GPTResponseVideo from '@/components/GPTResponseVideo'

export default function HomePage() {
    const [platformAt] = useAtom(platformAtom)
    const user: any = checkUser()
    if (!user) {
        window.location.href = '/auth/signin'
        return null
    }
    return (
        <>
            <Head>
                <title>Metridash - AI Creator Studio</title>
            </Head>
            <div className="flex flex-col md:flex-row w-screen h-screen">
                <div className="flex md:w-6/12 h-full">
                    <SideBar></SideBar>
                </div>
                <div className="flex md:w-6/12 h-full ">
                    {/* {platformAt=="Youtube Video" || platformAt=="Youtube Shorts" || platformAt=="Instagram Reels" || platformAt=="TikTok Video"?<GPTResponseVideo></GPTResponseVideo>: */}
                    <GPTResponse></GPTResponse>
                </div>
            </div>
        </>
    )
}
