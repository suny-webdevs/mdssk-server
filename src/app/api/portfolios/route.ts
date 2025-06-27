/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/lib/mongoose"
import Project from "@/models/portfolio.model"
import SendResponse from "@/utils/SendResponse"

export const POST = async (req: Request) => {
  try {
    await connectToDatabase()
    const payload = await req.json()
    const res = await Project.create(payload)
    console.log(res)
    return SendResponse(201, true, "Project added successfully", res)
  } catch (error: any) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const GET = async () => {
  try {
    await connectToDatabase()
    const res = await Project.find()

    return SendResponse(200, true, "Project fetched successfully", res)
  } catch (error: any) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}
