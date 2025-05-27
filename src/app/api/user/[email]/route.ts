/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/lib/mongoose"
import { User } from "@/models/user.model"
import { NextResponse } from "next/server"

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ email: string }> }
) => {
  try {
    await connectToDatabase()

    const { email } = await params

    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: "User fetched successfully", user },
      { status: 200 }
    )
  } catch (error: any) {
    console.error(error)
    throw new Error(error.message)
  }
}
