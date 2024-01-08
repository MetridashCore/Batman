import React from 'react'
import Head from 'next/head'
import checkUser from '@/utils/checkUser'

export default function Schedule() {
    const user: any = checkUser()
    if (!user) {
        window.location.href = '/auth/signin'
        return
    }
    return (
        <>
            <Head>
                <title>Metridash - Schedule</title>
            </Head>
            <h3 className="font-semibold  text-5xl flex justify-center min-h-screen items-center">
                Coming Soon...
            </h3>
        </>
    )
}
