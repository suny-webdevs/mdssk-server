import { connectToDatabase } from "@/lib/mongoose"
import { User } from "@/models/user.model"
import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDatabase()

        if (!credentials) {
          return null
        }

        const { email, password } = credentials

        const user = await User.findOne({ email })

        if (!user) {
          throw new Error("User not found")
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if (!isPasswordMatched) {
          throw new Error("Password didn't match")
        }

        return user
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
}
