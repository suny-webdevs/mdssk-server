/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/lib/mongoose"
import Blog from "@/models/blog.model"
import SendResponse from "@/utils/SendResponse"

export const GET = async (
  req: Request,
  {
    params,
  }: {
    params: Promise<{ blogId: string }>
  }
) => {
  try {
    await connectToDatabase()
    const { blogId } = await params
    const res = await Blog.findById(blogId).populate("authorId")
    return SendResponse(201, true, "Blog fetched successfully", res)
  } catch (error: any) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const PATCH = async (
  req: Request,
  { params }: { params: Promise<{ blogId: string }> }
) => {
  try {
    await connectToDatabase()
    const data = await req.json()
    const { blogId } = await params
    const res = await Blog.findByIdAndUpdate(blogId, data)
    return SendResponse(201, true, "Blog updated successfully", res)
  } catch (error: any) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ blogId: string }> }
) => {
  try {
    await connectToDatabase()
    const { blogId } = await params
    const res = await Blog.findByIdAndDelete(blogId)
    return SendResponse(201, true, "Blog deleted successfully", res)
  } catch (error: any) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}
