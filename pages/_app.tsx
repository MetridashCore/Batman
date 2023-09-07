


import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { SessionProvider, useSession } from "next-auth/react"
import { Children, useEffect } from "react"

import NavigationBar from "@/components/NavigationBar"
import HeaderMenu from "@/components/NavigationBar/HeaderMenu"
import Head from "next/head"
import { auth } from "@/firebase"
import { ThemeProvider } from "next-themes"
import LoginNavBar from "@/components/LoginNavBar"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {}, [pageProps.session])

  return (
    <>
      <Head>
        <title>Metridash-Say BYE-BYE to creative blocks!</title>
        <link rel="shortcut icon" href="/tabIcon.png" />
      </Head>
      <ThemeProvider attribute="class">
        <SessionProvider session={pageProps.session}>
          <NavigationBar>
            <Component {...pageProps} />
          </NavigationBar>
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}
