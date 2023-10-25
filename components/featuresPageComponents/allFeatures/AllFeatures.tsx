import Image from 'next/image'
import FacebookIcon from '../../../public/platformIcons/facebookHiQ.png'
import InstaIcon from '../../../public/platformIcons/instagramHiQ.png'
import LinkedIn from '../../../public/platformIcons/linkednHQ.png'
import TikTokIcon from '../../../public/platformIcons/tiktokHQ.png'
import Youtubeicon from '../../../public/platformIcons/youtubeHQ.png'
import TwitterIcon from '../../../public/platformIcons/twitterx2.png'
import PlaceHolder from '../../../public/platformIcons/twitterHQ.png'
import Schedule from '../../../public/icons/schedule.png'
import Automated from '../../../public/icons/automated.png'
import ContentT from '../../../public/icons/content-taylored.png'
import Craft from '../../../public/icons/craftbio.png'
import Insight from '../../../public/icons/insight.png'
import Calender from '../../../public/icons/calenderCont.png'
import CSE from '../../../public/icons/cse.png'
import Behaviour from '../../../public/icons/behaviour.png'
import Optim from '../../../public/icons/optimization.png'
import Multi from '../../../public/icons/multi.png'
import Collab from '../../../public/icons/collab.png'
import Card from '../card/Card'

export default function AllFeatures() {
  return (
    <>
      <div className="flex flex-col items-center py-8">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-[2.5rem] font-bold title-style">All our features</h1>
          <div className="flex flex-col items-center pb-16 text-para text-lg">
            <span>The breakdown of our features</span>
            <span>and some upcoming ones</span>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid auto-rows-auto gap-6">
              <Card
                icon={ <Image src={ Youtubeicon } alt="Youtube Logo" className="col-span-12" /> }
                title={ `YouTube Video Ideas` }
                text={ <><span>Break free from content block with fresh video</span><br /><span>concepts tailored to your audience.</span></> }
              />
              <div className="grid grid-cols-2 items-start gap-6">
                <div className="grid gap-6">
                  <Card
                    icon={ <Image src={ InstaIcon } alt="Facebook Logo" /> }
                    title={ `Share Visual Stories That Shine` }
                    text={ <><span>Elevate your reach with the</span><br /><span>right set of hashtags</span><br /><span>date</span></> }
                  />
                  <Card
                    icon={ <Image src={ FacebookIcon } alt="Instagram Logo" /> }
                    title={ `Connect and Convert Your Audience` }
                    text={ <><span>Your message, your way.</span><br /><span>Engage your audience like never before.</span></> }
                  />
                  <Card
                    icon={ <Image src={ LinkedIn } alt="Instagram Logo" /> }
                    title={ `Build Your Professional Brand` }
                    text={ <><span>hare your expertise and</span><br /><span>inspire your network.</span></> }
                  />
                </div>
                <div className='grid gap-6'>
                  <Card
                    icon={ <Image src={ TikTokIcon } alt="Instagram Logo" /> }
                    title={ `Short and Sweet Creativity` }
                    text={ <><span>Fuel your creativity with</span><br /><span>video concepts that resonate.</span></> }
                  />
                  <Card
                    icon={ <Image src={ TwitterIcon } alt="Instagram Logo" /> }
                    title={ `Twitter(X) Tweets` }
                    text={ <><span>Whether it's 280 characters or less,</span><br /><span>you'll tweet like a pro.</span></> }
                  />
                  <Card
                    icon={ <Image src={ Schedule } alt="Twitter Logo" /> }
                    title={ `Content Scheduling` }
                    text={ <><span>Plan, schedule, and conquer with</span><br /><span>our powerful scheduler.</span></> }
                  />
                  <Card
                    icon={ <Image src={ Automated } alt="Instagram Logo" /> }
                    title={ `Automated Captioning` }
                    text={ <><span>Simplify caption writing with</span><br /><span>AI-powered suggestions.</span></> }
                  />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 auto-rows-auto items-start gap-6'>
              <div className='grid gap-6'>
                <Card
                  icon={ <Image src={ ContentT } alt="Instagram Logo" /> }
                  title={ `Content Tailored to You` }
                  text={ <><span>Metridash understands your</span><br /><span>style and audience demographics.</span></> }
                />
                <Card
                  icon={ <Image src={ Craft } alt="Instagram Logo" /> }
                  title={ `Craft Engaging Bios` }
                  text={ <><span>Create compelling profiles
                  </span><br /><span>across platforms.</span></> }
                />
                <Card
                  icon={ <Image src={ Insight } alt="Instagram Logo" /> }
                  title={ `Industry Insights:` }
                  text={ <><span>Stay ahead with real-time
                  </span><br /><span>data-driven content recommendations.</span></> }
                />
                <Card
                  icon={ <Image src={ Calender } alt="Instagram Logo" /> }
                  title={ `Master Your Content Calendar` }
                  text={ <><span>Stay organized and on point</span><br /><span>with Metridash's content calendar.</span></> }
                />
              </div>
              <div className='grid gap-6'>
                <Card
                  icon={ <Image src={ Behaviour } alt="Instagram Logo" /> }
                  title={ `Audience Behavior Analysis` }
                  text={ <><span>Understand your audience</span><br /><span>like never before.</span></> }
                />
                <Card
                  icon={ <Image src={ Optim } alt="Instagram Logo" /> }
                  title={ `Optimization Recommendations` }
                  text={ <><span>Fine-tune your strategy</span><br /><span>with data-backed insights.</span></> }
                />
                <Card
                  icon={ <Image src={ Multi } alt="Instagram Logo" /> }
                  title={ `Multichannel Insights:` }
                  text={ <><span>Expand your reach with</span><br /><span>cross-platform analytics.</span></> }
                />
                <Card
                  icon={ <Image src={ Collab } alt="Instagram Logo" /> }
                  title={ `Collaborative Creation` }
                  text={ <><span>Facilitate teamwork with real-time</span><br /><span>collaboration features.</span></> }
                />
              </div>
              <div className="grid col-span-2">
                <Card
                  icon={ <Image src={ CSE } alt="Instagram Logo" /> }
                  title={ `Copy, Save, Edit—Your Content, Your Way` }
                  text={ <><span>Take control of your content with Metridash.</span><br /><span>Copy, save drafts, and edit effortlessly.</span></> }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
