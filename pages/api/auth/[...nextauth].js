import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    Twitter({
      clientId: "CMsNJUbU7WaCRSCshtAojF4ud",
      clientSecret: "jFkDLf9W71Fm6ApO2aZX240n5PMR6aGAHscATTg5MgTncZy6fF",
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
  secret: "mySecretValue",
});
