import { getSession } from "next-auth/react";
export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    // User is authenticated
    const user = session.user; // User object with profile information
    const twitterAccessToken = session.accessToken; // Twitter access token
    const twitterAccessTokenSecret = session.accessTokenSecret; // Twitter access token secret
    console.log(
      "🚀 ~ file: [...nextauth].js:22 ~ getData ~ twitterAccessTokenSecret:",
      twitterAccessTokenSecret
    );

    // You can use these tokens to make authenticated Twitter API requests
    // or access any other user-related data you need.

    res
      .status(200)
      .json({ user, twitterAccessToken, twitterAccessTokenSecret });
  } else {
    // User is not authenticated
    res.status(401).json({ error: "Unauthorized" });
  }
};
