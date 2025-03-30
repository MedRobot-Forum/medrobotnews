import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

const auth = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})

export default auth 