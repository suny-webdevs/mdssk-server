import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { User } from "@/models/user.model"
import { connectToDatabase } from "@/lib/mongoose"
import { TUser } from "@/types"

export const POST = async (req: NextRequest) => {
  try {
    await connectToDatabase()
    let data: TUser = await req.json()

    const existingUser = await User.findOne({ email: data?.email })
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      )
    }
    const hashedPassword = bcrypt.hashSync(
      data?.password,
      Number(process.env.HASH_SALT_ROUND)
    )

    data = { ...data, password: hashedPassword }

    const res = await User.create(data)

    return NextResponse.json(
      { success: true, message: "User created successfully", res },
      { status: 201 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      success: false,
      message: "Internal server error",
      error,
    })
  }
}
