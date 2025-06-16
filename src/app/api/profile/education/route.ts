import { connectToDatabase } from "@/lib/mongoose"
import { Education, Profile } from "@/models/profile.model"
import SendResponse from "@/utils/SendResponse"
import { Types } from "mongoose"

export const POST = async (req: Request) => {
  try {
    await connectToDatabase()
    const { userId, ...payload } = await req.json()
    const res = await Education.create(payload)

    await Profile.findOneAndUpdate(
      { userId },
      { $push: { education: new Types.ObjectId(res?._id) } },
      { new: true }
    )

    return SendResponse(201, true, "Education created successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const GET = async () => {
  try {
    await connectToDatabase()
    const res = await Education.find()
    return SendResponse(200, true, "Education fetched successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}
