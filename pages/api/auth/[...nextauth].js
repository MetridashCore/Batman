import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    Twitter({
      clientId: process.env.NEXT_TWITTER_CONSUMER_KEY,
      clientSecret: process.env.NEXT_TWITTER_CONSUMER_SECRET,
    }),
  ],
  callbacks: {
    async jwt(token, user, account = {}, profile, isNewUser) {
      if (account.provider && !token[account.provider]) {
        token[account.provider] = {};
      }

      if (account.accessToken) {
        token[account.provider].accessToken = account.accessToken;
      }

      if (account.refreshToken) {
        token[account.provider].refreshToken = account.refreshToken;
      }

      return token;
    },
  },
  secret: process.env.NEXT_TWITTER_JWT_SECRET,
});
