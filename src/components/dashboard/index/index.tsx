"use client"
import { redirect, useRouter } from "next/navigation"
import DashboardBody from "./DashboardBody"

const DashboardIndex = () => {
  const router = useRouter()
  const token =!window.localStorage.getItem("token")
  console.log("token",token)
  if (token) {
    router.replace('/login')
  }
  return (
    <>
      <DashboardBody/>
    </>
  )
}

export default DashboardIndex
