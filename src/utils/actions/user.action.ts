"use server"

import { TUser } from "@/types"

export const getUser = async (email: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/user/${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    )
    const userData = await res.json()
    if (userData.success) {
      return userData
    } else {
      throw new Error("User fetched failed")
    }
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (email: string, data: Partial<TUser>) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/user/${email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      }
    )
    const updatedData = await res.json()
    if (updatedData.success && updatedData.data !== null) {
      return updatedData
    } else {
      throw new Error("User update failed")
    }
  } catch (error) {
    console.log(error)
  }
}

// export const deleteUser = async (email: string) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/user/${email}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         cache: "no-store",
//       }
//     )
//     const userData = await res.json()
//     if (userData.success) {
//       return userData
//     } else {
//       throw new Error("User delete failed")
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
