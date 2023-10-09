import CustomPlan from "@/components/PricingComponents/CustomPlan"
import FreeTrial from "@/components/PricingComponents/FreeTrial"
import LongForm from "@/components/PricingComponents/LongForm"
import CompareTable from "@/components/PricingComponents/CompareTable"
import Faq from "@/components/PricingComponents/Faq"
import React from "react"


import classes from "./pricing.module.css"

function pricing() {
  return (
    <div
      className={`${classes.pricing} bg-black flex justify-center items-center  flex-wrap`}
    >
      <h1 className="md:text-5xl pb-2 text-3xl text-center text-transparent font-bold bg-clip-text bg-gradient-to-t from-gray-500 to-gray-200">Choose the plan that's best for you.</h1>
      
      <div className={` flex flex-row bg-black mt-6  justify-center items-center gap-x-4  flex-wrap`}>

      <FreeTrial />
      <LongForm />
      <CustomPlan />
      </div>
      <CompareTable></CompareTable>
      <Faq></Faq>
    </div>
  )
}

export default pricing
