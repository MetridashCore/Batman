import React from 'react'
import Head from 'next/head'
import SideBar from '@/components/SideBarComponent'
import checkUser from '@/utils/checkUser'

export default function Dashboard() {
    const user: any = checkUser()
    if (!user) {
        window.location.href = '/auth/signin'
        return
    }
    return (
        <>
            <Head>
                <title>Metridash - Dashboard</title>
            </Head>
            <h3 className="font-semibold  text-5xl flex justify-center  min-h-screen items-center">
                Coming Soon...
            </h3>
        </>
    )
}
