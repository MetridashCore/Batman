import React from "react"
import checkUser from "@/utils/checkUser"

export default function Schedule() {
  const user: any = checkUser()
  if (!user) {
    window.location.href = "/auth/signin"
    return
  }
  return (
    <h3 className="font-semibold  text-5xl flex justify-center min-h-screen items-center">
      Coming Soon...
    </h3>
  )
}
