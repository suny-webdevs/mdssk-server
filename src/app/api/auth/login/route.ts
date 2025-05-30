import { User } from "@/models/user.model"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import jwt, { JwtPayload } from "jsonwebtoken"
import { connectToDatabase } from "@/lib/mongoose"

export const POST = async (req: Request) => {
  try {
    await connectToDatabase()
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      )
    }

    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      )
    }

    const isMatch = await bcrypt.compare(password, user?.password)

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      { email: user?.email, role: user?.role } as JwtPayload,
      process.env.JWT_ACCESS_SECRET as string,
      { expiresIn: "1d" }
    )

    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        data: { token },
      },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
  }
}
