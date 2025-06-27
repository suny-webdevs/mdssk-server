/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/lib/mongoose"
import Project from "@/models/portfolio.model"
import SendResponse from "@/utils/SendResponse"

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    await connectToDatabase()
    const { projectId } = await params
    const res = await Project.findById(projectId)
    return SendResponse(200, true, "Project fetched successfully", res)
  } catch (error: any) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const PATCH = async (
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    await connectToDatabase()
    const data = await req.json()
    const { projectId } = await params
    const res = await Project.findByIdAndUpdate(projectId, data)
    return SendResponse(200, true, "Project updated successfully", res)
  } catch (error: any) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    await connectToDatabase()
    const { projectId } = await params
    const res = await Project.findByIdAndDelete(projectId)
    return SendResponse(200, true, "Project deleted successfully", res)
  } catch (error: any) {
    return SendResponse(500, false, "Something went wrong", error)
  }
}
