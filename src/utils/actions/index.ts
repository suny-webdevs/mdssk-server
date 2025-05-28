/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { TLoginInputValues } from "@/types"
import { setCookie } from "../cookies"

export const loginUser = async (data: TLoginInputValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    const loginInfo = await res.json()

    if (loginInfo.success) {
      await setCookie("token", loginInfo?.data?.token)

      return loginInfo
    } else {
      throw Error("Login failed!")
    }
  } catch (error: any) {
    console.log(error)
  }
}
