import CustomPlan from '@/components/PricingComponents/CustomPlan'
import FreeTrial from '@/components/PricingComponents/FreeTrial'
import LongForm from '@/components/PricingComponents/LongForm'
import React from 'react'

function Main() {
  return (
    <div className='flex justify-center gap-y-5 p-10 flex-wrap'>
      <FreeTrial />
      <LongForm />
      <CustomPlan />
    </div>
  )
}

export default Main
