import React from 'react'
import LinkedIn from '../../../public/platformIcons/linkednHQ.png'
import FacebookIcon from '../../../public/platformIcons/facebookHiQ.png'
import TikTokIcon from '../../../public/platformIcons/tiktokHQ.png'
import TwitterIcon from '../../../public/platformIcons/twitterx2.png'
import Youtubeicon from '../../../public/platformIcons/youtubeHQ.png'
import InstaIcon from '../../../public/platformIcons/instagramHiQ.png'
import Image from 'next/image';
import Card from '../card/Card';

export default function AllFeatures() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#00062a] py-8">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-[2.5rem] font-bold">All our features</h1>
          <div className="flex flex-col items-center pb-16 text-slate-300 text-lg">
            <span>The breakdown of our features</span>
            <span>and some upcoming ones</span>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid auto-rows-auto gap-6">
              <Card
                icon={ <Image src={ Youtubeicon } alt='Youtube Logo' className="text-slate-300 col-span-12" /> }
                title={ `YouTube Video Ideas` }
                text={ <><span>Break free from content block with fresh video</span><br /><span>concepts tailored to your audience.</span></> }
                bgColor={ `bg-[#1a1f40]` }
                textColor={ `text-[#9a9a9a]` }
                bgIcon={ `bg-transparent` }
              />
              <div className="grid grid-cols-2 items-start gap-6">
                <div className="grid gap-6">
                  <Card
                    icon={ <Image src={ InstaIcon } alt="Facebook Logo" className="text-slate-300" /> }
                    title={ `Share Visual Stories That Shine` }
                    text={ <><span>Elevate your reach with the</span><br /><span>right set of hashtags</span><br /><span>date</span></> }
                    bgColor={ `bg-[#1a1f40]` }
                    textColor={ `text-[#9a9a9a]` }
                    bgIcon={ `bg-transparent` }
                  />
                </div>
                <div className='grid gap-6'>
                  <Card
                    icon={ <Image src={ FacebookIcon } alt='Instagram Logo' className="text-slate-300" /> }
                    title={ `Connect and Convert Your Audience` }
                    text={ <><span>Your message, your way.</span><br /><span>Engage your audience like never before.</span></> }
                    bgColor={ `bg-[#1a1f40]` }
                    textColor={ `text-[#9a9a9a]` }
                    bgIcon={ `bg-transparent` }
                  />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 items-start gap-6'>
              <div className='grid gap-6'>
                <Card
                  icon={ <Image src={ LinkedIn } alt='Instagram Logo' className="text-slate-300" /> }
                  title={ `Build Your Professional Brand` }
                  text={ <><span>hare your expertise and</span><br /><span>inspire your network.</span></> }
                  bgColor={ `bg-[#1a1f40]` }
                  textColor={ `text-[#9a9a9a]` }
                  bgIcon={ `bg-transparent` }
                />
              </div>
              <div className='grid gap-6'>
                <Card
                  icon={ <Image src={ TikTokIcon } alt='Instagram Logo' className="text-slate-300" /> }
                  title={ `Short and Sweet Creativity` }
                  text={ <><span>Fuel your creativity with</span><br /><span>video concepts that resonate.</span></> }
                  bgColor={ `bg-[#1a1f40]` }
                  textColor={ `text-[#9a9a9a]` }
                  bgIcon={ `bg-transparent` }
                />
              </div>
              <div className="grid col-span-2 gap-6">
                <Card
                  icon={ <Image src={ TwitterIcon } alt='Twitter Logo' className="text-slate-300" /> }
                  title={ `Craft Tweets That Spark Conversations` }
                  text={ <><span>Whether it's 280 characters or less,</span><br /><span>you'll tweet like a pro.</span></> }
                  bgColor={ `bg-[#1a1f40]` }
                  titleColor={ `text-white` }
                  textColor={ `text-[#9a9a9a]` }
                  bgIcon={ `bg-transparent` }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
