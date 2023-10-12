import React from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Questions() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }))

  return (
    <div className="flex flex-col bg-cover bg-center backdrop-blur-lg  items-center w-full py-20 md:px-72 px-4">
      <h1 className="text-3xl font-semibold">
        <span className="font-semibold text-[48px] leading-[54px] text-center text-transparent bg-clip-text bg-gradient-to-t from-gray-300 to-gray-700 pb-2">
          Have Questions?
        </span>
      </h1>
      <h1 className="text-lg my-2 text-white ">
        Explore our FAQs or contact our support team. We're here to help.
      </h1>
      <div className='flex w-full mt-10 flex-col gap-y-1'>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-300' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-300 '>What is Metridash?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-gray-200 '>
          Metridash is an all-in-one content creation platform designed to empower creators like you. It combines AI-driven content generation, seamless multichannel publishing, content management, and real-time analytics to streamline your content creation process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-300 ' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-300 '>How can Metridash help me as a creator?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-gray-200 '>
          Metridash helps creators overcome creative blocks by generating personalized content ideas and prompts. It simplifies content management across multiple platforms, saving you time and effort. Additionally, it provides real-time analytics to help you track content performance and make data-driven decisions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-300 ' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-300 '>Do I need to be tech-savvy to use Metridash?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography className='text-gray-200 '>
          Not at all! Metridash is designed with user-friendliness in mind. Whether you're a tech guru or a beginner, you'll find our platform intuitive and easy to navigate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-300 ' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-300 '>Can I use Metridash for different content platforms like YouTube, Instagram, and my TikTok?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-gray-200 '>
          Absolutely! Metridash supports content creation and publishing across a wide range of platforms, including YouTube, Instagram, Twitter, Facebook, TikTok, LinkedIn, and blogs. You can manage all your content in one place.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-300 ' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-300 '>How does Metridash generate content ideas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-gray-200 '>
          Metridash uses a proprietary algorithm that takes your niche, target audience, and other details into account to generate personalized content ideas and prompts. It's like having a creative brainstorming partner at your side.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-300 ' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-300 '>Is my data safe with Metridash?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-gray-200 '>
          We take data security seriously. Metridash employs robust security measures to protect your data. You can refer to our Privacy Policy for more details on how we handle and safeguard your information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#131313'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-gray-300 ' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-300 '>How can I get started with Metridash?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-gray-200 '>
          Getting started is easy. Simply sign up for a Metridash account, and you'll gain access to a world of content creation possibilities. We offer both free and premium plans to suit your needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
    </div>
    </div>
  )
}
