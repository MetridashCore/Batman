import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import checkUser from "@/utils/checkUser"
export default function Faq() {
  const user: any = checkUser()
  return (
    <div className='flex w-screen  md:px-64 px-4 pt-20 justify-center  '>
        <div className='w-full md:px-40 px-2' >

        <h1 className='title-style'>FAQs</h1>
        <p className='text-para'>Answers to the most frequently asked questions.</p>

        <div className='flex w-full mt-10 flex-col gap-y-1'>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-400' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-400 '>What payment methods do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-gray-200 '>
          We accept major credit cards (Visa, MasterCard, American Express) and PayPal for your convenience. You can securely make payments using these methods.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-400 ' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-400 '>Is there a free trial available for your service?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-gray-200 '>
          Yes, we offer a 14-day free trial for all our plans. It's a great way to explore our features and see how Metridash can benefit your content creation journey.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-400 ' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-400 '>How often am I billed for my subscription?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography className='text-gray-200 '>
          Billing frequency depends on your chosen plan. We offer both monthly and annual billing options. You can select the one that suits your needs during the signup process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-400 ' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-400 '>Can I change my subscription plan after signing up?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-gray-200 '>
          Absolutely! You can easily upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-400 ' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-400 '>What happens if I decide to cancel my subscription?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-gray-200 '>
          We're here to accommodate your needs. If you decide to cancel, your subscription will remain active until the end of your billing cycle. After that, you'll still have access to your content, but you won't be charged further.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
    </div>

    <div className='flex flex-col mt-40 w-full '>
        <h1 className='title-third text-center'>Ready to elevate your content creation game?</h1>
        <h1 className='text-lg text-gray-400 text-center my-6'> Start your 14-day free trial today<br></br> and unlock the full potential of Metridash!</h1>
        <Link
            href={`${user && user.uid ? "/homepage" : "/auth/signup"}`}
            className="flex  px-4 py-2 mt-4 md:mx-40 mx-4 button-gradient  items-center justify-center"
          >
            <h1 className="text-lg font-semibold text-white">Get Started for Free</h1>
          </Link>
    </div>
        </div>
    </div>
  )
}
