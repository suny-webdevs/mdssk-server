import { User } from "@/models/user.model"
import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
// import { setCookie } from "./actions"
import { TLoginInputValues } from "@/types"
// import jd from "jwt-decode"

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials === null) return null
        const { email, password } = credentials as TLoginInputValues
        const user = await User.findOne({ email })
        console.log("Auth options", { user })
        if (!user) {
          throw new Error("No user found with this email")
        }
        const isValid = bcrypt.compareSync(password, user.password)
        if (!isValid) {
          throw new Error("Invalid password")
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        )
        const data = await res.json()

        if (data.success) {
          // await setCookie("token", data?.data?.token)
          return { id: user?._id, email: user?.email, role: user?.role }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
}
