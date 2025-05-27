/* eslint-disable @typescript-eslint/no-explicit-any */
import Project from "@/models/portfolio.model"
import { NextResponse } from "next/server"

export const GET = async ({ params }: { params: { projectId: string } }) => {
  try {
    const id = params.projectId
    const res = await Project.findById(id)
    console.log({ res })

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
  { params }: { params: { projectId: string } }
) => {
  try {
    const data = await req.json()
    const id = params.projectId

    const res = await Project.findByIdAndUpdate(id, data)
    console.log({ res })

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

export const DELETE = async ({ params }: { params: { projectId: string } }) => {
  try {
    const id = params.projectId
    const res = await Project.findByIdAndDelete(id)
    console.log({ res })

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
