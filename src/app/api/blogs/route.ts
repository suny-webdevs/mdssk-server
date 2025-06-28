/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/lib/mongoose"
import Blog from "@/models/blog.model"
import SendResponse from "@/utils/SendResponse"

export const POST = async (req: Request) => {
  try {
    await connectToDatabase()
    const { authorId, ...payload } = await req.json()
    const res = await Blog.create({ authorId, ...payload })
    return SendResponse(201, true, "Blog created successfully", res)
  } catch (error: any) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const GET = async () => {
  try {
    await connectToDatabase()
    const res = await Blog.find()
    return SendResponse(201, true, "Blogs fetched successfully", res)
  } catch (error: any) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}
