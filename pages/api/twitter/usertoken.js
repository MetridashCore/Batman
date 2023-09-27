import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { TwitterApi } from "twitter-api-v2";

export default async (req, res) => {
  if (req.method == "POST") {
    const session = await getSession({ req });
    const token = await getToken({
      req,
      secret: process.env.NEXT_TWITTER_JWT_SECRET,
    });
    console.log(req.body, "reqbody");
    console.log("session", session);
    try {
      if (token.token.account.oauth_token) {
        const words = req.body.word.split(/\s+/);
        const first10Words = words.slice(0, 10);
        const result = first10Words.join(" ");
        const client = new TwitterApi({
          appKey: process.env.NEXT_TWITTER_CONSUMER_KEY,
          appSecret: process.env.NEXT_TWITTER_CONSUMER_SECRET,
          accessToken: token.token.account.oauth_token,
          accessSecret: token.token.account.oauth_token_secret,
        });
        await client.v2.tweet({
          text: result ? result : "ram",
          // media: { media_ids: [mediaId] },
        });
        return res.status(200).json({
          status: 200,
          message: "tweet posted successfully",
        });
      } else {
        return res.status(200).json({
          status: 200,
          token,
        });
      }
    } catch (e) {
      console.log("errrrrrrrrrrrrrrrrrrrrrr", e);
      return res.status(400).json({
        status: e.message,
      });
    }
  }
};
