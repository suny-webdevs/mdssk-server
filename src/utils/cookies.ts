"use server"
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

export const hasCookie = async (cookieName: string) => {
  const cookieStore = await cookies()
  const isCookieExists = cookieStore.has(cookieName)
  return isCookieExists
}

export const deleteCookie = async (cookieName: string) => {
  const cookieStore = await cookies()
  cookieStore.delete(cookieName)
}
