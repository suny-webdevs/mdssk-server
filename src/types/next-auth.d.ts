/* eslint-disable @typescript-eslint/no-unused-vars */
// types/next-auth.d.ts
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string | undefined | null
      name: string | undefined | null
      email: string | undefined | null
      role: string | undefined | null
      image: string | undefined | null
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string | undefined | null
    name: string | undefined | null
    email: string | undefined | null
    role: string | undefined | null
    image: string | undefined | null
  }
}

declare module "next-auth" {
  interface User {
    id: string | undefined | null
    name: string | undefined | null
    email: string | undefined | null
    role: string | undefined | null
    image: string | undefined | null
  }
}
