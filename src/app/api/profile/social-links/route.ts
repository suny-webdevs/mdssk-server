import { connectToDatabase } from "@/lib/mongoose"
import { Profile, SocialLink } from "@/models/profile.model"
import SendResponse from "@/utils/SendResponse"
import { Types } from "mongoose"

export const POST = async (req: Request) => {
  try {
    await connectToDatabase()
    const { userId, ...payload } = await req.json()
    const res = await SocialLink.create(payload)
    await Profile.findOneAndUpdate(
      { userId },
      { $push: { education: new Types.ObjectId(res?._id) } },
      { new: true }
    )
    return SendResponse(201, true, "Social link created successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const GET = async () => {
  try {
    await connectToDatabase()
    const res = await SocialLink.find()
    return SendResponse(200, true, "Social links fetched successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const PUT = async (req: Request) => {
  try {
    await connectToDatabase()
    const { _id, ...payload } = await req.json()
    const res = await SocialLink.findByIdAndUpdate(_id, payload, {
      new: true,
    })
    return SendResponse(200, true, "Social link updated successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const DELETE = async (req: Request) => {
  try {
    await connectToDatabase()
    const { userId, _id } = await req.json()
    const res = await SocialLink.findByIdAndDelete(_id)
    await Profile.findOneAndUpdate(
      { userId },
      { $pull: { education: _id } },
      { new: true }
    )
    return SendResponse(200, true, "Social link deleted successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}
