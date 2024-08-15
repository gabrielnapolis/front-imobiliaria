"use client"
import DashboardHeaderOne from "@/layouts/headers/dashboard/DashboardHeaderOne"
import PropertyListBody from "./PropertyListBody"
import { useRouter } from "next/navigation"


const PropertyList = () => {
   const router = useRouter()
   const token =window.localStorage.getItem("token")
   console.log("token",token)
   if (!token) {
     router.replace('/login')
   }
   return (
      <> 
         <DashboardHeaderOne />
         <PropertyListBody/>
      </>
   )
}

export default PropertyList
