/* eslint-disable @typescript-eslint/no-explicit-any */
import Project from "@/models/portfolio.model"
import { TPortfolioProject } from "@/types/portfolio.type"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
  try {
    const data: TPortfolioProject = await req.json()

    const res = await Project.create(data)

    return NextResponse.json(
      {
        success: true,
        message: "Project added successful",
        res,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}

export const GET = async () => {
  try {
    const res = await Project.find()

    return NextResponse.json(
      {
        success: true,
        message: "Projects fetched successful",
        res,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}
