
import YoutubeOptions from './youtube';
import TwitterOptions from './twitter';
import InstagramOptions from './instagram';
import LinkedInOptions from './linkedin';
import FacebookOptions from './facebook';
import TiktokOptions from './tiktok';

const platforms = [
    {
      name: "Youtube",
      icon: '/platformIcons/youtube1.png',
      color: "#FF0000",
      items: YoutubeOptions
    },
    {
      name: "Twitter",
      icon: '/platformIcons/twitterHQ.png',
      color: "#1DA1F2",
      items: TwitterOptions
    },
    {
      name: "Instagram",
      icon: '/platformIcons/instagramHiQi.png',
      color: "#C13584",
      items: InstagramOptions
    },
    {
      name: "Linkedin",
      icon: '/platformIcons/linkednHQ.png',
      color: "#0077B5",
      items: LinkedInOptions
    },
    {
      name: "Facebook",
      icon: '/platformIcons/facebookHiQ.png',
      color: "#4267B2",
      items: FacebookOptions
    },
    {
        name: "TikTok",
        icon: '/platformIcons/tiktokHQ.png',
        color: "#FE2C55",
        items: TiktokOptions
    }
  ];

  export default platforms;