import React from 'react'
import { auth } from "@/firebase"
import Link from 'next/link'

export default function Bottom() {
  const user = auth.currentUser
  return (
    <div className="flex flex-col items-center py-[7rem] text-para text-2xl">
      <span>Unleash your creative genius and power up your content strategy</span>
      <span>with Metridash.</span>
      <span>Ready to make content magic?</span>
      <Link
        href={ `${user && user.uid ? "/homepage" : "/auth/createaccount"}` }
        className="button-gradient px-4 py-2 mt-4"
      >
        <button className="text-lg font-semibold text-white">Try for free</button>
      </Link>
    </div>
  )
}
