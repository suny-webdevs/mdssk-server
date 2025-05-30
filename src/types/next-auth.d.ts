/* eslint-disable @typescript-eslint/no-unused-vars */
// types/next-auth.d.ts
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      name: string | undefined | null
      email: string | undefined | null
      role: string | undefined | null
      image: string | undefined | null
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    name: string | undefined | null
    email: string | undefined | null
    role: string | undefined | null
    image: string | undefined | null
  }
}

declare module "next-auth" {
  interface User {
    name: string | undefined | null
    email: string | undefined | null
    role: string | undefined | null
    image: string | undefined | null
  }
}
