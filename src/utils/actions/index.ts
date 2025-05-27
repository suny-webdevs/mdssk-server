"use server"

import { TLoginInputValues } from "@/types"
import { cookies } from "next/headers"

export const setCookie = async (cookieName: string, cookieValue: string) => {
  const cookieStore = await cookies()
  cookieStore.set(cookieName, cookieValue)
}

export const getCookie = async (cookieName: string) => {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(cookieName)!.value
  return cookie
}

export const deleteCookie = async (cookieName: string) => {
  const cookieStore = await cookies()
  cookieStore.delete(cookieName)
}

export const loginUser = async (data: TLoginInputValues) => {
  try {
    const res = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const loginInfo = await res.json()
    await setCookie("token", loginInfo?.data?.token)
    return loginInfo
  } catch (error) {
    console.log(error)
  }
}
