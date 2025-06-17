import { connectToDatabase } from "@/lib/mongoose"
import { Certification, Profile } from "@/models/profile.model"
import SendResponse from "@/utils/SendResponse"
import { Types } from "mongoose"

export const POST = async (req: Request) => {
  try {
    await connectToDatabase()
    const { userId, ...payload } = await req.json()
    const res = await Certification.create(payload)
    await Profile.findOneAndUpdate(
      { userId },
      { $push: { certification: new Types.ObjectId(res?._id) } },
      { new: true }
    )
    return SendResponse(201, true, "Certification created successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const GET = async () => {
  try {
    await connectToDatabase()
    const res = await Certification.find()
    return SendResponse(200, true, "Certifications fetched successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const PUT = async (req: Request) => {
  try {
    await connectToDatabase()
    const { _id, ...payload } = await req.json()
    const res = await Certification.findByIdAndUpdate(_id, payload, {
      new: true,
    })
    return SendResponse(200, true, "Certification updated successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const DELETE = async (req: Request) => {
  try {
    await connectToDatabase()
    const { userId, _id } = await req.json()
    const res = await Certification.findByIdAndDelete(_id)
    await Profile.findOneAndUpdate(
      { userId },
      { $pull: { certification: _id } },
      { new: true }
    )
    return SendResponse(200, true, "Certification deleted successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}
