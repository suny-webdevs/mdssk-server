import { connectToDatabase } from "@/lib/mongoose"
import { User } from "@/models/user.model"
import { NextResponse } from "next/server"

export const GET = async (
  req: Request,
  { params }: { params: { email: string } }
) => {
  try {
    await connectToDatabase()

    const { email } = params

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
  } catch (error) {
    console.error("Error fetching user by email:", error)
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
