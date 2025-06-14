import { connectToDatabase } from "@/lib/mongoose"
import { Profile } from "@/models/profile.model"
import { hasCookie } from "@/utils"
import SendResponse from "@/utils/SendResponse"

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ userId: string }> }
) => {
  const token = await hasCookie("next-auth.session-token")
  console.log({ token })
  if (!token) {
    return SendResponse(401, false, "UNAUTHORIZED access", {
      message: "You should be authorized",
    })
  }
  try {
    await connectToDatabase()
    const { userId } = await params
    const res = await Profile.findOne({ userId })
      .populate("education")
      .populate("services")
      .populate("certification")
      .populate("socialLinks")
    return SendResponse(200, true, "Profile get successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const PUT = async (
  req: Request,
  { params }: { params: Promise<{ userId: string }> }
) => {
  const token = await hasCookie("next-auth.session-token")
  console.log({ token })
  if (!token) {
    return SendResponse(401, false, "UNAUTHORIZED access", {
      message: "You should be authorized",
    })
  }
  try {
    await connectToDatabase()
    const { biography, skills } = await req.json()
    const { userId } = await params
    const res = await Profile.findOneAndUpdate(
      { userId },
      { biography, skills }
    )
    return SendResponse(200, true, "Profile updated successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}
