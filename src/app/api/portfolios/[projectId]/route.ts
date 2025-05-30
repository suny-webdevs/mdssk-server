/* eslint-disable @typescript-eslint/no-explicit-any */
import Project from "@/models/portfolio.model"
import { NextResponse } from "next/server"

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    const { projectId } = await params
    const res = await Project.findById(projectId)

    return NextResponse.json(
      {
        success: true,
        message: "Project fetched successful",
        res,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}

export const PATCH = async (
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    const data = await req.json()
    const { projectId } = await params

    const res = await Project.findByIdAndUpdate(projectId, data)

    return NextResponse.json(
      {
        success: true,
        message: "Project updated successful",
        res,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) => {
  try {
    const { projectId } = await params
    const res = await Project.findByIdAndDelete(projectId)

    return NextResponse.json(
      {
        success: true,
        message: "Project deleted successful",
        res,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}
