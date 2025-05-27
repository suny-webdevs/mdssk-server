/* eslint-disable @typescript-eslint/no-explicit-any */
import Blog from "@/models/blog.model"
import { NextResponse } from "next/server"

export const GET = async ({ params }: { params: { blogId: string } }) => {
  try {
    const id = params.blogId
    const res = await Blog.findById(id)
    console.log({ res })

    return NextResponse.json(
      {
        success: true,
        message: "Blog fetched successful",
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
  { params }: { params: { blogId: string } }
) => {
  try {
    const data = await req.json()
    const id = params.blogId

    const res = await Blog.findByIdAndUpdate(id, data)
    console.log({ res })

    return NextResponse.json(
      {
        success: true,
        message: "Blog updated successful",
        res,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}

export const DELETE = async ({ params }: { params: { blogId: string } }) => {
  try {
    const id = params.blogId
    const res = await Blog.findByIdAndDelete(id)
    console.log({ res })

    return NextResponse.json(
      {
        success: true,
        message: "Blog deleted successful",
        res,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}
