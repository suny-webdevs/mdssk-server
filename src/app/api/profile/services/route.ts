import { connectToDatabase } from "@/lib/mongoose"
import { Profile, Service } from "@/models/profile.model"
import SendResponse from "@/utils/SendResponse"
import { Types } from "mongoose"

export const POST = async (req: Request) => {
  try {
    await connectToDatabase()
    const { userId, ...payload } = await req.json()
    const res = await Service.create(payload)
    await Profile.findOneAndUpdate(
      { userId },
      { $push: { services: new Types.ObjectId(res._id) } },
      { new: true }
    )
    return SendResponse(201, true, "Service created successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const GET = async () => {
  try {
    await connectToDatabase()
    const res = await Service.find()
    return SendResponse(200, true, "Services fetched successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const PUT = async (req: Request) => {
  try {
    await connectToDatabase()
    const { _id, ...payload } = await req.json()
    const res = await Service.findByIdAndUpdate(_id, payload, {
      new: true,
    })
    return SendResponse(200, true, "Service updated successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const DELETE = async (req: Request) => {
  try {
    await connectToDatabase()
    const { userId, _id } = await req.json()
    const res = await Service.findByIdAndDelete(_id)
    await Profile.findOneAndUpdate(
      { userId },
      { $pull: { services: _id } },
      { new: true }
    )
    return SendResponse(200, true, "Service deleted successfully", res)
  } catch (error) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}
