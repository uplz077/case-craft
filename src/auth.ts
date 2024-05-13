import NextAuth from "next-auth";
// import Github from "next-auth/providers/github";
import Gitee from "./providers/gitee";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    // Github,
    Gitee({
      clientId: process.env.GITEE_CLIENT_ID,
      clientSecret: process.env.GITEE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token }) => {
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
