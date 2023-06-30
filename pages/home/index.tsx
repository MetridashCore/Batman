import { NextPage } from "next";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TikTokIcon from "@mui/icons-material/ThumbUp";
import Grade from "@mui/icons-material/Grade";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { useRouter } from "next/router";
import youtubeContent from "@/data/youtube";
import tiktokContent from "@/data/tiktok";
import InstagramContent from "@/data/instagram";
import linkedInContent from "@/data/linkedin";
import twitterContent from "@/data/twitter";
import facebookContent from "@/data/facebook";
import generalContent from "@/data/general";
const socialMediaPlatforms = [
  {
    id: 1,
    name: "YouTube",
    icon: <YouTubeIcon />,
    content:
      "YouTube is a video-sharing platform where users can upload, watch, and interact with videos. It offers a wide range of content, including music videos, tutorials, vlogs, and more.",
  },
  {
    id: 2,
    name: "TikTok",
    icon: <TikTokIcon />,
    content:
      "TikTok is a short-form video-sharing platform known for its creative and entertaining content. Users can create and share short videos with various effects, filters, and music.",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <InstagramIcon />,
    content:
      "Instagram is a photo and video-sharing social networ platform. Users can post photos and videos, follow other users, explore content, and interact through comments and likes.",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    content:
      "LinkedIn is a professional networking platform where users can create a profile, connect with colleagues and professionals, and share content related to their career and industry.",
  },
  {
    id: 5,
    name: "Twitter",
    icon: <TwitterIcon />,
    content:
      "Twitter is an online social networking and microblogging platform where users can post and interact with messages known as 'tweets'. It is a popular platform for real-time information and social networking.",
  },
  {
    id: 6,
    name: "Facebook",
    icon: <TwitterIcon />,
    content:
      "Facebook is an online social networking and microblogging platform where users can post and interact with messages known as 'tweets'. It is a popular platform for real-time information and social networking.",
  },
];

const Cards = styled(Card)`
  margin: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContents = styled(Card)`
  text-align: center;
  margin: 10px 4px;
  backgroundcolor: white;
  cursor: pointer;
  color: black;
  align-items: center;
  justify-content: center;
  borderradius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
  max-width: 350px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
`;

const DescriptionCard = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`;

const CardItemTitle = styled.h1`
  color: black;
  font-weight: bolder;
  margin-bottom: 15px;
  margin-top: 15px;
  align-self: center;
  text-align: center;
`;

const IconCard = styled(Card)`
  display: flex;
  flexdirection: column;
`;

const Icon = styled(Typography)`
  fontsize: 48px;
  marginbottom: 2px;
`;

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Grid>
      <Grid>
      <Cards>
          <CardItemTitle>
            <Grade />
            <h3>General</h3>
          </CardItemTitle>
          <DescriptionCard>
            {generalContent.slice(0, 4).map((content) => {
              return (
                <CardContents
                  onClick={() => {
                    if (content.comp == "rewrite") {
                      router.push({
                        pathname: "/home/Rewrite",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "repurpose") {
                      router.push({
                        pathname: "/home/Repurpose",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } 
                  }}
                  key={content.id}
                >
                  <CardItemTitle>{content.title}</CardItemTitle>
                  <Typography variant="body2" color="textPrimary">
                    {content.content}
                  </Typography>
                </CardContents>
              );
            })}
          </DescriptionCard>
         
        </Cards>
        <Cards>
          <CardItemTitle>
            <YouTubeIcon />
            <h3>YouTube</h3>
          </CardItemTitle>
          <DescriptionCard>
            {youtubeContent.slice(0, 4).map((content) => {
              return (
                <CardContents
                  onClick={() => {
                    if (content.comp == "video") {
                      router.push({
                        pathname: "/home/VideoGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "caption") {
                      router.push({
                        pathname: "/home/CaptionGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "desc") {
                      router.push({
                        pathname: "/home/DescGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    }
                  }}
                  key={content.id}
                >
                  <CardItemTitle>{content.title}</CardItemTitle>
                  <Typography variant="body2" color="textPrimary">
                    {content.content}
                  </Typography>
                </CardContents>
              );
            })}
          </DescriptionCard>
          <DescriptionCard>
            {youtubeContent.slice(4, 6).map((content, index) => {
              return (
                <CardContents
                  onClick={() => {
                    if (content.comp == "video") {
                      router.push({
                        pathname: "/home/VideoGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "caption") {
                      router.push({
                        pathname: "/home/CaptionGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "desc") {
                      router.push({
                        pathname: "/home/DescGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "hashtag") {
                      router.push({
                        pathname: "/home/HashtagGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "thumbnail") {
                      router.push({
                        pathname: "/home/ThumbGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    }
                  }}
                  key={content.id}
                >
                  <CardItemTitle>{content.title}</CardItemTitle>
                  <Typography variant="body2" color="textPrimary">
                    {content.content}
                  </Typography>
                </CardContents>
              );
            })}
          </DescriptionCard>
        </Cards>
        <Cards>
          <CardItemTitle>
            <TwitterIcon />
            <h3>Twitter</h3>
          </CardItemTitle>
          <DescriptionCard>
            {twitterContent.map((content) => {
              return (
                <CardContents
                  onClick={() => {
                    if (content.comp == "tweet") {
                      router.push({
                        pathname: "/home/Tweet",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "caption") {
                      router.push({
                        pathname: "/home/CaptionGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "desc") {
                      router.push({
                        pathname: "/home/DescGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "hashtag") {
                      router.push({
                        pathname: "/home/HashtagGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "bio") {
                      router.push({
                        pathname: "/home/BioGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    }
                  }}
                  key={content.id}
                >
                  <CardItemTitle>{content.title}</CardItemTitle>
                  <Typography variant="body2" color="textPrimary">
                    {content.content}
                  </Typography>
                </CardContents>
              );
            })}
          </DescriptionCard>
        </Cards>
        <Cards>
          <CardItemTitle>
            <LinkedInIcon />
            <h3>LinkedIn</h3>
          </CardItemTitle>
          <DescriptionCard>
            {linkedInContent.map((content) => {
              return (
                <CardContents
                  onClick={() => {
                    if (content.comp == "LinkedInPost") {
                      router.push({
                        pathname: "/home/LinkedInPostGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "caption") {
                      router.push({
                        pathname: "/home/CaptionGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "desc") {
                      router.push({
                        pathname: "/home/DescGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "bio") {
                      router.push({
                        pathname: "/home/BioGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    }
                  }}
                  key={content.id}
                >
                  <CardItemTitle>{content.title}</CardItemTitle>
                  <Typography variant="body2" color="textPrimary">
                    {content.content}
                  </Typography>
                </CardContents>
              );
            })}
          </DescriptionCard>
        </Cards>
        <Cards>
          <CardItemTitle>
            <TikTokIcon />
            <h3>TikTok</h3>
          </CardItemTitle>
          <DescriptionCard>
            {tiktokContent.map((content) => {
              return (
                <CardContents
                  onClick={() => {
                    if (content.comp == "video") {
                      router.push({
                        pathname: "/home/VideoGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "caption") {
                      router.push({
                        pathname: "/home/CaptionGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "desc") {
                      router.push({
                        pathname: "/home/DescGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "hashtag") {
                      router.push({
                        pathname: "/home/HashtagGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    }
                  }}
                  key={content.id}
                >
                  <CardItemTitle>{content.title}</CardItemTitle>
                  <Typography variant="body2" color="textPrimary">
                    {content.content}
                  </Typography>
                </CardContents>
              );
            })}
          </DescriptionCard>
        </Cards>
        <Cards>
          <CardItemTitle>
            <FacebookIcon />
            <h3>Facebook</h3>
          </CardItemTitle>
          <DescriptionCard>
            {facebookContent.map((content) => {
              return (
                <CardContents
                  onClick={() => {
                    if (content.comp == "video") {
                      router.push({
                        pathname: "/home/VideoGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "caption") {
                      router.push({
                        pathname: "/home/CaptionGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "desc") {
                      router.push({
                        pathname: "/home/DescGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "hashtag") {
                      router.push({
                        pathname: "/home/HashtagGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "adCopy") {
                      router.push({
                        pathname: "/home/AdGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    }
                  }}
                  key={content.id}
                >
                  <CardItemTitle>{content.title}</CardItemTitle>
                  <Typography variant="body2" color="textPrimary">
                    {content.content}
                  </Typography>
                </CardContents>
              );
            })}
          </DescriptionCard>
        </Cards>
        <Cards>
          <CardItemTitle>
            <InstagramIcon />
            <h3>Instagram</h3>
          </CardItemTitle>
          <DescriptionCard>
            {InstagramContent.map((content) => {
              return (
                <CardContents
                  onClick={() => {
                    if (content.comp == "video") {
                      router.push({
                        pathname: "/home/VideoGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "caption") {
                      router.push({
                        pathname: "/home/CaptionGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "bio") {
                      router.push({
                        pathname: "/home/BioGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "desc") {
                      router.push({
                        pathname: "/home/DescGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "hashtag") {
                      router.push({
                        pathname: "/home/HashtagGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    } else if (content.comp == "adCopy") {
                      router.push({
                        pathname: "/home/AdGen",
                        query: {
                          platform: content.platform,
                          title: content.title,
                        },
                      });
                    }
                  }}
                  key={content.id}
                >
                  <CardItemTitle>{content.title}</CardItemTitle>
                  <Typography variant="body2" color="textPrimary">
                    {content.content}
                  </Typography>
                </CardContents>
              );
            })}
          </DescriptionCard>
        </Cards>{" "}
      </Grid>
    </Grid>
  );
};

export default Home;
