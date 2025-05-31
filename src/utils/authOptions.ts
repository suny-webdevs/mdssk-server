import { connectToDatabase } from "@/lib/mongoose"
import { User } from "@/models/user.model"
import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }
        const { email, password } = credentials

        await connectToDatabase()
        const currentUser = await User.findOne({ email })

        if (!currentUser) {
          return null
        }

        const isPasswordMatched = await bcrypt.compare(
          password,
          currentUser?.password
        )

        if (!isPasswordMatched) {
          return null
        }

        return currentUser
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role

      return session
    },
  },
}
